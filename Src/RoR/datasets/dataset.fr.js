var dataset = {
    "abilities": ["force", "dextérité", "constitution", "intelligence", "sagesse", "charisme"],
    "cardTypes": ["arme", "sort", "armure", "objet", "allié", "bénédiction", "au choix"],
    "sources": ["jeu de base", "goodies", "aventure 1", "aventure 2", "aventure 3", "aventure 4", "aventure 5", "aventure 6"],
    "characters": [
    {
        "name": "ezren",
        "tags": ["masculin", "humain", "magicien"],
        "abilities": {
            "str": { "dice": 6, "max": 1 },
            "dex": { "dice": 6, "max": 3 },
            "con": { "dice": 4, "max": 2 },
            "int": { "dice": 12, "max": 4, "skills": [{ "name": "profane", "bonus": 2 }, { "name": "connaissances", "bonus": 2 }] },
            "wis": { "dice": 8, "max": 2 },
            "cha": { "dice": 6, "max": 3 }
        },
        "handSize": { "base": 6, "max": 8 },
        "deck": {
            "predilectionCardType": "spell",
            "weapon": { "base": 1, "max": 2 },
            "spell": { "base": 8, "max": 11 },
            "armor": { "base": 0, "max": 1 },
            "item": { "base": 3, "max": 6 },
            "ally": { "base": 3, "max": 5 },
            "blessing": { "base": 0, "max": 0 }
        },
        "powers": [
            "Après avoir joué un sort doté de la propriété Profane, vous pouvez examiner la première carte de votre deck de personnage. Si c'est un sort, vous pouvez l'ajouter à votre main.",
            "Si vous obtenez une carte dotée de la propriété Magique lors d'une séance d'exploration, vous pouvez repartir immédiatement en exploration.",
            "{0} Ajoutez 1 ({1} 2) à votre test quand vous tentez de recharger une carte."
        ],
        "prestigeClasses": [
            {
                "name": "illusioniste",
                "powers": [
                    "Après avoir joué un sort doté de la propriété Profane, vous pouvez examiner la première carte de votre deck de personnage. Si c'est un sort, vous pouvez l'ajouter à votre main ({0} ou le recharger).",
                    "Si vous obtenez une carte dotée de la propriété Magique lors d'une séance d'exploration, vous pouvez repartir immédiatement en exploration.",
                    "{0} Ajoutez 1 ({1} 2) ({2} 3) ({3} 4) à votre test quand vous tentez de recharger une carte.",
                    "{0} Si vous jouez un sort pour échapper à un monstre, vous pouvez placer ce monstre en dessous du paquet de région.",
                    "{0} Ajoutez 2 ({1} 4) à votre test pour acquérir un sort ({2} ou un allié).",
                    "{0} Au début de votre tour, vous pouvez jeter une carte pour en tirer une autre."
                ]
            },
            {
                "name": "évocateur",
                "handSize": { "base": 6, "max": 9 },
                "powers": [
                    "Après avoir joué un sort doté de la propriété Profane, vous pouvez examiner la première carte de votre deck de personnage. Si c'est un sort, vous pouvez l'ajouter à votre main.",
                    "Si vous obtenez une carte dotée de la propriété Magique lors d'une séance d'exploration, vous pouvez repartir immédiatement en exploration.",
                    "{0} Ajoutez 1 ({1} 2) à votre test quand vous tentez de recharger une carte.",
                    "{0} Ajoutez 2 à votre test de Profane et la ou les propriété(s) Force ({1} ou Acide ou Froid) ({2} ou Électricité et Feu).",
                    "{0} Ajoutez 2 ({1} 4) à votre test pour acquérir un sort."
                ]
            }
        ],
        "defaultDeck": [[6], [1, 8, 13, 14, 16, 16, 17, 21], [], [4, 8, 17], [6, 10, 12], []],
    },
    {
        "name": "lini",
        "tags": ["féminin", "gnome", "druide"],
        "abilities": {
            "str": { "dice": 4, "max": 2 },
            "dex": { "dice": 6, "max": 2 },
            "con": { "dice": 8, "max": 2 },
            "int": { "dice": 6, "max": 2, "skills": [{ "name": "connaissances", "bonus": 3 }] },
            "wis": { "dice": 10, "max": 4, "skills": [{ "name": "divin", "bonus": 1 }, { "name": "survie", "bonus": 2 }] },
            "cha": { "dice": 8, "max": 3 }
        },
        "handSize": { "base": 5 },
        "deck": {
            "predilectionCardType": "ally",
            "weapon": { "base": 0, "max": 1 },
            "spell": { "base": 6, "max": 8 },
            "armor": { "base": 0, "max": 1 },
            "item": { "base": 2, "max": 4 },
            "ally": { "base": 3, "max": 6 },
            "blessing": { "base": 4, "max": 5 }
        },
        "proficiencies": [
            "{0} Armures légères",
            "{0} Armes"
        ],
        "powers": [
            "Quand vous jouez un allié doté de la propriété Animal, vous pouvez le recharger au lieu de le jeter.",
            "Vous pouvez révéler un allié doté de la propriété Animal pour ajouter 1d4 ({0}+1) ({1}+2) à votre test.",
            "Pour n'importe quel test, vous pouvez jeter une carte pour lancer 1d10 au lieu de votre dé de Force ou de Dextérité."
        ],
        "prestigeClasses": [
            {
                "name": "métamorphe",
                "handSize": { "base": 5, "max": 6 },
                "powers": [
                    "Quand vous jouez un allié doté de la propriété Animal, vous pouvez le recharger au lieu de le jeter.",
                    "Vous pouvez révéler un allié doté de la propriété Animal pour ajouter 1d4 ({0}+1) ({1}+2) ({2}+3) à votre test.",
                    "Pour n'importe quel test, vous pouvez jeter une carte pour lancer 1d10 ({0}+1) ({1}+2) ({2} avec la propriété Feu) au lieu de votre dé de Force ou de Dextérité.",
                    "{0} Ajoutez 2 ({1} 4) à votre test quand vous essayez d'acquérir un allié avec la propriété Animal.",
                    "{0} Quand vous jouez une bénédiction pour améliorer votre test de Sagesse, ajouter 1d12 au lieu du dé normal."
                ]
            },
            {
                "name": "gardienne sauvage",
                "handSize": { "base": 5, "max": 7 },
                "powers": [
                    "Quand vous jouez un allié doté de la propriété Animal, vous pouvez le recharger au lieu de le jeter.",
                    "Vous pouvez révéler un allié doté de la propriété Animal pour ajouter 1d4 ({0}+1) ({1}+2) ({2}+3) ({3}+4) à votre test.",
                    "Pour n'importe quel test, vous pouvez jeter une carte pour lancer 1d10 au lieu de votre dé de Force ou de Dextérité.",
                    "{0} Ajoutez 2 ({1} 4) à votre test de Divin quand vous jouez un sort.",
                    "{0} Quand vous jouez une bénédiction pour améliorer votre test de Sagesse, ajoutez 1d12 au lieu du dé normal."
                ]
            }
        ],
        "defaultDeck": [[], [2, 8, 11, 20, 20, 19], [], [12, 25], [3, 3, 4], [9, 9, 9, 9]],
    },
    {
        "name": "amiri",
        "tags": ["féminin", "humain", "barbare"],
        "abilities": {
            "str": { "dice": 12, "max": 6, "skills": [{ "name": "mêlée", "bonus": 2 }] },
            "dex": { "dice": 6, "max": 3 },
            "con": { "dice": 8, "max": 4 },
            "int": { "dice": 4, "max": 1 },
            "wis": { "dice": 6, "max": 1, "skills": [{ "name": "survie", "bonus": 3 }] },
            "cha": { "dice": 6, "max": 2 }
        },
        "handSize": { "base": 4, "max": 5 },
        "deck": {
            "predilectionCardType": "weapon",
            "weapon": { "base": 5, "max": 8 },
            "spell": { "base": 0 },
            "armor": { "base": 2, "max": 3 },
            "item": { "base": 2, "max": 5 },
            "ally": { "base": 2, "max": 3 },
            "blessing": { "base": 4, "max": 6 }
        },
        "proficiencies": [
            "Armures légères",
            "{0} Armures lourdes",
            "Armes"
        ],
        "powers": [
            "Vous pouvez enterrer une carte de votre main pour ajouter 1d10 ({0}+1) à votre test de Force, de Mêlée ou de Constitution.",
            "Vous pouvez vous déplacer à la fin de votre tour ({0} et/ou faire venir un autre personnage dans la région où vous avez fini votre tour)."
        ],
        "prestigeClasses": [
            {
                "name": "berserker",
                "handSize": { "base": 4, "max": 6 },
                "powers": [
                    "Vous pouvez enterrer une carte de votre main ({1} ou la première de votre deck) pour ajouter 1d10 ({0}+1) ({2}+2) ({3}+3) ({4}+4) à votre test de Force, de Mêlée ou de Constitution.",
                    "Vous pouvez vous déplacer à la fin de votre tour ({0} et/ou faire venir un autre personnage dans la région où vous avez fini votre tour).",
                    "{0} Ajouter 2 ({1} 4) à votre test quand vous essayez d'acquérir une arme.",
                    "{0} Quand vous jouez Bénédiction de Gorum, ajouter 1d12 au lieu du dé normal."
                ]
            },
            {
                "name": "juggernaut",
                "handSize": { "base": 4, "max": 6 },
                "powers": [
                    "Vous pouvez enterrer une carte de votre main pour ajouter 1d10 ({0}+1) ({1}+2) ({2}+3) à votre test de Force, de Mêlée ou de Constitution.",
                    "Vous pouvez vous déplacer à la fin de votre tour ({0} et/ou faire venir un autre personnage dans la région où vous avez fini votre tour).",
                    "{0} Quand vous recevez des dégâts de Combat ({1} ou d'un autre type), réduisez ces dégâts de 1.",
                    "{0} Ajoutez 2 ({1} 4) à votre test quand vous essayez d'acquérir une armure.",
                    "{0} Quand vous jouez Bénédiction de Gorum, ajouter 1d12 au lieu du dé normal."
                ]
            }
        ],
        "defaultDeck": [[6, 13, 13, 14, 28], [], [0, 8], [19, 21], [7, 10], [9, 9, 9, 9]]
    },
    {
        "name": "kyra",
        "tags": ["féminin", "humain", "prêtre de Sarenrae"],
        "abilities": {
            "str": { "dice": 6, "max": 4, "skills": [{ "name": "mêlée", "bonus": 2 }] },
            "dex": { "dice": 4, "max": 1 },
            "con": { "dice": 6, "max": 2, "skills": [{ "name": "vigueur", "bonus": 3 }] },
            "int": { "dice": 6, "max": 2 },
            "wis": { "dice": 12, "max": 4, "skills": [{ "name": "divin", "bonus": 2 }] },
            "cha": { "dice": 6, "max": 2 }
        },
        "handSize": { "base": 5, "max": 6 },
        "deck": {
            "predilectionCardType": "blessing",
            "weapon": { "base": 2, "max": 4 },
            "spell": { "base": 3, "max": 5 },
            "armor": { "base": 2, "max": 4 },
            "item": { "base": 1, "max": 2 },
            "ally": { "base": 1, "max": 2 },
            "blessing": { "base": 6, "max": 7 }
        },
        "proficiencies": [
            "Armures légères",
            "Armures lourdes",
            "{0} Armes"
        ],
        "powers": [
            "À votre tour et au lieu de faire votre première exploration, vous pouvez révéler une carte dotée de la propriété Divin et choisir un personnage de votre région. Tirez au hasard 1d4+1 ({0}+2) cartes de sa défausse et mélangez-les avec son deck de personnage avant de jeter la carte que vous venez de révéler.",
            "Ajouter 1d8 ({0}+1) et la propriété Magique à vos tests pour vaincre un fléau doté de la propriété Mort-vivant."
        ],
        "prestigeClasses": [
            {
                "name": "exorciste",
                "handSize": { "base": 5, "max": 7 },
                "powers": [
                    "À votre tour et au lieu de faire votre première exploration, vous pouvez révéler une carte dotée de la propriété Divin et choisir un personnage de votre région. Tirez au hasard 1d4+1 ({0}+2) cartes de sa défausse et mélangez-les avec son deck de personnage avant de jeter la carte que vous venez de révéler.",
                    "Ajouter 1d8 ({0}+1) et la propriété Magique à vos tests pour vaincre un fléau doté de la propriété Mort-vivant ({1} ou Extérieur).",
                    "{0} Ajoutez 2 à votre test pour acquérir une armure ({1} ou une arme).",
                    "{0} Quand vous jouez Bénédiction de Sarenrae, vous pouvez la recharger au lieu de la jeter ({1} ou la poser sur le dessus de votre deck).",
                    "{0} Si vous triomphez d'un fléau doté de la propriété Mort-vivant ({1} ou Extérieur) vous pouvez piocher une carte dans votre défausse et la mélanger dans votre deck."
                ]
            },
            {
                "name": "guérisseuse",
                "handSize": { "base": 5, "max": 8 },
                "powers": [
                    "À votre tour et au lieu de faire votre première exploration, vous pouvez révéler une carte dotée de la propriété Divin et choisir un personnage de votre région. Tirez au hasard 1d4+1 ({0}+2) ({1}+3) cartes de sa défausse et mélangez-les avec son deck de personnage avant de jeter la carte que vous venez de révéler ({2} et d'en tirer une nouvelle.",
                    "Ajouter 1d8 ({0}+1) et la propriété Magique à vos tests pour vaincre un fléau doté de la propriété Mort-vivant.",
                    "{0} Ajoutez 2 ({1} 4) à votre test pour acquérir une aubaine avec la propriété Divin.",
                    "{0} Quand vous jouez Bénédiction de Sarenrae, vous pouvez la recharger au lieu de la jeter ({1} ou la mélanger dans votre deck)."
                ]
            }
        ],
        "defaultDeck": [[6, 26], [2, 20, 18], [5, 8], [10], [5], [9, 9, 9, 9, 9, 9]]
    },
    {
        "name": "harsk",
        "tags": ["masculin", "nain", "rôdeur"],
        "abilities": {
            "str": { "dice": 6, "max": 3 },
            "dex": { "dice": 8, "max": 4, "skills": [{ "name": "distance", "bonus": 3 }] },
            "con": { "dice": 12, "max": 3, "skills": [{ "name": "vigueur", "bonus": 2 }] },
            "int": { "dice": 6, "max": 1 },
            "wis": { "dice": 6, "max": 3, "skills": [{ "name": "perception", "bonus": 2 }, { "name": "survie", "bonus": 2 }] },
            "cha": { "dice": 4, "max": 1 }
        },
        "handSize": { "base": 5, "max": 6 },
        "deck": {
            "predilectionCardType": "weapon",
            "weapon": { "base": 5, "max": 6 },
            "spell": { "base": 0, "max": 2 },
            "armor": { "base": 1, "max": 2 },
            "item": { "base": 3, "max": 5 },
            "ally": { "base": 1, "max": 4 },
            "blessing": { "base": 5, "max": 6 }
        },
        "proficiencies": [
            "Armures légères",
            "Armes"
        ],
        "powers": [
            "À la fin de votre tour, vous pouvez examiner la première ({0} ou la dernière) carte de votre paquet de région.",
            "Vous pouvez recharger une carte pour ajouter 1d4 ({0}+1) ({1}+2) à un test de combat qui se déroule dans une autre région."
        ],
        "prestigeClasses": [
            {
                "name": "sniper",
                "handSize": { "base": 5, "max": 7 },
                "powers": [
                    "À la fin de votre tour, vous pouvez examiner la première ({0} ou la dernière) carte de votre paquet de région.",
                    "Vous pouvez recharger une carte pour ajouter 1d4 ({0}+1) ({1}+2) ({2}+3) ({3}+4) à votre test de combat qui se déroule dans une autre région.",
                    "{0} Quand vous commencez votre tour sans carte en main, vous avez le droit de tirer 1 ({1} 2) carte(s).",
                    "{0} Quand vous jouez une arme avec la propriété Distance, vous pouvez la recharger au lieu de la jeter.",
                    "{0} Vous gagnez la compétence Divin : Sagesse +1.",
                    "{0} Quand vous jouez une bénédiction pour améliorer votre test de Dextérité, ajoutez un d12 au lieu du dé normal."
                ]
            },
            {
                "name": "traqueur",
                "handSize": { "base": 5, "max": 7 },
                "powers": [
                    "À la fin de votre tour, vous pouvez examiner la première ({0} ou la dernière) carte de votre paquet de région.",
                    "Vous pouvez recharger une carte pour ajouter 1d4 ({0}+1) ({1}+2) ({2}+3) à votre test de combat qui se déroule dans une autre région.",
                    "{0} Ajoutez 1d8 ({1} +1) à vos tests pour vaincre un fléau doté de la propriété Géant.",
                    "{0} Quand vous jouez un allié avec la propriété Animal, vous pouvez le recharger au lieu de le jeter.",
                    "{0} Vous gagnez la compétence Divin : Sagesse +1.",
                    "{0} Quand vous jouez une bénédiction pour améliorer votre test de Sagesse, ajoutez un d12 au lieu du dé normal."
                ]
            }
        ],
        "defaultDeck": [[0, 0, 3, 3, 18], [], [0], [0, 16, 26], [4], [9, 9, 9, 9, 9]]
    },
    {
        "name": "seelah",
        "tags": ["féminin", "humain", "paladin"],
        "abilities": {
            "str": { "dice": 8, "max": 4, "skills": [{ "name": "mêlée", "bonus": 2 }] },
            "dex": { "dice": 4, "max": 1 },
            "con": { "dice": 8, "max": 3 },
            "int": { "dice": 4, "max": 2 },
            "wis": { "dice": 8, "max": 3, "skills": [{ "name": "divin", "bonus": 2 }] },
            "cha": { "dice": 10, "max": 2 }
        },
        "handSize": { "base": 4, "max": 5 },
        "deck": {
            "predilectionCardType": "armor",
            "weapon": { "base": 3, "max": 5 },
            "spell": { "base": 1, "max": 3 },
            "armor": { "base": 3, "max": 5 },
            "item": { "base": 0 },
            "ally": { "base": 2, "max": 4 },
            "blessing": { "base": 6, "max": 8 }
        },
        "proficiencies": [
            "Armures légères",
            "Armures lourdes",
            "Armes"
        ],
        "powers": [
            "Vous pouvez jeter la première carte de votre deck pour ajouter 1d6 ({0}+1) à votre test. Si c'était une bénédiction ({1} ou un sort), rechargez-la au lieu de la jeter.",
            "Vous pouvez regarder la première carte de votre paquet de région au début ({0} ou à la fin) de votre tour. Si c'est une aubaine, placez-la sous le paquet."
        ],
        "prestigeClasses": [
            {
                "name": "chevalier hospitalier",
                "handSize": { "base": 4, "max": 7 },
                "powers": [
                    "Vous pouvez jeter la première carte de votre deck pour ajouter 1d6 ({0}+1) ({2}+2) ({3}+3) à votre test. Si c'était une bénédiction ({1} ou un sort), rechargez-la au lieu de la jeter.",
                    "Vous pouvez regarder la première carte de votre paquet de région au début ({0} ou à la fin) de votre tour. Si c'est une aubaine, placez-la sous le paquet ({1} ou sous la première carte).",
                    "{0} Pendant votre tour, vous pouvez enterrer une carte Divin et choisir un personnage de votre région. Il pioche 1d4+1 cartes dans sa défausse et les mélange avec son deck.",
                    "{0} Quand vous jouez Bénédiction de Iomédae, vous pouvez la recharger ({1} ou la mélanger avec votre deck)."
                ]
            },
            {
                "name": "croisée",
                "handSize": { "base": 4, "max": 6 },
                "powers": [
                    "Vous pouvez jeter la première carte de votre deck pour ajouter 1d6 ({0}+1) ({2}+2) ({3}+3) à votre test. Si c'était une bénédiction ({1} ou un sort), rechargez-la au lieu de la jeter.",
                    "Vous pouvez regarder la première carte de votre paquet de région au début ({0} ou à la fin) de votre tour. Si c'est une aubaine, placez-la sous le paquet ({1} ou sous la première carte).",
                    "{0} Quand un personnage de votre région reçoit des dégâts de Combat, réduisez-les de 1.",
                    "{0} Ajoutez 1d8 et la propriété Magique à votre test pour vaincre un fléau de type Mort-vivant.",
                    "{0} Quand vous jouez Bénédition de Iomédae, vous pouvez la recharger ({1} ou la mélanger avec votre deck)."
                ]
            }
        ],
        "defaultDeck": [[13, 14, 26], [20], [5, 5, 8], [], [6, 10], [9, 9, 9, 9, 9, 9]]
    },
    {
        "name": "mérisiel",
        "tags": ["féminin", "elfe", "roublard"],
        "abilities": {
            "str": { "dice": 8, "max": 3 },
            "dex": { "dice": 12, "max": 4, "skills": [{ "name": "acrobaties", "bonus": 2 }, { "name": "sabotage", "bonus": 2 }, { "name": "discrétion", "bonus": 2 }] },
            "con": { "dice": 6, "max": 2 },
            "int": { "dice": 4, "max": 3 },
            "wis": { "dice": 6, "max": 1, "skills": [{ "name": "perception", "bonus": 2 }] },
            "cha": { "dice": 6, "max": 2 }
        },
        "handSize": { "base": 5, "max": 6 },
        "deck": {
            "predilectionCardType": "item",
            "weapon": { "base": 2, "max": 4 },
            "spell": { "base": 0, "max": 1 },
            "armor": { "base": 1, "max": 2 },
            "item": { "base": 6, "max": 9 },
            "ally": { "base": 2, "max": 3 },
            "blessing": { "base": 4, "max": 6 }
        },
        "proficiencies": [
            "Armures légères",
            "{0} Armes"
        ],
        "powers": [
            "Vous pouvez esquiver une confrontation.",
            "Si vous êtes le seul personnage présent dans une région, vous pouvez recharger uen carte pour ajouter 1d6 ({0}+1) ({1}+2) à un test de combat ou la jeter pour gagner encore 1d6 de plus."
        ],
        "prestigeClasses": [
            {
                "name": "acrobate",
                "handSize": { "base": 5, "max": 7 },
                "powers": [
                    "Vous pouvez esquiver une confrontation ({0} et reposer la carte sur le dessus de la pile).",
                    "Si vous êtes le seul personnage présent dans une région, vous pouvez recharger une carte pour ajouter 1d6 ({0}+1) ({1}+2) ({2}+3) à un test de combat ou la jeter pour gagner encore 1d6 de plus.",
                    "{0} Ajoutez 2 à un test pour vaincre un obstacle ({1} ou fermer une région) en dehors des combats.",
                    "{0} Ajoutez 2 ({1} 4) à un test pour acquérir un objet.",
                    "{0} Quand vous jouez une bénédiction pour améliorer votre test de Dextérité, vous pouvez la recharger au lieu de la jeter."
                ]
            },
            {
                "name": "voleuse",
                "handSize": { "base": 5, "max": 6 },
                "powers": [
                    "Vous pouvez esquiver une confrontation.",
                    "Si vous êtes le seul personnage présent dans une région, vous pouvez recharger une carte pour ajouter 1d6 ({0}+1) ({1}+2) ({2}+3) ({3}+4) à un test de combat ou la jeter pour gagner encore 1d6 de plus.",
                    "{0} Ajoutez 2 à un test pour fermer une région, à condition que ce ne soit pas un test de combat.",
                    "{0} Ajoutez 2 ({1} 3) ({2} 4) à un test pour acquérir une armure, un objet ou une arme.",
                    "{0} Quand vous jouez une bénédiction pour améliorer votre test de Dextérité, vous pouvez la recharger au lieu de la jeter.",
                    "{0} Quand vous voulez recharger une armure, un objet ou une arme doté de la propriété Magique, vous po uvez utiliser votre Charmise à la place de n'importe quelle compétence."
                ]
            }
        ],
        "defaultDeck": [[10, 17], [], [0], [6, 15, 15, 16, 20, 26], [2, 5], [9, 9, 9, 9]]
    },
    {
        "name": "valéros",
        "tags": ["masculin", "humain", "guerrier"],
        "abilities": {
            "str": { "dice": 10, "max": 4, "skills": [{ "name": "mêlée", "bonus": 3 }] },
            "dex": { "dice": 8, "max": 2 },
            "con": { "dice": 8, "max": 4 },
            "int": { "dice": 6, "max": 2 },
            "wis": { "dice": 4, "max": 2 },
            "cha": { "dice": 6, "max": 2, "skills": [{ "name": "diplomatie", "bonus": 2 }] }
        },
        "handSize": { "base": 4, "max": 6 },
        "deck": {
            "predilectionCardType": "weapon",
            "weapon": { "base": 5, "max": 8 },
            "spell": { "base": 0 },
            "armor": { "base": 3, "max": 5 },
            "item": { "base": 2, "max": 4 },
            "ally": { "base": 2, "max": 4 },
            "blessing": { "base": 3, "max": 4 }
        },
        "proficiencies": [
            "Armures légères",
            "Armures lourdes",
            "Armes"
        ],
        "powers": [
            "Ajoutez 1d4 ({0}+1) ({1}+2) au test de combat d'un autre personnage situé dans la même région que vous.",
            "Quand vous jouez une arme, vous pouvez la recharger au lieu de la jeter."
        ],
        "prestigeClasses": [
            {
                "name": "gardien",
                "handSize": { "base": 4, "max": 7 },
                "powers": [
                    "Ajoutez 1d4 ({0}+1) ({1}+2) ({2}+3) au test de combat d'un autre personnage situé dans la même région que vous.",
                    "Quand vous jouez une arme ({0} ou une armure), vous pouvez la recharger au lieu de la jeter.",
                    "{0} Quand un personnage situé dans votre région reçoit des dégâts de Combat, réduisez-les de 1 ({1} 2).",
                    "{0} Ajoutez 2 ({1} 4) à votre test pour acquérir une armure.",
                    "{0} Quand vous jouez une bénédiction pour améliorer votre test de Constitution, ajoutez un d12 au lieu du dé normal."
                ]
            },
            {
                "name": "maître d'armes",
                "handSize": { "base": 4, "max": 6 },
                "powers": [
                    "Ajoutez 1d4 ({0}+1) ({1}+2) ({2}+3) ({3}+4) ({4}+5) au test de combat d'un autre personnage situé dans la même région que vous.",
                    "Quand vous jouez une arme, vous pouvez la recharger ({0} ou la mélanger avec votre deck) au lieu de la jeter.",
                    "{0} Quand ",
                    "{0} Ajoutez 2 ({1} 4) à votre test pour acquérir une armure.",
                    "{0} Quand vous jouez une bénédiction pour améliorer votre test de Force, ajoutez un d12 au lieu du dé normal."
                ]
            }
        ],
        "defaultDeck": [[10, 13, 14, 14, 26], [], [5, 8, 8], [19, 21], [6, 10], [9, 9, 9]]
    },
    {
        "name": "lem",
        "tags": ["masculin", "halfelin", "barde"],
        "abilities": {
            "str": { "dice": 4, "max": 2 },
            "dex": { "dice": 8, "max": 3 },
            "con": { "dice": 6, "max": 2 },
            "int": { "dice": 6, "max": 2, "skills": [{ "name": "connaissances", "bonus": 3 }] },
            "wis": { "dice": 6, "max": 2 },
            "cha": { "dice": 10, "max": 4, "skills": [{ "name": "profane", "bonus": 1 }, { "name": "diplomatie", "bonus": 3 }, { "name": "divin", "bonus": 1 }] }
        },
        "handSize": { "base": 6, "max": 6 },
        "deck": {
            "predilectionCardType": "choose",
            "weapon": { "base": 1, "max": 3 },
            "spell": { "base": 4, "max": 6 },
            "armor": { "base": 0, "max": 1 },
            "item": { "base": 2, "max": 4 },
            "ally": { "base": 3, "max": 5 },
            "blessing": { "base": 5, "max": 6 }
        },
        "proficiencies": [
            "{0} Armures légères",
            "{0} Armes"
        ],
        "powers": [
            "Une fois par test, vous pouvez recharger une carte pour ajouter 1d4 ({0}+1) ({1}+2) au test d'un autre personnage de votre région.",
            "Au début de votre tour, vous pouvez échanger 1 carte de votre main contre 1 carte du même type située dans votre défausse."
        ],
        "prestigeClasses": [
            {
                "name": "virtuose",
                "handSize": { "base": 6, "max": 7 },
                "powers": [
                    "Une fois par test, vous pouvez recharger une carte pour ajouter 1d4 ({0}+1) ({1}+2) ({2}+3) au test d'un autre personnage de votre région ({3} ou au vôtre).",
                    "Au début ({0} ou à la fin) de votre tour, vous pouvez échanger 1 carte de votre main contre 1 carte du même type située dans votre défausse.",
                    "{0} Ajoutez 2 à votre test pour acquérir un allié.",
                    "{0} Ajoutez 2 à votre test pour recharger ({1} ou acquérir) un sort.",
                    "{0} Quand vous jouez Benediction de Shélyn, ajoutez un d12 au lieu du dé normal."
                ]
            },
            {
                "name": "charlatan",
                "handSize": { "base": 6, "max": 8 },
                "powers": [
                    "Une fois par test, vous pouvez recharger une carte pour ajouter 1d4 ({0}+1) ({1}+2) ({2}+3) au test d'un autre personnage de votre régio.",
                    "Au début de votre tour, vous pouvez échanger 1 carte de votre main contre 1 carte du même type située dans votre défausse.",
                    "{0} Ajoutez 2 à votre test pour acquérir un allié ({1} ou vaincre un sbire) ({2} ou un boss).",
                    "{0} Vous réussissez automatiquement votre test pour recharger une carte avec la propriété Mental.",
                    "{0} Quand vous jouez Benediction de Shélyn, ajoutez un d12 au lieu du dé normal."
                ]

            }
        ],
        "defaultDeck": [[18], [11, 14, 19, 20], [], [8, 15], [2, 12, 17], [9, 9, 9, 9, 9]]
    },
    {
        "name": "séonie",
        "tags": ["féminin", "humain", "ensorceleur"],
        "abilities": {
            "str": { "dice": 4, "max": 1 },
            "dex": { "dice": 8, "max": 3 },
            "con": { "dice": 6, "max": 2 },
            "int": { "dice": 6, "max": 3 },
            "wis": { "dice": 6, "max": 2 },
            "cha": { "dice": 12, "max": 4, "skills": [{ "name": "diplomatie", "bonus": 2 }, { "name": "profane", "bonus": 2 }] }
        },
        "handSize": { "base": 6, "max": 7 },
        "deck": {
            "predilectionCardType": "spell",
            "weapon": { "base": 0, "max": 1 },
            "spell": { "base": 3, "max": 6 },
            "armor": { "base": 0 },
            "item": { "base": 3, "max": 6 },
            "ally": { "base": 4, "max": 5 },
            "blessing": { "base": 5, "max": 7 }
        },
        "powers": [
            "Lors d'un test de combat, vous pouvez jeter une carte pour lancer votre dé de Profane +1d6 ({0}+1) ({1}+2) en lui ajoutant les propriétés Offensif, Feu et Magique. Cela compte comme l'utilisation d'un sort.",
            "Vous réussissez automatiquement votre test pour recharger un sort ({0} ou un objet) Profane."
        ],
        "prestigeClasses": [
            {
                "name": "ensorceleuse céleste",
                "powers": [
                    "Lors d'un test de combat, vous pouvez jeter une carte pour lancer votre dé de Profane +1d6 ({0}+1) ({1}+2) ({2}+3) ({3}+4) en lui ajoutant les propriétés Offensif, Magique et Feu ({4} ou Acide). Cela compte comme l'utilisation d'un sort.",
                    "Vous réussissez automatiquement votre test pour recharger un sort ({0} ou un objet) Profane.",
                    "{0} Si vous ratez un test de 1, vous pouvez enterrer une carte pour le réussir.",
                    "{0} Réduisez les dégâts de Feu ({1} et d'Électricité) que vous recevez de 1 ({2} 2).",
                    "{0} Quand vous jouez Benediction de Pharasma, ajoutez un d12 au lieu du dé normal."
                ]
            },
            {
                "name": "ensorceleuse abyssale",
                "powers": [
                    "Lors d'un test de combat, vous pouvez jeter une carte pour lancer votre dé de Profane +1d6 ({0}+1) ({1}+2) ({2}+3) ({3}+4) en lui ajoutant les propriétés Offensif, Magique et Feu ({4} ou Acide). Cela compte comme l'utilisation d'un sort.",
                    "Vous réussissez automatiquement votre test pour recharger un sort ({0} ou un objet) Profane.",
                    "{0} Réduisez les dégâts de Feu ({1} et d'Acide et de Froid) que vous recevez de 1 ({2} 2).",
                    "{0} Quand vous jouez Benediction de Pharasma, ajoutez un d12 au lieu du dé normal.",
                    "{0} Au début de votre tour, vous pouvez bannir un allié pour tirer 3 cartes."
                ]
            }
        ],
        "defaultDeck": [[], [1, 13, 17], [], [4, 17, 25], [5, 7, 7, 17], [9, 9, 9, 9, 9]]
    },
    {
        "name": "sajan",
        "tags": ["masculin", "humain", "moine"],
        "abilities": {
            "str": { "dice": 6, "max": 2 },
            "dex": { "dice": 10, "max": 4, "skills": [{ "name": "acrobaties", "bonus": 2 }] },
            "con": { "dice": 6, "max": 2, "skills": [{ "name": "vigueur", "bonus": 2 }] },
            "int": { "dice": 6, "max": 2 },
            "wis": { "dice": 8, "max": 3 },
            "cha": { "dice": 6, "max": 2 }
        },
        "handSize": { "base": 4, "max": 6 },
        "deck": {
            "predilectionCardType": "item",
            "weapon": { "base": 0, "max": 3 },
            "spell": { "base": 0, "max": 1 },
            "armor": { "base": 0 },
            "item": { "base": 4, "max": 6 },
            "ally": { "base": 3, "max": 5 },
            "blessing": { "base": 8, "max": 10 }
        },
        "powers": [
            "Quand vous faites un test de combat sans jouer d'arme vous pouvez utiliser votre dé de Dextérité au lieu de votre dé de Force ({0} et lui ajouter la propriété Magique) ({1} et de Feu).",
            "Vous pouvez jouer autant de bénédictions que vous le désirez lors de votre test de combat. Rechargez-les au lieu de les jeter."
        ],
        "prestigeClasses": [
            {
                "name": "archer zen",
                "handSize": { "base": 4, "max": 7 },
                "proficiencies": [
                    "{0} Armes"
                ],
                "powers": [
                    "Quand vous faites un test de combat sans jouer d'arme vous pouvez utiliser votre dé de Dextérité au lieu de votre dé de Force ({0} et lui ajouter la propriété Magique) ({1} et de Feu).",
                    "Vous pouvez jouer autant de bénédictions que vous le désirez lors de votre test de combat. Rechargez-les au lieu de les jeter.",
                    "{0} Quand vous recevez des dégâts autres que des dégâts de Combat, réduisez-les de 1 ({1} 2).",
                    "{0} Quand vous jouez une arme dotée de la propriété Distance, vous pouvez la recharger au lieu de la jeter.",
                    "{0} Ajoutez 2 ({1} 4) à votre test quand vous essayez d'acquérir une aubaine avec la propriété Distance.",
                    "{0} Quand vous commencez votre tour sans carte en main, vous pouvez en tirer une."
                ]
            },
            {
                "name": "maître ivre",
                "handSize": { "base": 4, "max": 7 },
                "proficiencies": [
                    "{0} Armes"
                ],
                "powers": [
                    "Quand vous faites un test de combat sans jouer d'arme vous pouvez utiliser votre dé de Dextérité au lieu de votre dé de Force ({0} et lui ajouter la propriété Magique) ({1} et de Feu).",
                    "Vous pouvez jouer autant de bénédictions que vous le désirez lors de votre test de combat. Rechargez-les au lieu de les jeter.",
                    "{0} Quand vous recevez des dégâts autres que des dégâts de Combat, réduisez-les de 1 ({1} 2) ({2} 3).",
                    "{0} Quand vous utilisez une aubaine dotée de la propriété Liquide, vous pouvez la recharger au lieu de la bannir à condition de réussir un test de Vigueur 6.",
                    "{0} Ajoutez 6 à votre test quand vous essayez d'acquérir une aubaine avec la propriété Liquide.",
                    "{0} Au début de votre tour, vous devez tirer une carte."
                ]
            }
        ],
        "defaultDeck": [[], [], [], [2, 6, 26, 20], [7, 12, 17], [9, 9, 9, 9, 9, 9, 9, 9]]
    }
    ],
    "cards": [
        // weapons
        [{
            "source": "base",
            "cards": [
                "arbalète légère",
                "arbalète légère tueuse de mots-vivants +1",
                "arbalète lourde",
                "arc court",
                "arc long",
                "arc long de foudre +1", // 5
                "bâton",
                "chaîne cloutée",
                "cimeterre",
                "coutille",
                "dague", // 10
                "épée à deux mains",
                "épée bâtarde",
                "épée courte",
                "épée longue",
                "épée longue +1", // 15
                "fléchette d'entraide +1",
                "fléchettes",
                "fronde",
                "grande hache",
                "hache de bataille", // 20
                "hache de jet",
                "hache de jet boomerang +1",
                "lamétoile",
                "marteau de guerre",
                "marteau de guerre +1", // 25
                "masse",
                "masse enflammée +1",
                "pique",
                "pique glacée +1"
            ]
        }, {
            "source": "goodies",
            "cards": []
        }, {
            "source": "aventure 1",
            "cards": [
            	"arc long +1",
                "dague +1",
                "épee batarde +1",
                "épée courte +1",
                "tranchechien",
            	"tranchechien +1",
            ]
        }, {
            "source": "aventure 2",
            "cards": [
            	"arbalète légère +1",
            	"faucille +1",
                "faux +1",
                "pic de guerre lourd +1",
                "rasoir de combat +1",
                "pal des épines"
            ]
        }, {
            "source": "aventure 3",
            "cards": [
                "arc long de froid +1",
                "dague venimeuse +2",
                "épée longue +2",
                "trident vicieux +1"
            ]
        }, {
            "source": "aventure 4",
            "cards": [
                "dague tueuse de géants +1",
                "épieu +3",
                "gourdin de Mokmurian",
                "hachette de froid runique +2",
                "massue +3"
            ]
        }],
        // spells
        [{
            "source": "base",
            "cards": [
                "aide",
                "armure du mage",
                "assistance divine",
                "augure",
                "bagou",
                "blessure", // 5
                "charme-personne",
                "découverte des pièges",
                "détection de la magie",
                "détection du mal",
                "flèche acide", // 10
                "force",
                "image miroir",
                "invisibilité",
                "lévitation",
                "lumière sacrée", // 15
                "poigne électrique",
                "projectile de force",
                "réparation",
                "sanctuaire",
                "soin", // 20
                "sommeil",
            ]
        }, {
            "source": "goodies",
            "cards": [
                "éternuement enflammé",
            ]
        }, {
            "source": "aventure 1",
            "cards": [
            	"affaiblissement",
            	"arme enflammée",
                "rapidité",
                "rayon ardent",
                "rayon de givre",
            ]
        }, {
            "source": "aventure 2",
            "cards": [
            	"consécration",
                "éclair",
                "hâte",
                "nuage toxique",
                "toile",
            ]
        }, {
            "source": "aventure 3",
            "cards": [
                "chapardage",
                "nuage incendiaire",
                "scrutation",
                "soin majeur"
            ]

        }, {
            "source": "aventure 4",
            "cards": [
                "explosion empoisonnée",
                "restauration",
                "soin de groupe",
                "téléportation"
            ]

        }],
        // armors
        [{
            "source": "base",
            "cards": [
                "armure de cuir",
                "armure de cuir magique",
                "armure de plate",
                "armure de plate magique",
                "bouclier magique",
                "cotte de mailles", // 5
                "cotte de mailles elfique",
                "cotte de mailles magique",
                "écu de bois",
            ]
        }, {
            "source": "goodies",
            "cards": []
        }, {
            "source": "aventure 1",
            "cards": [
            	"bouclier de réqsistance au feu",
            	"chemise de maille elfique",
                "cuirasse elfique",
            ]
        }, {
            "source": "aventure 2",
            "cards": [
                "bouclier tueur de mort vivants",
                "armure de peau de résistance au feu",
                "cuir clouté de capture de projectiles",
                "tunique en peau de serpent"
            ]
        }, {
            "source": "aventure 3",
            "cards": [
                "armure de cuir cloutée magique",
                "bouclier à pointes",
                "harnois magique"
            ]
        }, {
            "source": "aventure 4",
            "cards": [
                "armure de renforcement mineur",
                "bouclier réfléchissant",
                "cotte de mailles de résistance au froid",
                "cuirasse de résistance au feu"
            ]
        }],
        // item
        [{
            "source": "base",
            "cards": [
                "amulette de vie",
                "amulette de vigueur",
                "amulette des poings invincibles",
                "bottes elfiques",
                "brassards de protection",
                "cape d'escampette", // 5
                "chausse-trappe",
                "cierge sacré",
                "codex",
                "couronne de charisme",
                "eau bénite", // 10
                "gage du souvenir",
                "journal du sage",
                "longue-vue",
                "outils de maître",
                "outils de voleur", // 15
                "pied-de-biche",
                "pierre de détonation",
                "pierre porte-bonheur",
                "pioche",
                "potion de bagou", // 20
                "potion de camouflage",
                "potion de forme fantomatique",
                "potion de résistance à l'énergie",
                "potion de soin",
                "potion de vigueur", // 25
                "potion de vision",
                "tome du savoir",
                "yeux de lynx",
            ]
        }, {
            "source": "goodies",
            "cards": [
                "couronne des croqueurs d'oiseaux"
            ]
        }, {
            "source": "aventure 1",
            "cards": [
            	"baguette de bouclier",
                "baguette de projectile de force",
            	"bâton de guérison mineure",
                "médaillon de Sihédron",
                "potion de grace",
                "potion de robustesse",
            ]
        }, {
            "source": "aventure 2",
            "cards": [
            	"anneau de protection",
            	"cape elfique",
                "clochette d'ouverture",
                "masque de la méduse",
                "médaillon de Sihédron",
                "pal des épines",
                "tunique en peau de serpent",
            ]
        }, {
            "source": "aventure 3",
            "cards": [
                "baguette d'énergie négative",
                "baguette de rayon ardent",
                "bandeau de belle allure",
                "bandeau de vaste intelligence",
                "ceinturon de dextérité du chat",
                "ceinturon de force de géant",
                "médaillon de Sihédron"
            ]
        }, {
            "source": "aventure 4",
            "cards": [
                "amulette des poings ardents",
                "bandeau de sagesse",
                "bâton du ciel et de la terre",
                "brassards de protection supérieure",
                "codex d'émeraude",
                "collier de boules de feu",
                "longue-vue magique",
                "pierre porte-bonheur supérieure",
                "robe des runes"
            ]
        }],
        // ally
        [{
            "source": "base",
            "cards": [
                "acolyte",
                "archer",
                "cambrioleur",
                "chien",
                "corbeau",
                "garde", // 5
                "garde de nuit",
                "guide",
                "maire Kendra Déverin",
                "père Zantus",
                "porte-étendard", // 10
                "prévôt Cuguë",
                "sage",
                "serpent",
                "Shalelu Andosana",
                "soldat", // 15
                "tigre à dents de sabre",
                "troubadour"
            ]
        }, {
            "source": "goodies",
            "cards": [
                "poog de zarongel"
            ]
        }, {
            "source": "aventure 1",
            "cards": [
            	"Ameiko Kaijitsu",
            	"Aldern Ganrenard",
                "crapaud",
                "Cydrak Drokkus",
                "Ilsoari Gandethus",
                "mercenaire aguerri",
                "Ven Vinder",
            ]
        }, {
            "source": "aventure 2",
            "cards": [
                "Brodert Quink",
                "Maester Grump",
                "marchand",
            ]
        }, {
            "source": "aventure 3",
            "cards": [
                "blaireau géant",
                "chat",
                "Jakardros Sovark",
                "rôdeur des flèches noires",
                "singe",
                "Vale Temros",
                "Yap le pixie"
            ]
        }, {
            "source": "aventure 4",
            "cards": [
                "aigle",
                "bibliothécaire mécanique",
                "Conna la sage",
                "dragon rouge charmé",
                "lézard",
                "ours"
            ]
        }],
        // blessings
        [{
            "source": "base",
            "cards": [
                "bénédiction de Calistria",
                "bénédiction de Desna",
                "bénédiction de Gorum",
                "bénédiction de Iomédae",
                "bénédiction de Pharasma",
                "bénédiction de Sarenrae", // 5
                "bénédiction de Shélyn",
                "bénédiction de Torag",
                "bénédiction d'Érastil",
                "bénédiction des dieux",
                "bénédiction d'Irori", // 10
            ]
        }, {
            "source": "goodies",
            "cards": [
                "bénédiction de Zarongel",
            ]
        }, {
            "source": "aventure 1",
            "cards": [
                "bénédiction de Lamathstu",
            ]
        }, {
            "source": "aventure 2",
            "cards": [
                "bénédiction d'Abadar",
            ]
        }, {
            "source": "aventure 3",
            "cards": [
                "bénédiction de Norgorber"
            ]
        }, {
            "source": "aventure 4",
            "cards": [
                "bénédiction de Gozreh"
            ]
        }]
    ]
};