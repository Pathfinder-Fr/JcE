/// <reference path="dataset.fr.js" />
/// <reference path="mustache.js" />
/// <reference path="json2.js" />
/// <reference path="http://code.jquery.com/jquery-2.1.0.min.js" />
/// <reference path="trace.js" />
/// <reference path="character.js" />
/// <reference path="serializer.js" />

var editor = {

    cardSourceOffset: 32,

    updatingHtml: false,

    previousHash: '',

    init: function () {
        trace.enter("editor.init()");

        character.init();
        character.setCharacter(0);
        character.setPrestigeClass(0);
        serializer.deserialize(location.hash);
        this.render();

        trace.leave("editor.init()");
    },

    render: function () {
        /// <summary>renders the HTML for the current character datas.</summary>
        trace.enter("editor.render()");

        var partials = {
            abilityRow: $("#abilityRow").html(),
            cardTypeRow: $("#cardTypeRow").html(),
            proficiencyRow: $("#proficiencyRow").html()
        };

        character.prepareRender();
        $("#root").html(Mustache.render($("#characterSheet").html(), character, partials));

        this.setupDatabinding();
        this.updateHtml();

        trace.leave("editor.render()");
    },

    setupDatabinding: function () {
        /// <summary>Attach to html events to apply updates.</summary>
        $(window).on("hashchange", function () {
            if (editor.updatingHtml)
                return;

            if ('#' + editor.previousHash == location.hash)
                return;

            trace.enter("window.onHashChange");
            serializer.deserialize(location.hash);
            editor.render();
            trace.leave("window.onHashChange");
        });

        // when the selected character change
        $("#selector").on("change", function () {
            if (editor.updatingHtml)
                return false;

            trace.enter("#selector.onChange");

            // load the new character
            character.init();
            if (character.setCharacter($(this).prop("selectedIndex"))) {
                editor.render();
            }

            trace.leave("#selector.onChange");
            return false;

        });

        // when selecting a prestigeClass
        $("#navbar .prestigeClass").on("click", function () {
            if (editor.updatingHtml)
                return;

            trace.enter("#navbar .prestigeClass.click");

            character.setPrestigeClass(parseInt($(this).attr("data-index")));
            editor.render();

            trace.leave("#navbar .prestigeClass.click");

        });

        // when removing a prestigeClass
        $("#tags .prestigeClass").on("click", function () {
            if (editor.updatingHtml)
                return;

            trace.enter("#tags .prestigeClass.click");

            character.setPrestigeClass(0);
            editor.render();

            trace.leave("#tags .prestigeClass.click");

        });

        // when an ability change
        $("#root input.abilityValue[type='checkbox']").on("change", function () {
            if (editor.updatingHtml)
                return;

            var index = parseInt($(this).attr("data-ability"));
            var selected = $(this).prop("checked");
            var value = parseInt($(this).attr("data-value"));

            character.setAbility(index, value, selected);
            editor.updateHtml();
        });

        // when a proficiency change
        $("#root input.proficiency[type='checkbox']").on("change", function () {
            if (editor.updatingHtml)
                return;

            var index = parseInt($(this).attr("data-index"));
            var selected = $(this).prop("checked");

            character.setProficienty(index, selected);
            editor.updateHtml();
        });

        // when the hand size change
        $("#root input.handSize[type='checkbox']").on("change", function () {
            if (editor.updatingHtml)
                return;

            var selected = $(this).prop("checked");
            var value = parseInt($(this).attr("data-value"));

            character.setHandSize(value, selected);
            editor.updateHtml();
        });

        // when a power change
        $("#root input.power[type='checkbox']").on("change", function () {
            if (editor.updatingHtml)
                return;

            var selected = $(this).prop("checked");
            var isPrereq = $(this).attr("data-role") === "prereq";
            var row = parseInt($(this).attr("data-row"));
            var index = parseInt($(this).attr("data-index"));

            character.setPower(row, index, isPrereq, selected);
            editor.updateHtml();
        });

        // when a deck card type count change
        $("#root input.cardCount[type='checkbox']").on("change", function () {
            if (editor.updatingHtml)
                return;

            var selected = $(this).prop("checked");
            var cardtype = parseInt($(this).attr("data-cardtype"));
            var value = parseInt($(this).attr("data-value"));

            character.setCardCount(cardtype, value, selected);
            editor.render();
            editor.updateHtml();
        });

        // when a card slot is selected
        $("#root select.card").on("change", function () {
            if (editor.updatingHtml)
                return;

            var type = parseInt($(this).attr("data-type"));
            var index = parseInt($(this).attr("data-index"));
            var value = parseInt($(this).val());

            character.setCardSlot(type, index, value);
            editor.updateHtml();
        });
    },

    updateHtml: function () {
        /// <summary>Apply character datas to html.</summary>
        editor.updatingHtml = true;
        trace.enter("editor.updateHtml()");

        // apply character
        $("#selector option:eq(" + character.datas.characterIndex + ")").attr("selected", "");

        // apply prestigeClass
        $("#charactersSelector .prestigeClass").each(function () {
            var index = parseInt($(this).attr("data-index"));
            trace.log("character.datas.prestigeClassIndex = %d", character.datas.prestigeClassIndex);
            if (index === character.datas.prestigeClassIndex) {
                $(this).parent().addClass("active");
            } else {
                $(this).parent().removeClass("active");
            }
        });

        // apply abilities
        $("#root input.abilityValue[type='checkbox']").each(function () {
            var index = $(this).attr("data-ability");
            var value = parseInt($(this).attr("data-value"));

            $(this).prop("checked", character.datas.abilities[index] >= value);
        });

        // apply proficiencies
        $("#root input.proficiency[type='checkbox']").each(function () {
            var index = parseInt($(this).attr("data-index"));
            var disabled = $(this).is(':disabled');

            if (!disabled) {
                $(this).prop("checked", character.datas.proficiencies[index]);
            }
        });

        // apply handsize
        $("#root input.handSize[type='checkbox']").each(function () {
            var value = parseInt($(this).attr("data-value"));
            $(this).prop("checked", character.datas.handSize >= value);
        });

        // apply powers
        $("#root input.power[type='checkbox']").each(function () {
            var isPrereq = $(this).attr("data-role") === "prereq";
            var row = parseInt($(this).attr("data-row"));
            var index = parseInt($(this).attr("data-index"));

            if (!isPrereq) {
                var prereq = $("#root input.power[type='checkbox'][data-role='prereq'][data-row='" + row + "']");
                $(this).attr("disabled", prereq.length != 0 && !prereq.prop("checked") ? "" : null);
            }

            if (character.datas && character.datas.powers && character.datas.powers[row]) {
                $(this).prop("checked", character.datas.powers[row][index]);
            }
        });

        // apply deck card count
        $("#root input.cardCount[type='checkbox']").each(function () {
            var index = $(this).attr("data-cardtype");
            var value = parseInt($(this).attr("data-value"));

            $(this).prop("checked", character.datas.cardsCount[index] >= value);
        });

        // apply deck
        $("#root select.card").each(function () {
            var type = parseInt($(this).attr("data-type"));
            var index = parseInt($(this).attr("data-index"));

            $(this).val(character.datas.deck[type].cards[index].value || 0);
        });

        // apply points
        $("#points").html(character.getSpentPoints());

        location.hash = this.previousHash = serializer.serialize();

        $("#characterLink").attr("href", location.href).text(location.href);

        editor.updatingHtml = false;
        trace.leave("editor.updateHtml()");
    },
};
