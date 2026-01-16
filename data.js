// ========== MALTISH - COMPLETE DATA ==========

// Pasti phrases
const pastiPhrases = [
    "Bonġu! Je suis Pasti, ton ami pastizzi ! 🥟",
    "Prosit! Continue comme ça ! 👏",
    "Le maltais c'est facile avec moi ! 🎉",
    "N'oublie pas : ġ = [dʒ] comme 'j' ! 🔤",
    "Tu veux un pastizzi ? Moi oui ! 😋",
    "Ħ se prononce comme un H fort expiré ! 💨",
    "Excellent progrès ! Je suis fier ! 💪",
    "Għ allonge la voyelle qui suit ! 📢",
    "Le maltais = arabe + italien + anglais ! 🌍",
    "Jien kuntent! (Je suis content!) 😊",
    "X = [ʃ] comme 'ch' en français ! 🎵",
    "Tajjeb ħafna! (Très bien !) ⭐"
];

// Practice Modules (Duolingo-style)
const practiceModules = [
    {
        id: "salutations",
        name: "Salutations de Base",
        emoji: "👋",
        desc: "Dire bonjour et au revoir",
        words: [
            { maltese: "Bonġu", phonetic: "[bon-dʒu]", french: "Bonjour", tip: "Le 'ġ' se prononce [dʒ] comme 'j' dans 'joue'." },
            { maltese: "Bonswa", phonetic: "[bon-swa]", french: "Bonsoir", tip: "Emprunté directement du français !" },
            { maltese: "Il-lejl it-tajjeb", phonetic: "[il-leyl it-tɑy-yep]", french: "Bonne nuit", tip: "Littéralement 'la nuit la bonne'." },
            { maltese: "Saħħa", phonetic: "[sɑħ-ħɑ]", french: "Au revoir / Santé", tip: "Le 'ħ' est un h fortement expiré depuis la gorge." },
            { maltese: "Grazzi", phonetic: "[grɑt-tsi]", french: "Merci", tip: "De l'italien 'grazie'." },
            { maltese: "Grazzi ħafna", phonetic: "[grɑt-tsi ħɑf-nɑ]", french: "Merci beaucoup", tip: "Ħafna = beaucoup." },
            { maltese: "Iva", phonetic: "[i-vɑ]", french: "Oui", tip: "Court et simple !" },
            { maltese: "Le", phonetic: "[le]", french: "Non", tip: "Origine arabe 'la'." }
        ]
    },
    {
        id: "politesse",
        name: "Expressions Polies",
        emoji: "🙏",
        desc: "Être poli en maltais",
        words: [
            { maltese: "Jekk jogħġbok", phonetic: "[yek yoɑdʒ-bok]", french: "S'il te plaît", tip: "Littéralement 'si cela te plaît'." },
            { maltese: "Skużani", phonetic: "[sku-zɑ-ni]", french: "Excuse-moi", tip: "De l'italien 'scusa'." },
            { maltese: "Jiddispjaċini", phonetic: "[yid-dis-pyɑ-tʃi-ni]", french: "Je suis désolé", tip: "Pour s'excuser formellement." },
            { maltese: "Mhux problema", phonetic: "[muʃ pro-ble-mɑ]", french: "Pas de problème", tip: "Expression courante et utile." },
            { maltese: "Merħba", phonetic: "[mer-ħbɑ]", french: "Bienvenue", tip: "Pour accueillir quelqu'un." },
            { maltese: "B'saħħtek", phonetic: "[bsɑħ-ħtek]", french: "À ta santé", tip: "Utilisé pour trinquer !" },
            { maltese: "Niltaqgħu aktar tard", phonetic: "[nil-tɑʔ-u ɑk-tɑr tɑrd]", french: "À plus tard", tip: "Pour se quitter temporairement." },
            { maltese: "Il-ġurnata t-tajba", phonetic: "[il-dʒur-nɑ-tɑ t-tɑy-bɑ]", french: "Bonne journée", tip: "Pour souhaiter une bonne journée." }
        ]
    },
    {
        id: "presentations",
        name: "Se Présenter",
        emoji: "👤",
        desc: "Dire qui tu es",
        words: [
            { maltese: "X'jismek?", phonetic: "[ʃis-mek]", french: "Comment t'appelles-tu ?", tip: "X' = quoi, jismek = ton nom." },
            { maltese: "Jisimni...", phonetic: "[yi-sim-ni]", french: "Je m'appelle...", tip: "Pour te présenter !" },
            { maltese: "Kif int?", phonetic: "[kif int]", french: "Comment vas-tu ?", tip: "Kif = comment, int = tu." },
            { maltese: "Jien tajjeb", phonetic: "[yin tɑy-yep]", french: "Je vais bien (m)", tip: "Tajjeb = bien (masculin)." },
            { maltese: "Jiena tajba", phonetic: "[yi-nɑ tɑy-bɑ]", french: "Je vais bien (f)", tip: "Tajba = bien (féminin)." },
            { maltese: "Mnejn int?", phonetic: "[mneyn int]", french: "D'où viens-tu ?", tip: "Mnejn = d'où." },
            { maltese: "Jien minn...", phonetic: "[yin min]", french: "Je viens de...", tip: "Minn = de/depuis." },
            { maltese: "Kemm għandek?", phonetic: "[kemm ɑn-dek]", french: "Quel âge as-tu ?", tip: "Kemm = combien, għandek = tu as." }
        ]
    },
    {
        id: "nombres1",
        name: "Nombres 1-10",
        emoji: "🔢",
        desc: "Compter jusqu'à 10",
        words: [
            { maltese: "Wieħed", phonetic: "[wi-ħet]", french: "Un (1)", tip: "Origine arabe 'wahid'." },
            { maltese: "Tnejn", phonetic: "[tneyn]", french: "Deux (2)", tip: "Le 'j' se prononce [y]." },
            { maltese: "Tlieta", phonetic: "[tli-tɑ]", french: "Trois (3)", tip: "Groupe consonantique 'tl' typique du maltais." },
            { maltese: "Erbgħa", phonetic: "[er-bɑ]", french: "Quatre (4)", tip: "Le 'għ' allonge la voyelle qui suit." },
            { maltese: "Ħamsa", phonetic: "[ħɑm-sɑ]", french: "Cinq (5)", tip: "Comme 'khamsa' en arabe." },
            { maltese: "Sitta", phonetic: "[sit-tɑ]", french: "Six (6)", tip: "Double consonne bien marquée." },
            { maltese: "Sebgħa", phonetic: "[seb-ɑ]", french: "Sept (7)", tip: "Le 'għ' est quasi muet ici." },
            { maltese: "Tmienja", phonetic: "[tmin-yɑ]", french: "Huit (8)", tip: "Le 'j' = [y]." },
            { maltese: "Disgħa", phonetic: "[dis-ɑ]", french: "Neuf (9)", tip: "Racine sémitique." },
            { maltese: "Għaxra", phonetic: "[ɑʃ-rɑ]", french: "Dix (10)", tip: "Għ allonge le 'a', x = [ʃ]." }
        ]
    },
    {
        id: "nombres2",
        name: "Nombres 11-20",
        emoji: "🔟",
        desc: "Compter de 11 à 20",
        words: [
            { maltese: "Ħdax", phonetic: "[ħdɑʃ]", french: "Onze (11)", tip: "X = [ʃ] comme 'ch'." },
            { maltese: "Tnax", phonetic: "[tnɑʃ]", french: "Douze (12)", tip: "Structure similaire à ħdax." },
            { maltese: "Tlettax", phonetic: "[tlet-tɑʃ]", french: "Treize (13)", tip: "Tlieta (3) + -x." },
            { maltese: "Erbatax", phonetic: "[er-bɑ-tɑʃ]", french: "Quatorze (14)", tip: "Erbgħa (4) + -x." },
            { maltese: "Ħmistax", phonetic: "[ħmis-tɑʃ]", french: "Quinze (15)", tip: "Ħamsa (5) + -x." },
            { maltese: "Sittax", phonetic: "[sit-tɑʃ]", french: "Seize (16)", tip: "Sitta (6) + -x." },
            { maltese: "Sbatax", phonetic: "[sbɑ-tɑʃ]", french: "Dix-sept (17)", tip: "Sebgħa (7) + -x." },
            { maltese: "Tmintax", phonetic: "[tmin-tɑʃ]", french: "Dix-huit (18)", tip: "Tmienja (8) + -x." },
            { maltese: "Dsatax", phonetic: "[dsɑ-tɑʃ]", french: "Dix-neuf (19)", tip: "Disgħa (9) + -x." },
            { maltese: "Għoxrin", phonetic: "[ɑʃ-rin]", french: "Vingt (20)", tip: "Forme duale de għaxra." }
        ]
    },
    {
        id: "famille",
        name: "La Famille",
        emoji: "👨‍👩‍👧",
        desc: "Les membres de la famille",
        words: [
            { maltese: "Omm", phonetic: "[omm]", french: "Mère", tip: "Comme 'oum' en arabe." },
            { maltese: "Missier", phonetic: "[mis-syer]", french: "Père", tip: "Influence italienne 'messere'." },
            { maltese: "Ħu", phonetic: "[ħu]", french: "Frère", tip: "Très court, origine arabe 'akh'." },
            { maltese: "Oħt", phonetic: "[oħt]", french: "Sœur", tip: "Le 'ħ' est aspiré." },
            { maltese: "Tifel", phonetic: "[ti-fel]", french: "Garçon/Fils", tip: "Enfant masculin." },
            { maltese: "Tifla", phonetic: "[tif-lɑ]", french: "Fille", tip: "Féminin de 'tifel'." },
            { maltese: "Nannu", phonetic: "[nɑn-nu]", french: "Grand-père", tip: "Terme affectueux." },
            { maltese: "Nanna", phonetic: "[nɑn-nɑ]", french: "Grand-mère", tip: "Terme affectueux." },
            { maltese: "Ziju", phonetic: "[zi-yu]", french: "Oncle", tip: "De l'italien 'zio'." },
            { maltese: "Zija", phonetic: "[zi-yɑ]", french: "Tante", tip: "De l'italien 'zia'." }
        ]
    },
    {
        id: "nourriture",
        name: "Nourriture",
        emoji: "🍽️",
        desc: "Aliments et boissons",
        words: [
            { maltese: "Ħobż", phonetic: "[ħobz]", french: "Pain", tip: "Le pain maltais est célèbre !" },
            { maltese: "Ilma", phonetic: "[il-mɑ]", french: "Eau", tip: "Article assimilé : il- + ma." },
            { maltese: "Pastizzi", phonetic: "[pɑs-tit-si]", french: "Feuilletés", tip: "LA spécialité maltaise ! Comme moi ! 🥟" },
            { maltese: "Fenek", phonetic: "[fe-nek]", french: "Lapin", tip: "Plat national maltais en ragoût." },
            { maltese: "Ħut", phonetic: "[ħut]", french: "Poisson", tip: "Malte = île = beaucoup de poisson !" },
            { maltese: "Laħam", phonetic: "[lɑ-ħɑm]", french: "Viande", tip: "Origine arabe." },
            { maltese: "Ġobon", phonetic: "[dʒo-bon]", french: "Fromage", tip: "Le ġbejna est le fromage local !" },
            { maltese: "Frott", phonetic: "[frott]", french: "Fruit", tip: "De l'italien 'frutto'." },
            { maltese: "Ħaxix", phonetic: "[ħɑ-ʃiʃ]", french: "Légumes", tip: "X = [ʃ]." },
            { maltese: "Ħelu", phonetic: "[ħe-lu]", french: "Dessert/Sucré", tip: "Ħelu = doux, sucré." }
        ]
    },
    {
        id: "boissons",
        name: "Boissons",
        emoji: "☕",
        desc: "Ce qu'on boit",
        words: [
            { maltese: "Inbid", phonetic: "[in-bit]", french: "Vin", tip: "Malte produit du vin local !" },
            { maltese: "Kafè", phonetic: "[kɑ-fɛ]", french: "Café", tip: "Influence italienne." },
            { maltese: "Birra", phonetic: "[bir-rɑ]", french: "Bière", tip: "Cisk est la bière nationale !" },
            { maltese: "Tè", phonetic: "[tɛ]", french: "Thé", tip: "Simple et direct !" },
            { maltese: "Ħalib", phonetic: "[ħɑ-lip]", french: "Lait", tip: "Origine arabe 'halib'." },
            { maltese: "Sorbett", phonetic: "[sor-bet]", french: "Jus/Sorbet", tip: "Boisson rafraîchissante." },
            { maltese: "Kinnie", phonetic: "[kin-ni]", french: "Kinnie", tip: "Boisson maltaise aux oranges amères !" },
            { maltese: "Ilma minerali", phonetic: "[il-mɑ mi-ne-rɑ-li]", french: "Eau minérale", tip: "Eau en bouteille." }
        ]
    },
    {
        id: "couleurs",
        name: "Les Couleurs",
        emoji: "🎨",
        desc: "Toutes les couleurs",
        words: [
            { maltese: "Abjad", phonetic: "[ɑb-yɑt]", french: "Blanc", tip: "Origine arabe 'abyad'." },
            { maltese: "Iswed", phonetic: "[is-wet]", french: "Noir", tip: "Origine arabe 'aswad'." },
            { maltese: "Aħmar", phonetic: "[ɑħ-mɑr]", french: "Rouge", tip: "Origine arabe 'ahmar'." },
            { maltese: "Blu", phonetic: "[blu]", french: "Bleu", tip: "De l'italien/français." },
            { maltese: "Aħdar", phonetic: "[ɑħ-dɑr]", french: "Vert", tip: "Origine arabe 'akhdar'." },
            { maltese: "Isfar", phonetic: "[is-fɑr]", french: "Jaune", tip: "Origine arabe 'asfar'." },
            { maltese: "Griż", phonetic: "[griʒ]", french: "Gris", tip: "De l'italien 'grigio'." },
            { maltese: "Kannella", phonetic: "[kɑn-nel-lɑ]", french: "Marron", tip: "Comme la cannelle !" },
            { maltese: "Roża", phonetic: "[ro-ʒɑ]", french: "Rose", tip: "De l'italien 'rosa'." },
            { maltese: "Vjola", phonetic: "[vyo-lɑ]", french: "Violet", tip: "De l'italien 'viola'." }
        ]
    },
    {
        id: "corps",
        name: "Le Corps Humain",
        emoji: "🧑",
        desc: "Parties du corps",
        words: [
            { maltese: "Ras", phonetic: "[rɑs]", french: "Tête", tip: "Origine arabe 'ra's'." },
            { maltese: "Għajnejn", phonetic: "[ɑy-neyn]", french: "Yeux", tip: "Duel de 'għajn' (œil)." },
            { maltese: "Ħalq", phonetic: "[ħɑlʔ]", french: "Bouche", tip: "Le 'q' final = coup de glotte." },
            { maltese: "Idejn", phonetic: "[i-deyn]", french: "Mains", tip: "Duel de 'id' (main)." },
            { maltese: "Saqajn", phonetic: "[sɑ-ʔɑyn]", french: "Jambes", tip: "Duel de 'sieq' (jambe)." },
            { maltese: "Riġlejn", phonetic: "[riʒ-leyn]", french: "Pieds", tip: "Duel de 'riġel' (pied)." },
            { maltese: "Qalb", phonetic: "[ʔɑlp]", french: "Cœur", tip: "Origine arabe 'qalb'." },
            { maltese: "Moħħ", phonetic: "[moħħ]", french: "Cerveau", tip: "Double ħ bien aspiré." },
            { maltese: "Widnejn", phonetic: "[wid-neyn]", french: "Oreilles", tip: "Duel de 'widna' (oreille)." },
            { maltese: "Imnifsejn", phonetic: "[im-nif-seyn]", french: "Narines/Nez", tip: "Duel nasal !" }
        ]
    },
    {
        id: "temps",
        name: "Le Temps",
        emoji: "⏰",
        desc: "Heures et moments",
        words: [
            { maltese: "Issa", phonetic: "[is-sɑ]", french: "Maintenant", tip: "Pour le moment présent." },
            { maltese: "Illum", phonetic: "[il-lum]", french: "Aujourd'hui", tip: "Littéralement 'ce jour'." },
            { maltese: "Ilbieraħ", phonetic: "[il-bye-rɑħ]", french: "Hier", tip: "Le jour d'avant." },
            { maltese: "Għada", phonetic: "[ɑ-dɑ]", french: "Demain", tip: "Court et simple !" },
            { maltese: "Ġimgħa", phonetic: "[dʒim-ɑ]", french: "Semaine", tip: "Origine arabe 'jum'a'." },
            { maltese: "Xahar", phonetic: "[ʃɑ-hɑr]", french: "Mois", tip: "Origine arabe 'shahr'." },
            { maltese: "Sena", phonetic: "[se-nɑ]", french: "Année", tip: "Origine arabe 'sana'." },
            { maltese: "Siegħa", phonetic: "[si-ɑ]", french: "Heure", tip: "għ allonge la voyelle." },
            { maltese: "Minuta", phonetic: "[mi-nu-tɑ]", french: "Minute", tip: "De l'italien/latin." },
            { maltese: "Sekonda", phonetic: "[se-kon-dɑ]", french: "Seconde", tip: "De l'italien/latin." }
        ]
    },
    {
        id: "jours",
        name: "Jours de la Semaine",
        emoji: "📅",
        desc: "Les 7 jours",
        words: [
            { maltese: "It-Tnejn", phonetic: "[it-tneyn]", french: "Lundi", tip: "De 'tnejn' (deux) - 2e jour." },
            { maltese: "It-Tlieta", phonetic: "[it-tli-tɑ]", french: "Mardi", tip: "De 'tlieta' (trois) - 3e jour." },
            { maltese: "L-Erbgħa", phonetic: "[ler-bɑ]", french: "Mercredi", tip: "De 'erbgħa' (quatre) - 4e jour." },
            { maltese: "Il-Ħamis", phonetic: "[il-ħɑ-mis]", french: "Jeudi", tip: "De 'ħamsa' (cinq) - 5e jour." },
            { maltese: "Il-Ġimgħa", phonetic: "[il-dʒim-ɑ]", french: "Vendredi", tip: "Jour de prière (islam)." },
            { maltese: "Is-Sibt", phonetic: "[is-sipt]", french: "Samedi", tip: "Origine hébraïque 'Shabbat'." },
            { maltese: "Il-Ħadd", phonetic: "[il-ħɑdd]", french: "Dimanche", tip: "Jour du Seigneur (chrétien)." }
        ]
    },
    {
        id: "meteo",
        name: "La Météo",
        emoji: "🌤️",
        desc: "Parler du temps qu'il fait",
        words: [
            { maltese: "Xemx", phonetic: "[ʃemʃ]", french: "Soleil", tip: "X = [ʃ], origine arabe 'shams'." },
            { maltese: "Xita", phonetic: "[ʃi-tɑ]", french: "Pluie", tip: "Il pleut souvent en hiver à Malte !" },
            { maltese: "Riħ", phonetic: "[riħ]", french: "Vent", tip: "Le Gregale est le vent du nord-est." },
            { maltese: "Sħab", phonetic: "[sħɑp]", french: "Nuages", tip: "Origine arabe 'sahab'." },
            { maltese: "Sħana", phonetic: "[sħɑ-nɑ]", french: "Chaleur", tip: "Il fait chaud l'été à Malte !" },
            { maltese: "Kesħa", phonetic: "[ke-sħɑ]", french: "Froid", tip: "Relativement rare à Malte !" },
            { maltese: "Ragħad", phonetic: "[rɑ-ɑt]", french: "Tonnerre", tip: "Orage méditerranéen." },
            { maltese: "Beraq", phonetic: "[be-rɑʔ]", french: "Éclair", tip: "Q final = coup de glotte." }
        ]
    },
    {
        id: "animaux",
        name: "Les Animaux",
        emoji: "🐕",
        desc: "Animaux courants",
        words: [
            { maltese: "Kelb", phonetic: "[kelp]", french: "Chien", tip: "Origine arabe 'kalb'." },
            { maltese: "Qattus", phonetic: "[ʔɑt-tus]", french: "Chat", tip: "Origine arabe 'qitt'." },
            { maltese: "Għasfur", phonetic: "[ɑs-fur]", french: "Oiseau", tip: "Origine arabe ''usfur'." },
            { maltese: "Ħut", phonetic: "[ħut]", french: "Poisson", tip: "Déjà vu dans Nourriture !" },
            { maltese: "Fenek", phonetic: "[fe-nek]", french: "Lapin", tip: "Animal ET plat national !" },
            { maltese: "Żiemel", phonetic: "[zi-mel]", french: "Cheval", tip: "De l'arabe." },
            { maltese: "Nagħġa", phonetic: "[nɑ-dʒɑ]", french: "Brebis", tip: "Élevage traditionnel maltais." },
            { maltese: "Majjal", phonetic: "[mɑy-yɑl]", french: "Cochon", tip: "Double 'j' = [y]." },
            { maltese: "Dubbiena", phonetic: "[dub-bye-nɑ]", french: "Mouche", tip: "Insecte commun en été !" },
            { maltese: "Naħla", phonetic: "[nɑħ-lɑ]", french: "Abeille", tip: "Produit du miel maltais !" }
        ]
    },
    {
        id: "ville",
        name: "En Ville",
        emoji: "🏙️",
        desc: "Lieux urbains",
        words: [
            { maltese: "Belt", phonetic: "[belt]", french: "Ville", tip: "La Valette = Il-Belt." },
            { maltese: "Triq", phonetic: "[triʔ]", french: "Rue", tip: "Q final = coup de glotte." },
            { maltese: "Dar", phonetic: "[dɑr]", french: "Maison", tip: "Origine arabe 'dar'." },
            { maltese: "Knisja", phonetic: "[kni-syɑ]", french: "Église", tip: "Malte est très catholique !" },
            { maltese: "Skola", phonetic: "[sko-lɑ]", french: "École", tip: "De l'italien 'scuola'." },
            { maltese: "Sptar", phonetic: "[spi-tɑr]", french: "Hôpital", tip: "Origine italienne 'ospedale'." },
            { maltese: "Ħanut", phonetic: "[ħɑ-nut]", french: "Magasin", tip: "Origine arabe 'hanut'." },
            { maltese: "Suq", phonetic: "[suʔ]", french: "Marché", tip: "Origine arabe 'souq'." },
            { maltese: "Bank", phonetic: "[bɑnk]", french: "Banque", tip: "De l'anglais/italien." },
            { maltese: "Posta", phonetic: "[pos-tɑ]", french: "Poste", tip: "De l'italien 'posta'." }
        ]
    },
    {
        id: "transport",
        name: "Transports",
        emoji: "🚌",
        desc: "Se déplacer",
        words: [
            { maltese: "Karozza", phonetic: "[kɑ-rot-tsɑ]", french: "Voiture", tip: "De l'italien 'carrozza'." },
            { maltese: "Xarabank", phonetic: "[ʃɑ-rɑ-bɑnk]", french: "Bus", tip: "Les bus maltais sont emblématiques !" },
            { maltese: "Ajruplan", phonetic: "[ɑy-ru-plɑn]", french: "Avion", tip: "Malte a un aéroport international." },
            { maltese: "Vapur", phonetic: "[vɑ-pur]", french: "Bateau/Ferry", tip: "Pour aller à Gozo !" },
            { maltese: "Rota", phonetic: "[ro-tɑ]", french: "Roue", tip: "De l'italien 'ruota'." },
            { maltese: "Ferrovija", phonetic: "[fer-ro-vi-yɑ]", french: "Train", tip: "Malte n'a plus de train depuis 1931 !" },
            { maltese: "Rota tad-dwieli", phonetic: "[ro-tɑ tɑd-dwye-li]", french: "Vélo", tip: "Littéralement 'roue des pédales'." },
            { maltese: "Taxi", phonetic: "[tɑk-si]", french: "Taxi", tip: "Les taxis blancs sont officiels." }
        ]
    },
    {
        id: "directions",
        name: "Directions",
        emoji: "🧭",
        desc: "S'orienter",
        words: [
            { maltese: "Fejn?", phonetic: "[feyn]", french: "Où ?", tip: "Question fondamentale !" },
            { maltese: "Hawn", phonetic: "[hɑwn]", french: "Ici", tip: "Pour indiquer un lieu proche." },
            { maltese: "Hemm", phonetic: "[hemm]", french: "Là-bas", tip: "Pour un lieu éloigné." },
            { maltese: "Lemin", phonetic: "[le-min]", french: "À droite", tip: "Direction droite." },
            { maltese: "Xellug", phonetic: "[ʃel-lug]", french: "À gauche", tip: "Direction gauche." },
            { maltese: "Dritta", phonetic: "[drit-tɑ]", french: "Tout droit", tip: "De l'italien 'dritta'." },
            { maltese: "Quddiem", phonetic: "[ʔud-dyem]", french: "Devant", tip: "Position avant." },
            { maltese: "Wara", phonetic: "[wɑ-rɑ]", french: "Derrière", tip: "Position arrière." },
            { maltese: "Fuq", phonetic: "[fuʔ]", french: "Sur/Au-dessus", tip: "Q = coup de glotte." },
            { maltese: "Taħt", phonetic: "[tɑħt]", french: "Sous/En-dessous", tip: "Ħ aspiré." }
        ]
    }
];

// University Categories
const universityCategories = [
    {
        id: "grammar",
        title: "Grammaire",
        icon: "📖",
        color: "grammar",
        desc: "Articles, genre, pronoms, cas",
        lessons: [
            {
                id: "article",
                name: "L'Article Défini",
                emoji: "📝",
                desc: "il-, assimilation solaire",
                steps: [
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>📖 L'article défini 'il-'</h3>
                                <p>En maltais, il existe <strong>un seul article défini : il-</strong> pour le/la/les. Il n'y a <strong>pas d'article indéfini</strong> !</p>
                                <h4>Formation</h4>
                                <p>L'article s'attache directement au nom :</p>
                                <div class="example-box">
                                    <div class="maltese">il-ktieb</div>
                                    <div class="phonetic">[il-ktiːp]</div>
                                    <div class="french">le livre</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">il-mara</div>
                                    <div class="phonetic">[il-mɑ-rɑ]</div>
                                    <div class="french">la femme</div>
                                </div>
                                <div class="tip-box">
                                    <div class="icon">💡</div>
                                    <p>Pas d'article = indéfini : ktieb = un livre</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>☀️ Assimilation Solaire</h3>
                                <p>L'article s'assimile devant les <strong>consonnes solaires</strong> :</p>
                                <p><strong>ċ, d, n, r, s, t, x, ż, z</strong></p>
                                <p>Le 'l' de l'article devient la consonne suivante :</p>
                                <div class="example-box">
                                    <div class="maltese">is-sema</div>
                                    <div class="phonetic">[is-se-mɑ]</div>
                                    <div class="french">le ciel</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">it-tifel</div>
                                    <div class="phonetic">[it-ti-fel]</div>
                                    <div class="french">le garçon</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">ir-raġel</div>
                                    <div class="phonetic">[ir-rɑ-dʒel]</div>
                                    <div class="french">l'homme</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">ix-xemx</div>
                                    <div class="phonetic">[iʃ-ʃemʃ]</div>
                                    <div class="french">le soleil</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>🌙 Consonnes Lunaires</h3>
                                <p>Devant les <strong>consonnes lunaires</strong>, l'article reste <strong>il-</strong> :</p>
                                <p><strong>b, f, ġ, g, għ, h, ħ, j, k, l, m, p, q, v, w</strong></p>
                                <div class="example-box">
                                    <div class="maltese">il-kelb</div>
                                    <div class="phonetic">[il-kelp]</div>
                                    <div class="french">le chien</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">il-ġurnata</div>
                                    <div class="phonetic">[il-dʒur-nɑ-tɑ]</div>
                                    <div class="french">la journée</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">il-ballun</div>
                                    <div class="phonetic">[il-bɑl-lun]</div>
                                    <div class="french">le ballon</div>
                                </div>
                                <div class="important-box">
                                    <h4>⚠️ Devant une voyelle</h4>
                                    <p>L'article devient <strong>l-</strong> : l-omm (la mère), l-ilma (l'eau)</p>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "gender",
                name: "Genre et Nombre",
                emoji: "⚧️",
                desc: "Masculin, féminin, pluriels",
                steps: [
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>👫 Le Genre des Noms</h3>
                                <p>En maltais, les noms sont <strong>masculins</strong> ou <strong>féminins</strong>.</p>
                                <h4>Formation du féminin</h4>
                                <p>On ajoute souvent <strong>-a</strong> au masculin :</p>
                                <div class="example-box">
                                    <div class="maltese">tifel → tifla</div>
                                    <div class="french">garçon → fille</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">għalliem → għalliema</div>
                                    <div class="french">professeur (m) → professeur (f)</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">tabib → tabiba</div>
                                    <div class="french">médecin (m) → médecin (f)</div>
                                </div>
                                <div class="tip-box">
                                    <div class="icon">💡</div>
                                    <p>La plupart des noms en -a sont féminins</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>📊 Le Pluriel</h3>
                                <p>Le maltais a <strong>deux types de pluriel</strong> :</p>
                                <h4>1. Pluriel Externe (suffixes)</h4>
                                <p><strong>Masculin :</strong> -i, -ijiet</p>
                                <div class="example-box">
                                    <div class="maltese">tabib → tobba</div>
                                    <div class="french">médecin → médecins</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">ballun → blalen</div>
                                    <div class="french">ballon → ballons</div>
                                </div>
                                <p><strong>Féminin :</strong> -iet, -at</p>
                                <div class="example-box">
                                    <div class="maltese">tifla → tfajliet</div>
                                    <div class="french">fille → filles</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>🔄 Pluriel Brisé (Interne)</h3>
                                <p>Hérité de l'arabe : changement des <strong>voyelles internes</strong></p>
                                <div class="example-box">
                                    <div class="maltese">kelb → klieb</div>
                                    <div class="french">chien → chiens</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">dar → djar</div>
                                    <div class="french">maison → maisons</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">raġel → irġiel</div>
                                    <div class="french">homme → hommes</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">ktieb → kotba</div>
                                    <div class="french">livre → livres</div>
                                </div>
                                <div class="tip-box">
                                    <div class="icon">💡</div>
                                    <p>Le pluriel brisé doit être mémorisé pour chaque nom !</p>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "pronouns",
                name: "Pronoms Personnels",
                emoji: "👤",
                desc: "Jien, int, hu, hi...",
                steps: [
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>👤 Les Pronoms Sujets</h3>
                                <table class="conj-table">
                                    <tr><th>Maltais</th><th>Phonétique</th><th>Français</th></tr>
                                    <tr><td class="maltese-cell">Jien / Jiena</td><td>[yin] / [yi-nɑ]</td><td>Je / Moi</td></tr>
                                    <tr><td class="maltese-cell">Int / Inti</td><td>[int] / [in-ti]</td><td>Tu / Toi</td></tr>
                                    <tr><td class="maltese-cell">Hu / Huwa</td><td>[u] / [u-wɑ]</td><td>Il / Lui</td></tr>
                                    <tr><td class="maltese-cell">Hi / Hija</td><td>[i] / [i-yɑ]</td><td>Elle</td></tr>
                                    <tr><td class="maltese-cell">Aħna</td><td>[ɑħ-nɑ]</td><td>Nous</td></tr>
                                    <tr><td class="maltese-cell">Intom</td><td>[in-tom]</td><td>Vous</td></tr>
                                    <tr><td class="maltese-cell">Huma</td><td>[u-mɑ]</td><td>Ils / Elles</td></tr>
                                </table>
                                <div class="tip-box">
                                    <div class="icon">💡</div>
                                    <p>Formes courtes (jien, int, hu, hi) = sujet<br>Formes longues (jiena, inti, huwa, hija) = emphase</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>🔗 Suffixes Pronominaux</h3>
                                <p>Les pronoms s'attachent aux verbes, prépositions et noms :</p>
                                <table class="conj-table">
                                    <tr><th>Suffixe</th><th>Sens</th><th>Exemple</th></tr>
                                    <tr><td class="maltese-cell">-i</td><td>me, mon</td><td>dar<strong>i</strong> (ma maison)</td></tr>
                                    <tr><td class="maltese-cell">-ek</td><td>te, ton (m)</td><td>dar<strong>ek</strong> (ta maison)</td></tr>
                                    <tr><td class="maltese-cell">-ik</td><td>te, ton (f)</td><td>dar<strong>ik</strong> (ta maison)</td></tr>
                                    <tr><td class="maltese-cell">-u</td><td>le, son (m)</td><td>dar<strong>u</strong> (sa maison)</td></tr>
                                    <tr><td class="maltese-cell">-ha</td><td>la, son (f)</td><td>dar<strong>ha</strong> (sa maison)</td></tr>
                                    <tr><td class="maltese-cell">-na</td><td>nous, notre</td><td>dar<strong>na</strong> (notre maison)</td></tr>
                                    <tr><td class="maltese-cell">-kom</td><td>vous, votre</td><td>dar<strong>kom</strong> (votre maison)</td></tr>
                                    <tr><td class="maltese-cell">-hom</td><td>les, leur</td><td>dar<strong>hom</strong> (leur maison)</td></tr>
                                </table>
                                <div class="example-box">
                                    <div class="maltese">Rajna + hom = Rajniehom</div>
                                    <div class="french">Nous les avons vus</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ]
    },
    {
        id: "conjugation",
        title: "Conjugaison",
        icon: "✏️",
        color: "conjugation",
        desc: "Verbes, temps, modes",
        lessons: [
            {
                id: "etre",
                name: "Le Verbe 'Être'",
                emoji: "🔵",
                desc: "Kien - conjugaison",
                steps: [
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>🔵 Être au Présent</h3>
                                <p>En maltais, <strong>pas de verbe 'être' au présent</strong> !</p>
                                <p>On utilise : <strong>Pronom + Adjectif/Nom</strong></p>
                                <div class="example-box">
                                    <div class="maltese">Jien kuntent</div>
                                    <div class="phonetic">[yin kun-tent]</div>
                                    <div class="french">Je suis content (m)</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">Jiena kuntenta</div>
                                    <div class="phonetic">[yi-nɑ kun-ten-tɑ]</div>
                                    <div class="french">Je suis contente (f)</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">Hi sabiħa</div>
                                    <div class="phonetic">[i sɑ-bi-ħɑ]</div>
                                    <div class="french">Elle est belle</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">Aħna Maltin</div>
                                    <div class="phonetic">[ɑħ-nɑ mɑl-tin]</div>
                                    <div class="french">Nous sommes maltais</div>
                                </div>
                                <div class="important-box">
                                    <h4>⚠️ Accord</h4>
                                    <p>L'adjectif s'accorde en genre et nombre !</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>⏪ Être au Passé : KIEN</h3>
                                <table class="conj-table">
                                    <tr><th>Pronom</th><th>Maltais</th><th>Français</th></tr>
                                    <tr><td>Jien</td><td class="maltese-cell">kont</td><td>j'étais</td></tr>
                                    <tr><td>Int</td><td class="maltese-cell">kont</td><td>tu étais</td></tr>
                                    <tr><td>Hu</td><td class="maltese-cell">kien</td><td>il était</td></tr>
                                    <tr><td>Hi</td><td class="maltese-cell">kienet</td><td>elle était</td></tr>
                                    <tr><td>Aħna</td><td class="maltese-cell">konna</td><td>nous étions</td></tr>
                                    <tr><td>Intom</td><td class="maltese-cell">kontu</td><td>vous étiez</td></tr>
                                    <tr><td>Huma</td><td class="maltese-cell">kienu</td><td>ils/elles étaient</td></tr>
                                </table>
                                <div class="example-box">
                                    <div class="maltese">Kont fil-belt</div>
                                    <div class="french">J'étais en ville</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>⏩ Être au Futur : KIEN (futur)</h3>
                                <p>On utilise le <strong>préfixe se-</strong> + kien :</p>
                                <table class="conj-table">
                                    <tr><th>Pronom</th><th>Maltais</th><th>Français</th></tr>
                                    <tr><td>Jien</td><td class="maltese-cell">inkun / se nkun</td><td>je serai</td></tr>
                                    <tr><td>Int</td><td class="maltese-cell">tkun / se tkun</td><td>tu seras</td></tr>
                                    <tr><td>Hu</td><td class="maltese-cell">ikun / se jkun</td><td>il sera</td></tr>
                                    <tr><td>Hi</td><td class="maltese-cell">tkun / se tkun</td><td>elle sera</td></tr>
                                    <tr><td>Aħna</td><td class="maltese-cell">inkunu / se nkunu</td><td>nous serons</td></tr>
                                    <tr><td>Intom</td><td class="maltese-cell">tkunu / se tkunu</td><td>vous serez</td></tr>
                                    <tr><td>Huma</td><td class="maltese-cell">ikunu / se jkunu</td><td>ils seront</td></tr>
                                </table>
                                <div class="example-box">
                                    <div class="maltese">Għada se nkun fil-Lvant</div>
                                    <div class="french">Demain je serai en Orient</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "avoir",
                name: "Le Verbe 'Avoir'",
                emoji: "✋",
                desc: "Għand- système possessif",
                steps: [
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>✋ Avoir = Għand- + suffixe</h3>
                                <p>Le verbe 'avoir' utilise la <strong>préposition għand</strong> (chez) + suffixes pronominaux</p>
                                <table class="conj-table">
                                    <tr><th>Maltais</th><th>Phonétique</th><th>Français</th></tr>
                                    <tr><td class="maltese-cell">Għandi</td><td>[ɑn-di]</td><td>J'ai (chez moi)</td></tr>
                                    <tr><td class="maltese-cell">Għandek</td><td>[ɑn-dek]</td><td>Tu as (m)</td></tr>
                                    <tr><td class="maltese-cell">Għandik</td><td>[ɑn-dik]</td><td>Tu as (f)</td></tr>
                                    <tr><td class="maltese-cell">Għandu</td><td>[ɑn-du]</td><td>Il a</td></tr>
                                    <tr><td class="maltese-cell">Għandha</td><td>[ɑn-dɑ]</td><td>Elle a</td></tr>
                                    <tr><td class="maltese-cell">Għandna</td><td>[ɑn-dnɑ]</td><td>Nous avons</td></tr>
                                    <tr><td class="maltese-cell">Għandkom</td><td>[ɑnd-kom]</td><td>Vous avez</td></tr>
                                    <tr><td class="maltese-cell">Għandhom</td><td>[ɑnd-om]</td><td>Ils/elles ont</td></tr>
                                </table>
                                <div class="tip-box">
                                    <div class="icon">💡</div>
                                    <p>'Għand-' signifie littéralement "chez". Għandi = "chez moi" → "J'ai"</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>📝 Exemples d'Utilisation</h3>
                                <div class="example-box">
                                    <div class="maltese">Għandi kelb</div>
                                    <div class="phonetic">[ɑn-di kelp]</div>
                                    <div class="french">J'ai un chien</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">Għandek ħin?</div>
                                    <div class="phonetic">[ɑn-dek ħin]</div>
                                    <div class="french">Tu as le temps ?</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">Għandna problema</div>
                                    <div class="phonetic">[ɑn-dnɑ pro-ble-mɑ]</div>
                                    <div class="french">Nous avons un problème</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">Għandhom tfal ħafna</div>
                                    <div class="phonetic">[ɑnd-om tfɑl ħɑf-nɑ]</div>
                                    <div class="french">Ils ont beaucoup d'enfants</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>⏪ Avoir au Passé</h3>
                                <p>On utilise <strong>kien għand-</strong></p>
                                <table class="conj-table">
                                    <tr><th>Maltais</th><th>Français</th></tr>
                                    <tr><td class="maltese-cell">Kont għandi</td><td>J'avais</td></tr>
                                    <tr><td class="maltese-cell">Kont għandek</td><td>Tu avais</td></tr>
                                    <tr><td class="maltese-cell">Kien għandu</td><td>Il avait</td></tr>
                                    <tr><td class="maltese-cell">Kienet għandha</td><td>Elle avait</td></tr>
                                    <tr><td class="maltese-cell">Konna għandna</td><td>Nous avions</td></tr>
                                    <tr><td class="maltese-cell">Kontu għandkom</td><td>Vous aviez</td></tr>
                                    <tr><td class="maltese-cell">Kienu għandhom</td><td>Ils avaient</td></tr>
                                </table>
                                <div class="example-box">
                                    <div class="maltese">Kont għandi karozza</div>
                                    <div class="french">J'avais une voiture</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "present",
                name: "Présent - Verbes Réguliers",
                emoji: "⏱️",
                desc: "Formation du présent",
                steps: [
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>⏱️ Le Présent en Maltais</h3>
                                <p>Le présent maltais se forme avec des <strong>préfixes</strong> et <strong>suffixes</strong></p>
                                <h4>Exemple : KITEB (écrire) - racine K-T-B</h4>
                                <table class="conj-table">
                                    <tr><th>Pronom</th><th>Maltais</th><th>Français</th></tr>
                                    <tr><td>Jien</td><td class="maltese-cell">nikteb</td><td>j'écris</td></tr>
                                    <tr><td>Int</td><td class="maltese-cell">tikteb</td><td>tu écris</td></tr>
                                    <tr><td>Hu</td><td class="maltese-cell">jikteb</td><td>il écrit</td></tr>
                                    <tr><td>Hi</td><td class="maltese-cell">tikteb</td><td>elle écrit</td></tr>
                                    <tr><td>Aħna</td><td class="maltese-cell">niktbu</td><td>nous écrivons</td></tr>
                                    <tr><td>Intom</td><td class="maltese-cell">tiktbu</td><td>vous écrivez</td></tr>
                                    <tr><td>Huma</td><td class="maltese-cell">jiktbu</td><td>ils écrivent</td></tr>
                                </table>
                                <div class="tip-box">
                                    <div class="icon">💡</div>
                                    <p>Préfixes : n- (je/nous), t- (tu/elle/vous), j- (il/ils)</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>🔄 Autres Verbes Réguliers</h3>
                                <h4>QARA (lire) - racine Q-R-A</h4>
                                <p>naqra, taqra, jaqra, taqra, naqraw, taqraw, jaqraw</p>
                                <h4>FEHEM (comprendre) - racine F-H-M</h4>
                                <p>nifhem, tifhem, jifhem, tifhem, nifhmu, tifhmu, jifhmu</p>
                                <h4>ĦADEM (travailler) - racine Ħ-D-M</h4>
                                <p>naħdem, taħdem, jaħdem, taħdem, naħdmu, taħdmu, jaħdmu</p>
                                <div class="example-box">
                                    <div class="maltese">Jien naqra kull jum</div>
                                    <div class="french">Je lis chaque jour</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">Aħna naħdmu flimkien</div>
                                    <div class="french">Nous travaillons ensemble</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "passe",
                name: "Passé - Verbes Réguliers",
                emoji: "⏮️",
                desc: "Le parfait maltais",
                steps: [
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>⏮️ Le Passé (Parfait)</h3>
                                <p>Le passé maltais se forme avec la <strong>racine + suffixes</strong></p>
                                <h4>KITEB (écrire) - racine K-T-B</h4>
                                <table class="conj-table">
                                    <tr><th>Pronom</th><th>Maltais</th><th>Français</th></tr>
                                    <tr><td>Jien</td><td class="maltese-cell">ktibt</td><td>j'ai écrit</td></tr>
                                    <tr><td>Int</td><td class="maltese-cell">ktibt</td><td>tu as écrit</td></tr>
                                    <tr><td>Hu</td><td class="maltese-cell">kiteb</td><td>il a écrit</td></tr>
                                    <tr><td>Hi</td><td class="maltese-cell">kitbet</td><td>elle a écrit</td></tr>
                                    <tr><td>Aħna</td><td class="maltese-cell">ktibna</td><td>nous avons écrit</td></tr>
                                    <tr><td>Intom</td><td class="maltese-cell">ktibtu</td><td>vous avez écrit</td></tr>
                                    <tr><td>Huma</td><td class="maltese-cell">kitbu</td><td>ils ont écrit</td></tr>
                                </table>
                                <div class="tip-box">
                                    <div class="icon">💡</div>
                                    <p>La 3e personne masculine (hu) = forme de base du verbe</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>📚 Autres Verbes au Passé</h3>
                                <h4>QARA (lire)</h4>
                                <p>qrajt, qrajt, qara, qrat, qrajna, qrajtu, qraw</p>
                                <h4>FEHEM (comprendre)</h4>
                                <p>fhimt, fhimt, fehem, fehmet, fhimna, fhimtu, fehmu</p>
                                <h4>ĦADEM (travailler)</h4>
                                <p>ħdimt, ħdimt, ħadem, ħadmet, ħdimna, ħdimtu, ħadmu</p>
                                <div class="example-box">
                                    <div class="maltese">Qrajt il-ktieb kollu</div>
                                    <div class="french">J'ai lu tout le livre</div>
                                </div>
                                <div class="example-box">
                                    <div class="maltese">Ħadmu sew ilbieraħ</div>
                                    <div class="french">Ils ont bien travaillé hier</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ]
    },
    {
        id: "conversation",
        title: "Conversations",
        icon: "🗣️",
        color: "conversation",
        desc: "Dialogues pratiques réels",
        lessons: [
            {
                id: "rencontre",
                name: "Première Rencontre",
                emoji: "👋",
                desc: "Se présenter et faire connaissance",
                steps: [
                    {
                        type: "dialogue",
                        content: `
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👨</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Bonġu! X'jismek?</div>
                                    <div class="dialogue-phonetic">[bon-dʒu ʃis-mek]</div>
                                    <div class="dialogue-french">Bonjour ! Comment t'appelles-tu ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👩</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Bonġu! Jisimni Maria. U int?</div>
                                    <div class="dialogue-phonetic">[bon-dʒu yi-sim-ni mɑ-ri-ɑ u int]</div>
                                    <div class="dialogue-french">Bonjour ! Je m'appelle Maria. Et toi ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👨</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Jisimni Pawlu. Gost niltaqa' miegħek!</div>
                                    <div class="dialogue-phonetic">[yi-sim-ni pɑw-lu gost nil-tɑ-ʔɑ mye-ek]</div>
                                    <div class="dialogue-french">Je m'appelle Paul. Enchanté de te rencontrer !</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👩</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Ukoll! Mnejn int?</div>
                                    <div class="dialogue-phonetic">[u-koll mneyn int]</div>
                                    <div class="dialogue-french">Moi aussi ! D'où viens-tu ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👨</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Jien mill-Imdina. U inti?</div>
                                    <div class="dialogue-phonetic">[yin mil-im-di-nɑ u in-ti]</div>
                                    <div class="dialogue-french">Je viens de Mdina. Et toi ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👩</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Jien mill-Birgu. Jien kuntenta niltaqa' miegħek!</div>
                                    <div class="dialogue-phonetic">[yin mil-bir-gu yin kun-ten-tɑ nil-tɑ-ʔɑ mye-ek]</div>
                                    <div class="dialogue-french">Je viens de Birgu. Je suis contente de te rencontrer !</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "restaurant",
                name: "Au Restaurant",
                emoji: "🍽️",
                desc: "Commander à manger",
                steps: [
                    {
                        type: "dialogue",
                        content: `
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👨‍🍳</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Merħba! X'tixtiequ?</div>
                                    <div class="dialogue-phonetic">[mer-ħbɑ ʃtiʃ-tye-u]</div>
                                    <div class="dialogue-french">Bienvenue ! Que voulez-vous ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Jiena nixtieq pastizzi tal-irkotta, jekk jogħġbok.</div>
                                    <div class="dialogue-phonetic">[yi-nɑ niʃ-tyeʔ pɑs-tit-si tɑl-ir-kot-tɑ yek yoɑdʒ-bok]</div>
                                    <div class="dialogue-french">Je voudrais des pastizzi à la ricotta, s'il vous plaît.</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👨‍🍳</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Tajjeb. Kemm trid?</div>
                                    <div class="dialogue-phonetic">[tɑy-yep kemm trit]</div>
                                    <div class="dialogue-french">Bien. Combien en veux-tu ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Tnejn, jekk jogħġbok. U kafè wkoll.</div>
                                    <div class="dialogue-phonetic">[tneyn yek yoɑdʒ-bok u kɑ-fɛ w-koll]</div>
                                    <div class="dialogue-french">Deux, s'il vous plaît. Et un café aussi.</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👨‍🍳</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Kafè bl-iskrima jew iswed?</div>
                                    <div class="dialogue-phonetic">[kɑ-fɛ blis-kri-mɑ yew is-wet]</div>
                                    <div class="dialogue-french">Café avec crème ou noir ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Bl-iskrima, grazzi.</div>
                                    <div class="dialogue-phonetic">[blis-kri-mɑ grɑt-tsi]</div>
                                    <div class="dialogue-french">Avec crème, merci.</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "directions",
                name: "Demander son Chemin",
                emoji: "🗺️",
                desc: "Se repérer en ville",
                steps: [
                    {
                        type: "dialogue",
                        content: `
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Skużani, fejn hemm il-posta?</div>
                                    <div class="dialogue-phonetic">[sku-zɑ-ni feyn hemm il-pos-tɑ]</div>
                                    <div class="dialogue-french">Excusez-moi, où est la poste ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👵</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Il-posta? Mur dritta u imbagħad lemin.</div>
                                    <div class="dialogue-phonetic">[il-pos-tɑ mur drit-tɑ u im-bɑɑt lemin]</div>
                                    <div class="dialogue-french">La poste ? Va tout droit puis à droite.</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">'il bogħod hi?</div>
                                    <div class="dialogue-phonetic">[il bo-ot i]</div>
                                    <div class="dialogue-french">C'est loin ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👵</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Le, qrib ħafna. Ħames minuti mixi.</div>
                                    <div class="dialogue-phonetic">[le ʔrip ħɑf-nɑ ħɑ-mes mi-nu-ti mik-si]</div>
                                    <div class="dialogue-french">Non, très près. Cinq minutes à pied.</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Grazzi ħafna!</div>
                                    <div class="dialogue-phonetic">[grɑt-tsi ħɑf-nɑ]</div>
                                    <div class="dialogue-french">Merci beaucoup !</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👵</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Xi mkien! Saħħa!</div>
                                    <div class="dialogue-phonetic">[ʃi mkyen sɑħ-ħɑ]</div>
                                    <div class="dialogue-french">De rien ! Au revoir !</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "shopping",
                name: "Au Marché",
                emoji: "🛒",
                desc: "Acheter des produits",
                steps: [
                    {
                        type: "dialogue",
                        content: `
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">🧑‍🌾</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Bonġu! X'tixtieq?</div>
                                    <div class="dialogue-phonetic">[bon-dʒu ʃtiʃ-tyeʔ]</div>
                                    <div class="dialogue-french">Bonjour ! Que veux-tu ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Bonġu! Nixtieq tuffieħ u banana.</div>
                                    <div class="dialogue-phonetic">[bon-dʒu niʃ-tyeʔ tuf-fyeħ u bɑ-nɑ-nɑ]</div>
                                    <div class="dialogue-french">Bonjour ! Je voudrais des pommes et des bananes.</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">🧑‍🌾</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Kemm trid?</div>
                                    <div class="dialogue-phonetic">[kemm trit]</div>
                                    <div class="dialogue-french">Combien en veux-tu ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Kilu tuffieħ u nofs kilu banana.</div>
                                    <div class="dialogue-phonetic">[ki-lu tuf-fyeħ u nofs ki-lu bɑ-nɑ-nɑ]</div>
                                    <div class="dialogue-french">Un kilo de pommes et un demi-kilo de bananes.</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">🧑‍🌾</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Hawn! Dan hu kollox?</div>
                                    <div class="dialogue-phonetic">[hɑwn dɑn u kol-loʃ]</div>
                                    <div class="dialogue-french">Voilà ! C'est tout ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-b">
                                <div class="speaker-icon">👤</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Iva, grazzi. Kemm jiswa?</div>
                                    <div class="dialogue-phonetic">[i-vɑ grɑt-tsi kemm yis-wɑ]</div>
                                    <div class="dialogue-french">Oui, merci. Combien ça coûte ?</div>
                                </div>
                            </div>
                            <div class="dialogue-line speaker-a">
                                <div class="speaker-icon">🧑‍🌾</div>
                                <div class="dialogue-content">
                                    <div class="dialogue-maltese">Tliet ewro u erbgħin ċenteżmu.</div>
                                    <div class="dialogue-phonetic">[tlyet ew-ro u er-bɪn tʃen-te-ʒmu]</div>
                                    <div class="dialogue-french">Trois euros et quarante centimes.</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ]
    },
    {
        id: "phonetic",
        title: "Phonétique",
        icon: "🔤",
        color: "phonetic",
        desc: "Prononciation et alphabet IPA",
        lessons: [
            {
                id: "alphabet",
                name: "L'Alphabet Maltais",
                emoji: "🔤",
                desc: "30 lettres uniques",
                steps: [
                    {
                        type: "phonetic-list",
                        content: [
                            { letter: "Ċ ċ", ipa: "[tʃ]", desc: "comme 'tch' dans 'tchèque'", examples: ["ċavetta (clé)", "ċikkulata (chocolat)"] },
                            { letter: "Ġ ġ", ipa: "[dʒ]", desc: "comme 'dj' ou 'j' dans 'joue'", examples: ["ġelat (glace)", "Malteġi (maltais)"] },
                            { letter: "Għ għ", ipa: "[∅/ː]", desc: "allonge la voyelle précédente", examples: ["għajn (œil)", "għasfur (oiseau)"] },
                            { letter: "Ħ ħ", ipa: "[ħ]", desc: "H fortement expiré depuis la gorge", examples: ["ħobż (pain)", "ħut (poisson)"] },
                            { letter: "H h", ipa: "[h]", desc: "H aspiré doux (comme anglais)", examples: ["hawn (ici)", "huma (ils)"] },
                            { letter: "Q q", ipa: "[ʔ]", desc: "coup de glotte (arrêt glottal)", examples: ["qalb (cœur)", "sqaq (allée)"] },
                            { letter: "X x", ipa: "[ʃ]", desc: "comme 'ch' en français", examples: ["xemx (soleil)", "xita (pluie)"] },
                            { letter: "Ż ż", ipa: "[z]", desc: "Z sonore comme dans 'zèbre'", examples: ["żgur (sûr)", "żiemel (cheval)"] },
                            { letter: "Z z", ipa: "[ts]", desc: "comme 'ts' dans 'tsar'", examples: ["zokkor (sucre)", "zalza (sauce)"] }
                        ]
                    }
                ]
            },
            {
                id: "voyelles",
                name: "Les Voyelles",
                emoji: "🎵",
                desc: "Prononciation des voyelles",
                steps: [
                    {
                        type: "phonetic-list",
                        content: [
                            { letter: "A a", ipa: "[ɑ]", desc: "A ouvert comme 'pâte'", examples: ["dar (maison)", "nar (feu)"] },
                            { letter: "E e", ipa: "[ɛ/e]", desc: "E ouvert ou fermé", examples: ["kelb (chien)", "kelma (mot)"] },
                            { letter: "I i", ipa: "[i/ɪ]", desc: "I fermé ou court", examples: ["ilma (eau)", "bin (fils)"] },
                            { letter: "O o", ipa: "[ɔ/o]", desc: "O ouvert ou fermé", examples: ["omm (mère)", "kor (cœur chanté)"] },
                            { letter: "U u", ipa: "[u]", desc: "OU comme dans 'fou'", examples: ["ħut (poisson)", "kull (chaque)"] },
                            { letter: "IE ie", ipa: "[iː]", desc: "I long", examples: ["miel (miel)", "ried (voulait)"] },
                            { letter: "EJ ej", ipa: "[ɛj/aj]", desc: "diphtongue é-i ou a-i", examples: ["għajnejn (yeux)", "mejtin (morts)"] },
                            { letter: "AJ aj", ipa: "[aj]", desc: "diphtongue a-ï", examples: ["tajjeb (bon)", "bajd (œufs)"] }
                        ]
                    }
                ]
            },
            {
                id: "consonnes",
                name: "Consonnes Spéciales",
                emoji: "🗣️",
                desc: "Sons difficiles",
                steps: [
                    {
                        type: "theory",
                        content: `
                            <div class="theory-box">
                                <h3>🗣️ Les Consonnes Emphatiques</h3>
                                <p>Héritées de l'arabe, ces consonnes se prononcent avec la langue vers l'arrière :</p>
                                <div class="phonetic-card">
                                    <div class="phonetic-letter">Ħ</div>
                                    <div class="phonetic-ipa">[ħ]</div>
                                    <div class="phonetic-desc">H pharyngal : expiration forte depuis la gorge</div>
                                    <div class="phonetic-examples">
                                        <div class="phonetic-example">ħobż</div>
                                        <div class="phonetic-example">ħajja</div>
                                        <div class="phonetic-example">ħelu</div>
                                    </div>
                                </div>
                                <div class="phonetic-card">
                                    <div class="phonetic-letter">Q</div>
                                    <div class="phonetic-ipa">[ʔ]</div>
                                    <div class="phonetic-desc">Coup de glotte : blocage puis libération de l'air</div>
                                    <div class="phonetic-examples">
                                        <div class="phonetic-example">qalb</div>
                                        <div class="phonetic-example">qattus</div>
                                        <div class="phonetic-example">triq</div>
                                    </div>
                                </div>
                                <div class="phonetic-card">
                                    <div class="phonetic-letter">Għ</div>
                                    <div class="phonetic-ipa">[∅] ou [ː]</div>
                                    <div class="phonetic-desc">Silencieux, allonge la voyelle qui suit/précède</div>
                                    <div class="phonetic-examples">
                                        <div class="phonetic-example">għajn</div>
                                        <div class="phonetic-example">għasfur</div>
                                        <div class="phonetic-example">bagħal</div>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ]
    },
    {
        id: "reading",
        title: "Lecture",
        icon: "📄",
        color: "reading",
        desc: "Textes avec compréhension",
        lessons: [
            {
                id: "family-text",
                name: "Ma Famille",
                emoji: "👨‍👩‍👧‍👦",
                desc: "Texte descriptif simple",
                steps: [
                    {
                        type: "reading",
                        title: "Il-Familja Tiegħi",
                        text: `
                            <p>Jien jisimni Marija. Għandi familja kbira u sabiħa. <strong>L-omm tiegħi</strong> jisimha Anna u <strong>il-missier tiegħi</strong> jismu Ġużepp.</p>
                            <p>Għandi <strong>tlett aħwa</strong> u <strong>oħt waħda</strong>. L-aħwa tiegħi jisimhom Pawlu, Karm u Pietru. L-oħt tiegħi jisimha Rosa.</p>
                            <p>Il-<strong>nannu</strong> u n-<strong>nanna</strong> tiegħi jgħixu fil-Birgu. Huma anzjani iżda fil-forma.</p>
                            <p>Aħna kollha noqogħdu fi Birkirkara. Il-familja tiegħi hi kbira u kuntenta!</p>
                        `,
                        translation: `
                            <p>Je m'appelle Maria. J'ai une grande et belle famille. <strong>Ma mère</strong> s'appelle Anna et <strong>mon père</strong> s'appelle Joseph.</p>
                            <p>J'ai <strong>trois frères</strong> et <strong>une sœur</strong>. Mes frères s'appellent Paul, Carmel et Pierre. Ma sœur s'appelle Rose.</p>
                            <p>Mon <strong>grand-père</strong> et ma <strong>grand-mère</strong> vivent à Birgu. Ils sont âgés mais en forme.</p>
                            <p>Nous habitons tous à Birkirkara. Ma famille est grande et heureuse !</p>
                        `
                    }
                ]
            },
            {
                id: "malta-text",
                name: "Malte, mon Pays",
                emoji: "🏝️",
                desc: "Texte culturel",
                steps: [
                    {
                        type: "reading",
                        title: "Malta, il-Pajjiż Tiegħi",
                        text: `
                            <p>Malta hi gżira żgħira fil-Mediterran. Il-belt kapitali hi <strong>il-Belt Valletta</strong>. Malta għandha <strong>storja twila</strong> u <strong>kultura rikka</strong>.</p>
                            <p>Il-Maltin jitkellmu <strong>żewġ lingwi</strong>: il-Malti u l-Ingliż. Il-Malti hu lingwa Semitika li ġejja mill-Għarbi imma fih ħafna kelmiet Taljani.</p>
                            <p>Malta hi famużi għall-<strong>knejjes</strong> tagħha, il-<strong>baħar iżraq</strong>, u l-<strong>ikel tajjeb</strong>. Il-<strong>pastizzi</strong> u l-<strong>fenek</strong> huma ħwejjeġ tipici Maltin.</p>
                            <p>Matul is-sajf, Malta tkun sħuna ħafna u hemm turisti minn madwar id-dinja. Il-Maltin huma nies ospitali u ferħana!</p>
                        `,
                        translation: `
                            <p>Malte est une petite île dans la Méditerranée. La capitale est <strong>La Valette</strong>. Malte a une <strong>longue histoire</strong> et une <strong>culture riche</strong>.</p>
                            <p>Les Maltais parlent <strong>deux langues</strong> : le maltais et l'anglais. Le maltais est une langue sémitique qui vient de l'arabe mais contient beaucoup de mots italiens.</p>
                            <p>Malte est célèbre pour ses <strong>églises</strong>, sa <strong>mer bleue</strong>, et sa <strong>bonne cuisine</strong>. Les <strong>pastizzi</strong> et le <strong>lapin</strong> sont des spécialités maltaises typiques.</p>
                            <p>Pendant l'été, Malte est très chaude et il y a des touristes du monde entier. Les Maltais sont des gens hospitaliers et joyeux !</p>
                        `
                    }
                ]
            }
        ]
    },
    {
        id: "translation",
        title: "Traduction",
        icon: "🔄",
        color: "translation",
        desc: "Exercices FR ↔ MT",
        lessons: [
            {
                id: "fr-mt-basic",
                name: "Français → Maltais (Base)",
                emoji: "➡️",
                desc: "Phrases simples",
                steps: [
                    {
                        type: "translation",
                        exercises: [
                            { french: "Bonjour, comment vas-tu ?", maltese: "Bonġu, kif int?", tip: "Kif = comment" },
                            { french: "Je m'appelle Marie.", maltese: "Jisimni Marija.", tip: "Jisimni = je m'appelle" },
                            { french: "J'ai un chien.", maltese: "Għandi kelb.", tip: "Għandi = j'ai" },
                            { french: "Où est la maison ?", maltese: "Fejn hi d-dar?", tip: "Fejn = où" },
                            { french: "Merci beaucoup !", maltese: "Grazzi ħafna!", tip: "Ħafna = beaucoup" }
                        ]
                    }
                ]
            },
            {
                id: "mt-fr-basic",
                name: "Maltais → Français (Base)",
                emoji: "⬅️",
                desc: "Comprendre le maltais",
                steps: [
                    {
                        type: "translation",
                        exercises: [
                            { maltese: "Jiena mill-Franza.", french: "Je viens de France.", tip: "Minn = de/depuis" },
                            { maltese: "Għandi ħu u oħt.", french: "J'ai un frère et une sœur.", tip: "Ħu = frère, oħt = sœur" },
                            { maltese: "Il-ktieb hu fuq il-mejda.", french: "Le livre est sur la table.", tip: "Fuq = sur" },
                            { maltese: "Nixtieq kafè, jekk jogħġbok.", french: "Je voudrais un café, s'il vous plaît.", tip: "Nixtieq = je voudrais" },
                            { maltese: "Malta hi gżira żgħira.", french: "Malte est une petite île.", tip: "Gżira = île, żgħir = petit" }
                        ]
                    }
                ]
            }
        ]
    }
];
