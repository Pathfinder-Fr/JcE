/// <reference path="dataset.fr.js" />
/// <reference path="mustache.js" />
/// <reference path="json2.js" />
/// <reference path="http://code.jquery.com/jquery-2.1.0.min.js" />
/// <reference path="trace.js" />
/// <reference path="editor.js" />
/// <reference path="serializer.js" />

var character = {

    /// <field>contains all datas specific to this player.</field>
    datas: undefined,

    /// <field>list of all character names.</field>
    characters: [],

    /// <field>list of all cards, grouped by card type. used to build a &lt;select&gt; html element for each card slot in player deck.</field>
    cardSelectors: [],

    /// <field>name of current prestige class for the character. empty if the character is a base character.</field>
    prestigeClassName: undefined,

    /// <field>contains context datas used when rendering html.</field>
    renderDatas: {
        powerRow: 0,
        powerIndex: 0
    },

    resetDatas: function() {
        return {
            /// <field>index of the selected character.</field>
            characterIndex: -1,
            /// <field>index of the selected prestige class, 0 for a base character</field>
            prestigeClassIndex: 0,
            /// <field>selected abilities bonuses.</field>
            abilities: [0, 0, 0, 0, 0, 0],
            /// <field>array of proficiencies. 0: light armors, 1: heavy armors, 2: weapons.</field>
            proficiencies: [false, false, false],
            /// <field>max number of cards in hands.</field>
            handSize: 0,
            /// <field>array of max card count in player deck for each card type.</field>
            cardsCount: [0, 0, 0, 0, 0, 0],
            /// <field>array of powers, where each item is an array itself with all checkbox's states. ex: [[true, false], [], [true]].</field>
            powers: [],
            /// <field>player deck, arranged by card type.</field>
            deck: [null, null, null, null, null, null],
        };
    },

    init: function() {
        trace.enter("character.init()");

        // reset datas
        this.datas = this.resetDatas();

        // initialize character names
        this.characters = Array(dataset.characters.length);
        for (var x = 0; x < dataset.characters.length; x++) {
            this.characters[x] = {
                name: dataset.characters[x].name,
                link: serializer.serializeCharacterLink(x)
            };
        }

        // initialize card selector
        for (var i = 0; i < 6; i++) {
            var cards = dataset.cards[i];

            // cardSelector is populated with all cards from this type
            // index is generated with source * editor.cardSourceOffset (32) (1 = base, 2 = goodies, 3 = 1st adventure pack, etc.) + card index
            // so, there is a maximum of 31 cards per type for each source.
            var cardSelector = [];
            for (var j = 0; j < cards.length; j++) {
                var cardSource = cards[j] = (cards[j] || {});
                cardSource.cards = cardSource.cards || [];
                for (var k = 0; k < cardSource.cards.length; k++) {
                    cardSelector.push({ index: j * editor.cardSourceOffset + k, text: cardSource.cards[k] });
                }
            }

            this.cardSelectors[i] = cardSelector;
        }


        trace.leave("character.init()");
    },

    prepareRender: function() {
        this.renderDatas = {
            powerRow: 0,
            powerIndex: 0
        }
    },

    setCharacter: function(newIndex) {
        if (this.datas.characterIndex === newIndex && this.datas.prestigeClassIndex === 0) {
            return false;
        }

        trace.log("character.setCharacter(%d)", newIndex);
        var reset = this.datas.characterIndex !== newIndex;

        // character
        this.datas.characterIndex = newIndex;

        // copy from dataset
        this.proficiencies = null;
        this.datas.proficiencies = [false, false, false];
        var datasetCharacter = dataset.characters[this.datas.characterIndex || 0];
        for (var o in datasetCharacter) {
            this[o] = datasetCharacter[o];
        }

        // prestigeclass
        this.datas.prestigeClassIndex = 0;
        this.prestigeClassName = undefined;
        for (var x = 0; x < this.prestigeClasses.length; x++) {
            this.prestigeClasses[x].index = x + 1;
        }

        // abilities
        var i = 0;
        for (var abilityKey in this.abilities) {
            var ability = this.abilities[abilityKey];
            ability.name = dataset.abilities[i];
            ability.type = abilityKey;
            ability.index = i;

            // maxArray is filled with "max" items. eg: max=3 => maxArray = [1, 2, 3]
            ability.maxArray = this.fillArray(ability.max, function(_, j) { return j + 1; });

            for (var skill in ability.skills) {
                ability.skills[skill].parentName = ability.name;
            }

            i++;
        }

        // hand size
        this.updateHandSize(reset);

        // we replace the proficiencies with a detailled object used for rendering
        this.hasProficiencies = this.proficiencies != undefined;
        if (this.hasProficiencies) {
            for (var y = 0; y < this.proficiencies.length; y++) {
                var proficiency = this.proficiencies[y];
                if (typeof proficiency === "string") {
                    var withCheck = proficiency.substr(0, 3) === "{0}";
                    this.proficiencies[y] = {
                        index: y,
                        text: proficiency.substr(0, 3) === "{0}" ? proficiency.substr(3) : proficiency,
                        alwayson: !withCheck ? "checked disabled" : "",
                    };
                }
            }
        }

        this.updatePowers(reset);

        this.updateCardsCount(reset);

        // cards owned by the character
        this.updateCards(reset);

        return true;
    },

    setPrestigeClass: function(newIndex) {
        if (this.datas.prestigeClassIndex === newIndex) {
            return;
        }

        trace.log("character.setPrestigeClass(%d) (old=%d)", newIndex, this.datas.prestigeClassIndex);

        if (newIndex === 0) {
            this.setCharacter(this.datas.characterIndex);
            return;
        }

        var prestigeClass = this.prestigeClasses[newIndex - 1];
        if (prestigeClass == undefined) {
            return;
        }

        this.prestigeClassName = prestigeClass.name;

        // ajust hand size
        if (prestigeClass.handSize) {
            this.handSize = {
                base: prestigeClass.handSize.base,
                max: prestigeClass.handSize.max || prestigeClass.handSize.base
            };
            this.updateHandSize();
        }

        // ajust powers
        this.powers = [];
        for (var i = 0; i < prestigeClass.powers.length; i++) {
            this.powers[i] = prestigeClass.powers[i];
        }
        this.updatePowers(false);

        this.datas.prestigeClassIndex = newIndex;

        return;
    },

    setAbility: function(index, value, selected) {
        trace.log("character.setAbility(%d, %d, %s)", index, value, selected);
        this.datas.abilities[index] = selected ? value : value - 1;
    },

    setProficienty: function(index, selected) {
        trace.log("character.setProficiency(%d, %s)", index, selected);
        this.datas.proficiencies[index] = selected;
    },

    setHandSize: function(value, selected) {
        trace.log("character.setHandSize(%d, %s)", value, selected);
        this.datas.handSize = selected ? value : value - 1;
    },

    setPower: function(rowIndex, index, isPrereq, selected) {
        trace.log("character.setPower(%d, %d, %s, %s)", rowIndex, index, isPrereq, selected);
        var row = this.datas.powers[rowIndex] || (this.datas.powers[rowIndex] = this.fillArray(index, function() { return false; }));
        row[index] = selected;
        if (isPrereq && !selected) {
            for (var i = 1; i < row.length; i++) {
                row[i] = false;
            }
        }
    },

    setCardCount: function(index, value, selected) {
        trace.log("character.setCardCount(%d, %d, %s)", index, value, selected);
        this.datas.cardsCount[index] = selected ? value : value - 1;
        this.updateCards(false);
    },

    setCardSlot: function(type, index, value) {
        /// <summary>
        /// Set the card value for the specified card slot.
        /// </summary>
        /// <param name="type">Type of the card, based on <see cref="dataset.cardTypes" />.</param>
        /// <param name="type">Index of the card on the character deck.</param>
        /// <param name="value">Value of the card, which is a 1 byte value composed of source (first 3 bits) then card index (remaining 5 bits).</param>
        trace.log("character.setCardSlot(%d, %d, %d { source: %d, index: %d })", type, index, value, value >> 5, value & 0x000fffff);
        this.datas.deck[type].cards[index].value = value;
    },

    updateHandSize: function(reset) {
        trace.log("character.updateHandSize(%s)", reset);
        if (reset) {
            this.datas.handSize = this.handSize.base;
        }

        this.datas.handSize = Math.min(this.handSize.max || this.handSize.base, this.datas.handSize);

        this.handSize.maxArray = this.fillArray((this.handSize.max || this.handSize.base) - this.handSize.base, function(x, i) { return character.handSize.base + i + 1; });
    },

    updatePowers: function(reset) {
        trace.log("character.updatePowers(%s)", reset);

        if (this.datas.powers.length > this.powers.length) {
            this.datas.powers = this.datas.powers.slice(0, this.powers.length);
        }

        for (var i = 0; i < this.powers.length; i++) {

            var count = (this.powers[i].match(/{(\d)}/g) || []).length;

            var powerRow = this.datas.powers[i] = (this.datas.powers[i] || []);
            if (powerRow.length > count) {
                powerRow = this.datas.powers[i] = powerRow.slice(0, count);
            }

            if (reset) {
                for (var j = 0; j < count; j++) {
                    powerRow[j] = false;
                }
            }
        }
    },

    updateCardsCount: function(reset) {
        trace.log("character.updateCardsCount(%s)", reset);

        var i = -1;
        for (var cardTypeKey in this.deck) {
            if (i == -1) {
                // we skip the first item, which is the predilectionCardType
                i++;
                continue;
            }

            var cardType = this.deck[cardTypeKey];
            var cardTypeBase = cardType.base = cardType.base || 0;
            var cardTypeIndex = i;
            cardType.name = dataset.cardTypes[i];
            cardType.index = i;
            cardType.type = cardTypeKey;

            var count = (cardType.max || cardType.base) - cardType.base;
            cardType.array = this.fillArray(count, function(_, y) { return { index: cardTypeIndex, value: cardTypeBase + y + 1 } });

            if (reset) {
                this.datas.cardsCount[i] = cardTypeBase;
            }

            i++;
        }
    },

    updateCards: function(reset) {
        /// <summary>update character deck.</summary>
        trace.log("character.updateCards(%s)", reset);

        for (var i = 0; i < 6; i++) {
            var count = this.datas.cardsCount[i];
            var deckSlot = this.datas.deck[i] = (this.datas.deck[i] || { name: dataset.cardTypes[i], cards: [], hasCards: false });

            if (count == 0) {
                deckSlot.cards = [];
            } else if (deckSlot.cards.length > count) {
                deckSlot.cards = deckSlot.cards.slice(0, count);
            }

            for (var j = 0; j < count; j++) {
                deckSlot.cards[j] = deckSlot.cards[j] || {
                    type: i,
                    index: j,
                    value: 0,
                }

                if (reset) {
                    deckSlot.cards[j].value = this.defaultDeck[i][j];
                }
            }

            deckSlot.hasCards = count != 0;
        }
    },

    parsePower: function() {
        return function(text, render) {
            text = render(text);

            var html = "";

            // First checkbox
            if (text.substr(0, 3) === "{0}") {
                html += "<input type=\"checkbox\" class=\"power\" data-row=\"" + character.renderDatas.powerRow + "\" data-role=\"prereq\" data-index=\"0\" />";
                text = text.substr(3);
            }

            // then each following checkbox,
            character.renderDatas.powerIndex = 0;
            html += text.replace(/{(\d)}/g, function(match, index) {
                var result = "<input type=\"checkbox\" class=\"power\" data-row=\"" + character.renderDatas.powerRow + "\" data-index=\"" + index + "\" />";
                character.renderDatas.powerIndex++;
                return result;
            });

            character.renderDatas.powerRow++;

            return html;
        }
    },

    getSpentPoints: function() {
        var p = 0;

        // abilities
        trace.log("before abilities: %d", p);
        for (var x = 0; x < 6; x++) {
            p += this.datas.abilities[x] || 0;
        }

        // hand size
        trace.log("before handSize: %d", p);
        p += ((this.datas.handSize || this.handSize.base) - this.handSize.base);

        // proficiencies
        trace.log("before proficiencies: %d", p);
        for (var y = 0; y < this.datas.proficiencies.length; y++) {
            p += this.datas.proficiencies[y] ? 1 : 0;
        }

        // powers
        trace.log("before powers: %d", p);
        if (this.datas.powers) {
            for (var i = 0; i < this.datas.powers.length; i++) {
                var row = this.datas.powers[i];
                if (row) {
                    for (var j = 0; j < row.length; j++) {
                        if (row[j]) {
                            p++;
                        }
                    }
                }
            }
        }

        // cards
        trace.log("before cards: %d", p);
        i = -1;
        for (var cardTypeKey in this.deck) {
            if (i >= 0) {
                var count = this.datas.cardsCount[i] || this.deck[cardTypeKey].base;
                var base = this.deck[cardTypeKey].base;
                trace.log("cards[%d] = %d - %d", i, count, base);
                p += count - base;
            }

            i++;
        }

        return p;
    },

    renderDeckCardSelector: function() {
        var selectorType = this.type;
        var selectedIndex = this.index;

        var selector = $("<select>")
            .addClass("card")
            .addClass("form-control")
            .attr("data-type", selectorType)
            .attr("data-index", selectedIndex);

        $.each(dataset.cards[selectorType], function(source, value) {
            if (value.cards.length > 0) {
                selector.append($("<optgroup>").attr("label", dataset.sources[source]));
                $.each(value.cards, function(index, text) {
                    var cardValue = source * editor.cardSourceOffset + index;
                    selector.append($("<option>")
                        .attr("value", cardValue)
                        .text(text)
                        .prop("isSelected", character.datas.deck[selectorType][selectedIndex] === cardValue)
                    );;
                });
            }
        });

        return selector[0].outerHTML;
    },

    translateCardType: function() {
        return function(cardType, render) {
            cardType = render(cardType);
            switch (cardType) {
            case 'weapon':
                return dataset.cardTypes[0];
            case 'spell':
                return dataset.cardTypes[1];
            case 'armor':
                return dataset.cardTypes[2];
            case 'item':
                return dataset.cardTypes[3];
            case 'ally':
                return dataset.cardTypes[4];
            case 'blessing':
                return dataset.cardTypes[5];
            case 'choose':
                return dataset.cardTypes[6];
            default:
                return cardType;
            }
        }
    },

    fillArray: function(size, map) {
        var array = Array.apply(null, Array(size));
        return array.map(map);
    },

    reverse: function(s) {
        return s.split("").reverse().join("");
    },
};