const bosses = [
    "[Nécrolimbe] Soldat de Godrick",
    "[Nécrolimbe] Sentinelle de l'Arbre",
    "[Nécrolimbe] Chefs Semi-Humains",
    "[Nécrolimbe] Veilleur de l'Arbre-Monde",
    "[Nécrolimbe] Homme-bête de Farum Azula",
    "[Nécrolimbe] Agheel, le Dragon Volant",
    "[Nécrolimbe] Troll Fouisseur",
    "[Nécrolimbe] Pat",
    "[Nécrolimbe] Duelliste Gardien du Tombeau",
    "[Nécrolimbe] Golem Gardien",
    "[Nécrolimbe] Assassin des Couteaux Noirs",
    "[Nécrolimbe] Nocher Diaphane",
    "[Nécrolimbe] Darriwil, Chevalier Limier",
    "[Nécrolimbe] Tête de Citrouille Démente",
    "[Nécrolimbe] Cavalier Crépusculaire",
    "[Nécrolimbe] Chasseur de Perles Cinéraires",
    "[Nécrolimbe] Rapace Funeste",
    "[Nécrolimbe] Esprit d'Arbre Ulcéreux",

    "[Péninsule Larmoyante] Ours Runique",
    "[Péninsule Larmoyante] Chimère Écailleuse",
    "[Péninsule Larmoyante] Ombre du Cimetière",
    "[Péninsule Larmoyante] Ancien Héros de Zamor",
    "[Péninsule Larmoyante] Arbre-Monde Mineur",
    "[Péninsule Larmoyante] Cavalier Crépusculaire",
    "[Péninsule Larmoyante] Rapace Funeste",
    "[Péninsule Larmoyante] Veilleur de l'Arbre-Monde",
    "[Péninsule Larmoyante] Chimère Léonine",
    "[Péninsule Larmoyante] Miranda la Fleur Galeuse",

    "[Liurnia Contrée Lacustre] Chevalier de la Noble Putréfaction",
    "[Liurnia Contrée Lacustre] Escargot Mande-Esprit",
    "[Liurnia Contrée Lacustre] Tueur de Réprouvé",
    "[Liurnia Contrée Lacustre] Rapace Funeste",
    "[Liurnia Contrée Lacustre] Chasseur de Perle Funéraire",
    "[Liurnia Contrée Lacustre] Cavalier Crépusculaire (Sud)",
    "[Liurnia Contrée Lacustre] Cavalier Crépusculaire (Nord)",
    "[Liurnia Contrée Lacustre] Volatile Funéraire",
    "[Liurnia Contrée Lacustre] Chevalier Limier",
    "[Liurnia Contrée Lacustre] Adan le Voleur du Feu",
    "[Liurnia Contrée Lacustre] Nocher Diaphane",
    "[Liurnia Contrée Lacustre] Veilleur de l'Arbre-Monde",
    "[Liurnia Contrée Lacustre] Smarag, Dragon de Pierre d'Éclat",
    "[Liurnia Contrée Lacustre] Sorcier Cristalien et Lancier Cristalien",
    "[Liurnia Contrée Lacustre] Bols, Chevalier de Caria",
    "[Liurnia Contrée Lacustre] Rejeton Greffé",
    "[Liurnia Contrée Lacustre] Avatar de l'Arbre Monde (Sud)",
    "[Liurnia Contrée Lacustre] Avatar de l'Arbre Monde (Nord)",
    "[Liurnia Contrée Lacustre] Danseur Cristalien",
    "[Liurnia Contrée Lacustre] Spectre Royal",
    "[Liurnia Contrée Lacustre] Loretta, Chevaleresse Royale",
    "[Liurnia Contrée Lacustre] Seigneur d'Onyx",
    "[Liurnia Contrée Lacustre] Ombre du Cimetière",
    "[Liurnia Contrée Lacustre] Assassin des Couteaux Noirs",
    "[Liurnia Contrée Lacustre] Chasseur de Perles Cinéraires",
    "[Liurnia Contrée Lacustre] Makar le Dragon de Magma",

    "[Académie de Raya Lucaria] Loup Cramoisi de Radagon",
    "[Académie de Raya Lucaria] Rennala, Reine de la Pleine Lune",

    "[Ainsel] Soldat Draconide de Nokstella",

    "[La Siofra] Esprit Ancestral",
    "[La Siofra] Soldat Draconide",

    "[Caelid] Arbre-Monde Mineur",
    "[Caelid] Veilleur Épéiste et Veilleur Sorcier de l'Arbre-Monde",
    "[Caelid] Têtes de Citrouilles Démentes",
    "[Caelid] Danseur, Lancier et Sorcier Cristaliens Putrides",
    "[Caelid] Hugues, Mage de Bataille",
    "[Caelid] Chevaliers de la Noble Putréfaction",
    "[Caelid] Dragon du Magma",
    "[Caelid] Duelliste Frénétique",
    "[Caelid] Ekzykes le Putréfié",
    "[Caelid] Cavalier Crépusculaire",
    "[Caelid] Commandant O'Neil",
    "[Caelid] Volatile Funéraire",
    "[Caelid] Créature Stellaire",
    "[Caelid] Moine et Épéiste Nokriens",
    "[Caelid] Ombre du Cimetière",
    "[Caelid] Radahn, le Fléau des Astres",
    "[Caelid] Chevalier du Creuset et Chimère Léonine",

    "[Nokron] Larme Imitatrice",
    "[Nokron] Esprit Ancestral Royal",
    "[Nokron] Gargouilles Vaillantes",

    "[Plateau Altus] Parfumeuse Tricia et Chimère Léonine",
    "[Plateau Altus] Garris le Nécromancien",
    "[Plateau Altus] Assassin des Couteaux Noirs Invisible",
    "[Plateau Altus] Gilika, Reine Semi-Humaine",
    "[Plateau Altus] Nocher Diaphane",
    "[Plateau Altus] Veilleur de l'Arbre-Monde",
    "[Plateau Altus] Troll Fouisseur",
    "[Plateau Altus] Elemer du Roncier",
    "[Plateau Altus] Cavalier Crépusculaire",
    "[Plateau Altus] Sentinelles de l'Arbre",
    "[Plateau Altus] Godefroy le Greffé",
    "[Plateau Altus] Créature Stellaire",
    "[Plateau Altus] Tueur de Réprouvé et Miranda la Fleur Galeuse",
    "[Plateau Altus] Noble Sanglant",
    "[Plateau Altus] Face de Ver",
    "[Plateau Altus] Lancier et Danseur Cristalliens",
    "[Plateau Altus] Apôtre Sanctechair",
    "[Plateau Altus] Lansseax, le Dragon Ancien",
    "[Plateau Altus] Ancien Héros de Zamor",
    "[Plateau Altus] Assassin des Couteaux Noirs",

    "[Faubourgs de la capitale] Seigneur d'Onyx",
    "[Faubourgs de la capitale] Chasseur de Perles Cinéraires",
    "[Faubourgs de la capitale] Rapace Funeste",
    "[Faubourgs de la capitale] Duelliste Gardien du Tombeau",
    "[Faubourgs de la capitale] Chevaliers du Creuset",

    "[Mont Gelmir] Adeptes de la Putréfaction",
    "[Mont Gelmir] Dragon du Magma",
    "[Mont Gelmir] Maggie, Reine Semi-Humaine",
    "[Mont Gelmir] Loup Rouge du Champion",
    "[Mont Gelmir] Margot, Reine Semi-Humaine",
    "[Mont Gelmir] Créature Stellaire Adulte",
    "[Mont Gelmir] Esprit d'Arbre Ulcéreux",

    "[Manoir du Volcan] Vierges de Fer",
    "[Manoir du Volcan] Noble Sanctechair",
    "[Manoir du Volcan] Rykard, Seigneur du Blasphème",

    "[Profondeurs de Fonderacine] Siluria du Creuset",
    "[Profondeurs de Fonderacine] Fortissax, la Liche Draconique",
    "[Profondeurs de Fonderacine] Champions de Fia",

    "[Lac Putréfié] Soldat Draconide",
    "[Lac Putréfié] Astel, le Rejeton du Vide",

    "[Leyndell, Capitale Royale] Esgar, Prêtre du Sang",
    "[Leyndell, Capitale Royale] Mogh le Réprouvé",
    "[Leyndell, Capitale Royale] Jumeaux Abominables",

    "[Terres Interdites] Cavalier Crépusculaire",
    "[Terres Interdites] Adepte de la Lame d'Ébène",

    "[Cime des Géants] Esprit d'Arbre Ulcéreux",
    "[Cime des Géants] Volatile Funéraire",
    "[Cime des Géants] Avatar de l'Arbre Monde",
    "[Cime des Géants] Commandant Niall",
    "[Cime des Géants] Borealis, la Brume Glaciale",
    "[Cime des Géants] Escargot Mande-Esprit",
    "[Cime des Géants] Vyke, Chevalier de la Table Ronde",
    "[Cime des Géants] Ancien Héros de Zamor",

    "[Farum Azula] Placidusax, Seigneur Draconique",

    "[Autel Lunaire] Adula, Dragon de Pierre d'Éclat",
    "[Autel Lunaire] Alecto, Meneuse des Couteaux Noirs",

    "[Mausolée de la Dynastie Mohgwyn] Mogh, Seigneur du Sang",

    "[Champs Enneigés Consacrés] Larme Imitatrice Égarée",
    "[Champs Enneigés Consacrés] Duelliste Putride Gardien du Tombeau",
    "[Champs Enneigés Consacrés] Theodorix, le Grand Ver",
    "[Champs Enneigés Consacrés] Croisé Chimérique",
    "[Champs Enneigés Consacrés] Volatile Funéraire",
    "[Champs Enneigés Consacrés] Avatar Putride",
    "[Champs Enneigés Consacrés] Astel, La Constellation des Ténèbres",
    "[Champs Enneigés Consacrés] Cavaliers Crépusculaires",

    "[Arbre-Sacré de Miquella] Loretta, Chevaleresse de l'Arbre-Sacré",
    "[Arbre-Sacré de Miquella] Malenia, Épée de Miquella",

    "[Tertre Draconique de Greyoll] Esprit d'Arbre Putride",
    "[Tertre Draconique de Greyoll] Chasseur de Perles Cinéraires",
    "[Tertre Draconique de Greyoll] Apôtre Sanctechair",
    "[Tertre Draconique de Greyoll] Hommes-Bêtes de Farum Azula",
    "[Tertre Draconique de Greyoll] Avatar Putride",
    "[Tertre Draconique de Greyoll] Greyll, Le Dragon Volant",
    "[Tertre Draconique de Greyoll] Cavalier Crépusculaire",
    "[Tertre Draconique de Greyoll] Adepte de la Lame d'Ébène"
];


const button = document.getElementById("randomBossBtn");
const zoneEl = document.querySelector(".zone");
const bossNameEl = document.querySelector(".boss-name");

button.addEventListener("click", () => {
    button.disabled = true;

    const totalDuration = 5000; // durée totale (ms)
    const startSpeed = 60;      // vitesse au début
    const endSpeed = 400;       // vitesse à la fin (plus lent)

    let startTime = performance.now();

    bossNameEl.classList.add("rolling");

    function roll(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);

        // interpolation de la vitesse (ease-out)
        const currentSpeed =
            startSpeed + (endSpeed - startSpeed) * progress;

        // afficher un boss aléatoire
        const randomIndex = Math.floor(Math.random() * bosses.length);
        const boss = bosses[randomIndex];
        const match = boss.match(/\[(.*?)\]\s(.+)/);

        if (match) {
            zoneEl.textContent = `[${match[1]}]`;
            bossNameEl.textContent = match[2];
        }

        if (progress < 1) {
            setTimeout(() => requestAnimationFrame(roll), currentSpeed);
        } else {
            finish();
        }
    }

    function finish() {
        // boss final
        const finalIndex = Math.floor(Math.random() * bosses.length);
        const finalBoss = bosses[finalIndex];
        const match = finalBoss.match(/\[(.*?)\]\s(.+)/);

        if (match) {
            zoneEl.textContent = `[${match[1]}]`;
            bossNameEl.textContent = match[2];
        }

        bossNameEl.classList.remove("rolling");

        // animation finale
        bossNameEl.classList.remove("animate");
        void bossNameEl.offsetWidth;
        bossNameEl.classList.add("animate");

        button.disabled = false;
    }

    requestAnimationFrame(roll);
});



