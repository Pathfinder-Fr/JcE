/// <reference path="dataset.fr.js" />
/// <reference path="mustache.js" />
/// <reference path="json2.js" />
/// <reference path="http://code.jquery.com/jquery-2.1.0.min.js" />
/// <reference path="trace.js" />
/// <reference path="character.js" />
/// <reference path="editor.js" />

var serializer = {

    /// <field>Current serialized version.</field>
    version: 2,

    /// <field>
    /// Count of card types, based on dataset minus 1 (because dataset also store a card type for the predilection card type 'at choice'.
    /// In most cases, this value is 6.
    /// </field>
    cardTypeCount: dataset.cardTypes.length - 1,

    deserialize: function(s) {
        if (s.length === 0)
            return;

        if (s[0] === "#")
            s = s.substr(1);

        if (s.length === 0)
            return;

        trace.log("editor.deserialize(%s)", s);

        var frames = s.split(",");

        var version = parseInt(frames[0], 36);

        switch (version) {
        case 1:
            this.deserialize1(frames);
            break;

        case 2:
            this.deserialize2(frames);
            break;
        }
    },

    deserialize1: function(frames) {
        var x = 1;
        var characterOnly = frames.length == 2;

        this.deserializeCharacterFrame(frames[x], x, characterOnly);

        if (characterOnly)
            return;

        // frame 2 : card count
        x++;
        this.deserializeCardCountFrame(frames[x], x);

        // frame 3 : powers
        x++;
        this.deserializePowersFrame(frames[x], x);

        // frame xx : deck in 48bits frames
        x++;
        this.deserializeDeck1(frames, x);
    },

    deserialize2: function(frames) {
        var x = 1;
        var characterOnly = frames.length == 2;

        this.deserializeCharacterFrame(frames[x], x, characterOnly);

        if (characterOnly)
            return;

        // frame 2 : card count
        x++;
        this.deserializeCardCountFrame(frames[x], x);

        // frame 3 : powers
        x++;
        this.deserializePowersFrame(frames[x], x);

        // frame xx : deck in 48bits frames
        x++;
        this.deserializeDeck2(frames, x);
    },

    deserializeCardCountFrame: function(frame, x) {
        var b = this.padLeft(parseInt(frame, 36).toString(2), 24);
        trace.log("<- frame[%d] = %s", x - 1, b);

        character.setCardCount(0, parseInt(b.substr(0, 4), 2), true);
        character.setCardCount(1, parseInt(b.substr(4, 4), 2), true);
        character.setCardCount(2, parseInt(b.substr(8, 4), 2), true);
        character.setCardCount(3, parseInt(b.substr(12, 4), 2), true);
        character.setCardCount(4, parseInt(b.substr(16, 4), 2), true);
        character.setCardCount(5, parseInt(b.substr(20, 4), 2), true);
    },

    deserializePowersFrame: function(frame, x) {
        var b = parseInt(frame, 36).toString(2);
        trace.log("<- frame[%d] = %s", x - 1, b);
        b = b.substr(1); // skip flag bit
        var k = 0;
        for (var i = 0; i < character.datas.powers.length; i++) {
            for (var j = 0; j < character.datas.powers[i].length; j++) {
                character.setPower(i, j, false, b[k++] === "1");
            }
        }
    },

    serialize: function(characterLink) {
        characterLink = characterLink || false;

        // max representable number in javascript is 2^53
        var frames = [];
        var x = 0;

        // version
        frames[x++] = (this.version).toString(36);

        // datas
        frames[x++] = this.serializeCharacterFrame(characterLink, x);
        frames[x++] = this.serializeCardCount(x);
        frames[x++] = this.serializePowers(x);
        this.serializeDeck(frames, x);

        // assemble frames
        return frames.join();
    },

    serializeCharacterLink: function (characterIndex) {
        var frames = [];
        frames[0] = (this.version).toString(36);
        frames[1] = parseInt(serializer.padRight(serializer.serializeCharacter(characterIndex, 0), 31), 2).toString(36);

        // assemble frames
        return frames.join();
    },

    serializeCharacterFrame: function(characterLink, x) {
        var b = this.serializeCharacter(character.datas.characterIndex, character.datas.prestigeClassIndex);

        if (!characterLink) {
            // 18 bits : 3 [0...7] x 6: abilities bonus
            b += this.padLeft(character.datas.abilities[0].toString(2), 3); // str
            b += this.padLeft(character.datas.abilities[1].toString(2), 3); // dex
            b += this.padLeft(character.datas.abilities[2].toString(2), 3); // con
            b += this.padLeft(character.datas.abilities[3].toString(2), 3); // int
            b += this.padLeft(character.datas.abilities[4].toString(2), 3); // wis
            b += this.padLeft(character.datas.abilities[5].toString(2), 3); // cha

            // 3 bits [0...7] : proficiencies flags
            b += character.datas.proficiencies[0] ? "1" : "0";
            b += character.datas.proficiencies[1] ? "1" : "0";
            b += character.datas.proficiencies[2] ? "1" : "0";

            // 4 bits [0...15] : hand size
            b += this.padLeft(character.datas.handSize.toString(2), 4);
        }

        // frame 1 : 31 bits
        trace.log("-> frame[%d] = %s", x, b);
        return parseInt(this.padRight(b, 31), 2).toString(36);
    },

    deserializeCharacterFrame: function (frame, x, characterOnly) {
        var b = this.padLeft(parseInt(frame, 36).toString(2), 31);
        trace.log("<- frame[%d] = %s", x - 1, b);

        if (characterOnly) {
            // character only: we reset all datas BEFORE setting character and prestige class
            character.datas = character.resetDatas();
        }

        character.setCharacter(parseInt(b.substr(0, 4), 2));
        character.setPrestigeClass(parseInt(b.substr(4, 2), 2));

        if (characterOnly)
            return;

        character.setAbility(0, parseInt(b.substr(6, 3), 2), true);
        character.setAbility(1, parseInt(b.substr(9, 3), 2), true);
        character.setAbility(2, parseInt(b.substr(12, 3), 2), true);
        character.setAbility(3, parseInt(b.substr(15, 3), 2), true);
        character.setAbility(4, parseInt(b.substr(18, 3), 2), true);
        character.setAbility(5, parseInt(b.substr(21, 3), 2), true);

        character.setProficienty(0, b.substr(24, 1) == "1");
        character.setProficienty(1, b.substr(25, 1) == "1");
        character.setProficienty(2, b.substr(26, 1) == "1");

        character.setHandSize(parseInt(b.substr(27, 4), 2), true);

    },

    serializeCharacter: function(characterIndex, prestigeClassIndex) {
        var b = '';

        // 4 bits [0...15] : character index
        b += this.padLeft((characterIndex || 0).toString(2), 4);

        // 2 bits [0...3] : prestige class index. 0 = none
        b += this.padLeft((prestigeClassIndex || 0).toString(2), 2);

        trace.log("serializeCharacter(%d, %d) = %s", characterIndex, prestigeClassIndex, b);

        return b;
    },

    serializeCardCount: function(x) {
        // 24 bits : 4 [0...15] x 6 : card types count
        var b = '';
        b += this.padLeft(character.datas.cardsCount[0].toString(2), 4); // weapon
        b += this.padLeft(character.datas.cardsCount[1].toString(2), 4); // spell
        b += this.padLeft(character.datas.cardsCount[2].toString(2), 4); // armor
        b += this.padLeft(character.datas.cardsCount[3].toString(2), 4); // item
        b += this.padLeft(character.datas.cardsCount[4].toString(2), 4); // ally
        b += this.padLeft(character.datas.cardsCount[5].toString(2), 4); // blessing

        // frame 2 : 24 bits
        trace.log("-> frame[%d] = %s", x, b);
        return parseInt(b, 2).toString(36);
    },

    serializePowers: function(x) {
        var b = '';

        // frame 3 : x bits
        // powers stored in a single frame
        for (var i = 0; i < character.datas.powers.length; i++) {
            for (var j = 0; j < character.datas.powers[i].length; j++) {
                b += character.datas.powers[i][j] ? "1" : "0";
            }
        }

        // prefix with flag bit
        b = "1" + b;
        trace.log("-> frame[%d] = %s", x, b);
        return parseInt(b, 2).toString(36);
    },

    serializeDeck: function(frames, x) {
        /// <summary>
        /// Serialize the deck values.
        /// Each card is stored in a 8 bits value :
        /// - first 3 bits contains the source index (0...7), see dataset.sources.
        /// - remaining 5 bits contains the card index inside the source (0...31)
        /// Note that card types are inferred from card slot declared in the character class.
        /// Cards are stored in frames containing 6 items, so each frame is 48 bits length.
        /// </summary>
        var cardSize = 8;
        var frameCardCount = 6;
        var frameSize = cardSize * frameCardCount;
        var packetCount = 0;
        var b = '';

        for (var i = 0; i < this.cardTypeCount; i++) {

            var count = character.datas.cardsCount[i];
            var cards = character.datas.deck[i].cards;

            for (var j = 0; j < count; j++) {
                // cardSize = 8 bits [0...255]
                var bin = this.padLeft(cards[j].value.toString(2) || 0, cardSize);
                trace.log("deck[%d].cards[%d].value = %d %s", i, j, cards[j].value, bin);
                b += bin;

                packetCount++;
                if (packetCount == frameCardCount) {
                    trace.log("-> frame[%d] = %s", x, b);
                    frames[x++] = parseInt(b, 2).toString(36);
                    packetCount = 0;
                    b = '';
                }
            }
        }

        if (packetCount != 0) {
            b = this.padRight(b, frameSize);
            trace.log("-> frame[%d] = %s", x, b);
            frames[x++] = parseInt(b, 2).toString(36);
        }
    },

    deserializeDeck2: function(frames, x) {
        // frame xx : deck in 48bits frames (6x8 bits)
        // 1) we start by filling an array with all values from all remaining frames
        var cards = this.readDeckFrame(frames, x);

        // 2) we apply the array to the character card slots
        x = 0;
        for (var i = 0; i < this.cardTypeCount; i++) {
            var count = character.datas.cardsCount[i];
            for (var j = 0; j < count; j++) {
                character.setCardSlot(i, j, cards[x++] || 0);
            }
        }
    },

    deserializeDeck1: function(frames, x) {
        // frame xx : deck in 48bits frames (6x8 bits)
        // 1) we start by filling an array with all values from all remaining frames
        var cards = this.readDeckFrame(frames, x);

        // 2) we apply the array to the character card slots
        x = 0;
        for (var i = 0; i < this.cardTypeCount; i++) {
            var count = character.datas.cardsCount[i];
            for (var j = 0; j < count; j++) {
                var value = cards[x++] || 0;
                value = this.convertCardFrom1To2(value);
                character.setCardSlot(i, j, value);
            }
        }
    },

    readDeckFrame: function(frames, x) {
        var cardSize = 8;
        var frameCardCount = 6;
        var frameSize = cardSize * frameCardCount;

        var cards = [];
        while (x < frames.length) {
            var frame = frames[x++];
            var b = this.padLeft(parseInt(frame, 36).toString(2), frameSize);
            trace.log("<- frame[%d] = %s", x - 1, b);
            for (var l = 0; l < frameCardCount; l++) {
                var cardBits = b.substr(l * cardSize, cardSize);
                cards.push(parseInt(cardBits, 2));
            }
        }

        return cards;

    },

    convertCardFrom1To2: function(v1) {
        /// <summary>
        /// Converts a card value from v1 format to v2 format.
        /// There was a problem in v1 format where card source was stored only in the first bit, resulting in only 2 possible values.
        /// The value need to be converted before being used in v2 format.
        /// </summary>
        var source = v1 >> 7;
        var index = v1 & 0x0fffffff;
        return source << 5 | index;
    },

    padLeft: function(value, length, pad) {
        var left = Array(length + 1).join(pad || "0");
        return String(left + value).slice(-left.length);
    },

    padRight: function(value, length, pad) {
        return value + Array(length - value.length + 1).join(pad || "0");
    },
};