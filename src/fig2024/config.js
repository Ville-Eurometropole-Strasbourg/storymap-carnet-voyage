var config = {
    style: 'style.json',
    theme: 'light',
    alignment: 'left',
    //toptitle: 'Points Unknown | Tutorial 10 | Mapbox Storytelling',
    title: 'Préserver les ressources et les paysages',
    //byline: 'By',
    description: 'Le 5 octobre 2019, l’Eurométropole de Strasbourg, la Communauté de communes de la Vallée de la Bruche et la Communauté d’agglomération de Saint-Dié-des-Vosges signaient un Contrat de réciprocité liant ces trois territoires. <br/>Son objectif : construire des accords stratégiques entre territoires urbains et montagnards et mettre en commun leurs atouts et ressources propres. Parmi les projets phares portés par ce Contrat figure une meilleure visibilité et accessibilité du Festival de géographie de Saint-Dié-des-Vosges (FIG) pour les habitants de l’Eurométropole. Dans cette optique, les visiteurs du FIG bénéficient désormais d’un billet de train retour à 1€ pour toutes les gares de la ligne jusqu’à Strasbourg. <br/>Pour fêter les 5 ans du Contrat de réciprocité et poursuivre les discussions déjà engagées, les conseillers municipaux des trois territoires ont été invités à emprunter cette ligne à l’occasion de l’édition 2024 du FIG. Pour accompagner leur trajet, un carnet de voyage (<a href="https://sig.strasbourg.eu/datastrasbourg/fig2024/maquette-Carnet-4-volets.pdf">lien vers la version numérique du carnet papier</a>) soulignant les ressources et paysages qui marquent ce trajet leur a été distribué. Cette version web du carnet de voyage permet d’en apprendre plus sur ces divers éléments.',
    footer: 'Travail réalisé dans le cadre du Festival International de Géographie 2024 à Saint-Dié-des-Vosges<br/><div class="ticket-button ticket"><span class="circle"></span><a>Ticket retour 1€</a></div>',
    footerAttribution: '<a href="https://sig.strasbourg.eu/" target="_blank">Service Géomatique et Connaissance du Territoire - Eurométropole de Strasbourg</a> | <a href="https://www.strasbourg.eu/mentions-legales" target="_blank">Mentions légales</a>',
    logos: [
        {
            src: 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/ems-logo.jpg',
            href: 'https://www.strasbourg.eu/',
            alt: 'Logo de l’Eurométropole de Strasbourg',
            size: {
                small: 30,   // Logo height for small screens
                medium: 50,  // Logo height for medium screens
                large: 70    // Logo height for large screens
            }
        },
        {
            src: 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/logo-comcom-vallee-de-la-bruche.jpg',
            href: 'https://cc.valleedelabruche.fr/',
            alt: 'Logo de la Communauté de communes de la Bruche',
            size: {
                small: 100,
                medium: 130,
                large: 150
            }
        },
        {
            src: 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/logo-agglo-saint-die-des-vosges.svg',
            href: 'https://www.ca-saintdie.fr/',
            alt: 'Logo de la Communauté d’Agglomération de Saint-Dié-des-Vosges',
            size: {
                small: 100,
                medium: 130,
                large: 150
            }
        },
        {
            src: 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/logo-region-grand-est.jpg',
            href: 'https://www.grandest.fr/',
            alt: 'Logo de la région Grand Est',
            size: {
                small: 30,
                medium: 50,
                large: 70
            }
        },
        {
            src: 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/logo-sncf.png',
            href: 'https://www.sncf-reseau.com/',
            alt: 'Logo de la société nationale des chemins de fer français',
            size: {
                small: 30,
                medium: 50,
                large: 70
            }
        },
        {
            src: 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/logo-fig.png',
            href: 'https://fig.saint-die-des-vosges.fr/',
            alt: 'Logo du Festival international de géographie',
            size: {
                small: 100,
                medium: 100,
                large: 100
            }
        },
        {
            src: 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/adeus-logo.svg',
            href: 'https://www.adeus.org/',
            alt: 'Logo de l’ADEUS',
            size: {
                small: 30,
                medium: 50,
                large: 70
            }
        }
    ],
    layers: [
        {
            layer: '01_Fischer',
            opacity: 0
        },
        {
            layer: '04_Entzheim',
            opacity: 0
        },
        {
            layer: '05_Forets',
            opacity: 0
        },
        {
            layer: '08_Locomotive',
            opacity: 0
        },
        {
            layer: '07_PVD',
            opacity: 0
        },
        {
            layer: '13_Eoliennes',
            opacity: 0
        },
        {
            layer: '18_PVD',
            opacity: 0
        },
        {
            layer: '19_Gare',
            opacity: 0
        }
    ],
    chapters: [
        {
            id: '0',
            title: 'Les 5 ans du contrat de réciprocité',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/00_Carte.webp': { "alt": "Vision de l’ensemble du trajet", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: '<p>Le contrat de réciprocité signé entre l’Eurométropole de Strasbourg, la Communauté d’agglomération de Saint-Dié-des-Vosges et la Communauté de communes de la Vallée de la Bruche a pour objectif de créer de nouvelles solidarités entre territoires urbains et ruraux. Sans structure institutionnelle supplémentaire, il s’agit de créer un réseau de collectivités au service de l’équilibre et de la cohésion des territoires en se mobilisant autour de projets fédérateurs communs. Le contrat s’articule autour de deux biens communs : le massif des Vosges et la voie ferrée Strasbourg/Saint-Dié-des-Vosges. Les projets phares portent sur deux grands sujets : la promotion d’un tourisme de proximité en valorisant la voie de chemin de fer (tarification spéciale lors de manifestations, vélo-tourisme depuis les gares, …), et la valorisation et le partage de bonnes expériences autour de certaines filières économiques (agriculture, filière bois, transformation des friches…).<br/>\
            </p><details><summary><i>En apprendre plus sur quelques politiques publiques phares</i></summary>\
            <h4>Eurométropole de Strasbourg - La révolution des mobilités</h4>\
            <p>Dans un objectif d’amélioration de la qualité de l’air et dans un contexte de changement climatique, l’Eurométropole de Strasbourg s’est engagée dans une révolution des mobilités. Avec le lancement du Réseau Express Métropolitain Européen (REME) au côté de la Région Grand Est, en 2021, elle est une intercommunalité pionnière en la matière, en renforçant le cadencement des TER et en aménageant des pôles d’échanges multimodaux. Cette offre est complétée par des lignes de bus à haut niveau de service, tandis que deux extensions du réseau de tramway sont prévues vers Wolfisheim et vers Bischheim et Schiltigheim. Le réseau Citiz et la démarche Optimix promeuvent de leur côté l’autopartage et le covoiturage. Le Plan vélo, enfin, prévoit d’ajouter au réseau existant 120 kilomètres de pistes cyclables d’ici 2026.\
            </p><h4>Eurométropole de Strasbourg - Transition écologique</h4>\
            <p>En réponse aux enjeux climatiques, l’Eurométropole de Strasbourg s’est dotée d’un Plan climat à l’horizon 2030. Parmi les actions phares, la mise en place de la Zone à faible émission (ZFE) vise à améliorer la qualité de l’air en interdisant la circulation des véhicules les plus polluants.\
            Le Plan canopée, qui propose de planter de nouveaux arbres le long des voies de circulation dans la ville de Strasbourg, doit quant à lui être étendu à l’ensemble des communes de l’Eurométropole.\
            Le Plan climat vise également une couverture de 40 % de la consommation énergétique par des énergies renouvelables et de récupération, ainsi que la réduction des consommations énergétiques de 40 %, menant la collectivité à adopter des mesures de sobriété et des travaux de rénovation sur ses propres bâtiments.\
            </p><h4>Communauté d’agglomération de Saint-Dié-des-Vosges - Filière bois</h4>\
            <p>Le territoire de la Déodatie est couvert à 70 % de forêt. Afin de préserver les paysages forestiers des effets du réchauffement climatique tout en soutenant la filière forêt-bois, la Communauté d’agglomération (CA) de Saint-Dié-des-Vosges et les deux autres intercommunalités du PETR du Pays de la Déodatie se sont dotées en 2020 d’un Contrat de Transition Écologique, qui vise la résilience des peuplements forestiers et la réalisation de formations pour les acteurs forestiers. La CA, qui a reçu le label « territoire d’industrie », soutient également des acteurs innovants de la filière, à l’image du Toit Vosgien qui propose des logements sociaux durables utilisant le bois de structure et une isolation bio-sourcée. Elle accompagne également la construction de la nouvelle école d’Étival-Clairefontaine, construite en bois communal.\
            </p><h4>Communauté d’agglomération de Saint-Dié-des-Vosges - Festival international de géographie</h4>\
            <p>Depuis 1990, Saint-Dié-des-Vosges accueille le Festival international de géographie (FIG), qui réunit universitaires, chercheurs, artistes et auteurs. Depuis 2019, afin d’ouvrir le festival aux jeunes et de leur donner le goût de la géographie, le « train des lycéens » propose à plusieurs lycées de la région Grand Est de se rendre au FIG, ils étaient plus de 500 en 2023 ! Dans ce cadre, des rencontres fléchées et des balades à travers la ville sont organisées pour faire découvrir à ce public toutes les propositions qu’offre le Festival. Depuis 2022, les personnes qui se rendent en train au FIG bénéficient également d’une offre tarifaire avantageuse, avec un billet de train retour à 1€ pour toutes les gares en direction de Strasbourg.\
            </p><h4>Communauté de communes de la Vallée de la Bruche - Stratégie touristique et mobilité</h4>\
            <p>Forte de paysages naturels et historiques remarquables et d’une voie ferrée qui la traverse, la Vallée de la Bruche a initié dès les années 1980 une politique de développement touristique, qui a notamment mené à la création des Sentiers plaisir en 1989 et d’un Office du tourisme en 2003. En 2018, une nouvelle stratégie touristique a été adoptée, portant sur plusieurs axes. Sur le plan de la mobilité, elle propose une « vallée sans voiture », grâce à la mise en valeur de la voie cyclable et le transport ferroviaire. Cette stratégie vise également à valoriser les paysages de la Vallée sur le plan touristique, notamment en développant des services autour de la randonnée. Pour un meilleur accueil des touristes, elle propose également un appui au développement de nouvelles offres d’hébergement, de loisirs et de services.\
            </p><h4>Communauté de communes de la Vallée de la Bruche - Démarche paysagère et biodiversité</h4>\
            <p>Depuis le début des années 1990, la Communauté de communes de la Vallée de la Bruche s’est dotée d’un Plan de paysage. Au cours des 30 dernières années, celui-ci a permis de mettre en place diverses politiques portant sur la réouverture des fonds de vallée, la création d’associations foncières pastorales, les réseaux de trame verte et bleue, la préservation de la biodiversité des prairies, la valorisation de la filière bois ou encore des démarches de sensibilisation pour le grand public et la réhabilitation de friches… En reconnaissance de cette politique volontariste et de ses effets tangibles sur le territoire, la vallée de la Bruche a été désignée « Capitale Française de la Biodiversité 2022 – Paysages et Biodiversité », une distinction décernée par l’Office Français de la Biodiversité.\
            </p></details>',
            location: {
                center: [7.746, 48.4389],
                zoom: 9,
                pitch: 31,
                bearing: 180
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1',
            title: 'Revalorisation des friches industrielles',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/01_Fischer.webp': { "alt": "L’école Simone Veil à Schiltigheim, un exemple de reconversion d’une friche brassicole", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Avec les mutations économiques de la fin du 20<sup>ème</sup> siècle, de nombreux sites industriels ont vu leur activité disparaître. Afin de valoriser ce patrimoine bâti, l’Eurométropole de Strasbourg et ses communes ont initié plusieurs projets visant à dépolluer et réaffecter ces friches. À titre d’exemple, à Reichstett, l’ancienne raffinerie a laissé place à l’EcoParc Rhénan, un parc d’activités de 85 hectares pour les secteurs de l’industrie, de l’artisanat et du service. À Strasbourg, le projet urbain Deux-Rives / Zwei-Ufer vise la revalorisation de 250 hectares de friches portuaires en un véritable quartier, mêlant logements, commerces, lieux de travail et espaces verts. À Schiltigheim, l’ancienne brasserie Fischer fait l’objet d’une requalification en secteur à vocation mixte, ayant pour objectif d’augmenter l’offre résidentielle au sud de la ville, de mettre en valeur le patrimoine industriel brassicole, et de proposer des activités économiques et de loisirs créatrices d’emplois.<br/><br/><a href="https://odacit.3d.strasbourg.eu/?X=4195371.408220918&Y=561714.1055016854&Z=4757417.723141092&heading=6.121067438177307&pitch=-0.8499758872489904&roll=6.283133100505123">Visualiser en 3D sur OD@CiT</a>',
            location: {
                center: [7.742632, 48.602402],
                zoom: 16,
                pitch: 50,
                bearing: 20
            },
            onChapterEnter: [
                {
                    layer: '01_Fischer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '01_Fischer',
                    opacity: 0
                }
            ]
        },
        {
            id: '2',
            title: 'Des pôles d’innovation technologique',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/02_Nextmed.webp': { "alt": "Nextmed, un pôle d’innovation en santé", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'À la fin des années 1980, la Communauté urbaine de Strasbourg consacre au sud de l’agglomération une cinquantaine d’hectares à la recherche et à l’enseignement supérieur scientifique et aux activités de haute technologie. Au fil du temps, le Parc d’innovation d’Illkirch s’agrandit et accroit son rayonnement, accueillant aujourd’hui plus d’une centaine d’entreprises internationales sur près de 170 hectares. Avec l’inauguration du Nouvel Hôpital Civil en 2009, les efforts de la Ville et de l’Eurométropole de Strasbourg  se focalisent sur le site en cœur de métropole de l’ancien hôpital civil. Spécialisé dans le domaine de l’innovation en santé, nextmed accueille aujourd’hui plus d’une cinquantaine de sociétés sur une trentaine d’hectares.<br/><br/><a href="https://odacit.3d.strasbourg.eu/?X=4191567.2139321477&Y=569273.9955560283&Z=4759896.299042186&heading=0.45182349177771464&pitch=-0.7420127314684342&roll=0.00008985779272219219">Visualiser en 3D sur OD@CiT</a>',
            location: {
                center: [7.743709, 48.576721],
                zoom: 15,
                pitch: 49,
                bearing: 36
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            title: 'La zone d’activité agricole d’Holtzheim : vers une agriculture biologique de proximité',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/03_Holtzheim.webp': { "alt": "03_Holtzheim", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Le projet alimentaire territorial de la Ville et Eurométropole de Strasbourg, a pour objectif de développer une agriculture durable et une alimentation de qualité, accessible à tous. Parmi les actions en cours, les Zones d’Activité Agricole concrétisent une transition agricole et alimentaire du territoire, en ciblant quatre zones prioritaires : à la Robertsau, dans un secteur situé dans les communes de Souffelweyersheim, Hoenheim et Bischheim, à Illkirch-Graffenstaden, et dans le parc d’activité nord aéroport de Holtzheim. Ce dernier a récemment accueilli un premier projet de maraîchage biologique de 5 hectares, qui s’accompagne de la création d’emplois en insertion.<br/><br/><a href="https://odacit.3d.strasbourg.eu/?X=4194171.6068522343&Y=563395.9164172388&Z=4758276.67914898&heading=6.121067408178671&pitch=-0.8499760483855918&roll=6.28313314043598">Visualiser en 3D sur OD@CiT</a>',
            location: {
                center: [7.641234, 48.553143],
                zoom: 15,
                pitch: 40,
                bearing: -7
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            title: 'L’aéroport d’Entzheim, un pôle d’échange multimodal',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/04_Entzheim.webp': { "alt": "04_Entzheim", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Dans son objectif de « révolution des mobilités », l’Eurométropole de Strasbourg a développé plusieurs projets visant à favoriser les modes de déplacement doux et collectifs afin de lutter contre le dérèglement climatique. Parmi eux, le Réseau express métropolitain (REME), lancé en 2022, a pour objectif de transformer progressivement les 13 gares du territoire en pôles d’échanges multimodaux et à améliorer la fréquence et la cadence de leur desserte en TER. Dans ce contexte, le pôle multimodal de l’aéroport d’Entzheim a mis à disposition des usagers du TER deux de ses parkings, élargissant ainsi l’offre de stationnement multimodal offerte depuis 2008 par la gare d’Entzheim-aéroport, qui dispose également de deux parcs à vélo sécurisés et de multiples connexions avec le réseau de bus CTS.<br/><br/><a href="https://odacit.3d.strasbourg.eu/?X=4195371.408220918&Y=561714.1055016854&Z=4757417.723141092&heading=6.121067438177307&pitch=-0.8499758872489904&roll=6.283133100505123">Visualiser en 3D sur OD@CiT</a>',
            location: {
                center: [7.61872, 48.5427],
                zoom: 15,
                pitch: 44,
                bearing: -17.5
            },
            onChapterEnter: [
                {
                    layer: '04_Entzheim',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '04_Entzheim',
                    opacity: 0
                }
            ]
        },
        {
            id: '5',
            title: 'Les paysages forestiers, un atout économique pour la filière bois',
            images: {
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets.webp': { "alt": "05_Forets", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets/_8PB2636.webp': { "alt": "05_Forets", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets/_8PB2694.webp': { "alt": "05_Forets", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets/_8PB5921.webp': { "alt": "05_Forets", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets/_8PB6134.webp': { "alt": "05_Forets", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets/DSC04522 2.webp': { "alt": "05_Forets", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets/Noll_chaume_01072013 (12).webp': { "alt": "05_Forets", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets/Pano 5.webp': { "alt": "05_Forets", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/05_Forets/w17a_cllc.webp': { "alt": "05_Forets", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' }
            },
            description: 'Dans la Vallée de la Bruche, la forêt occupe près de 80% du territoire et bénéficie d’une gestion très majoritairement publique. Avec la remise en cause de la monoculture forestière et la prise en compte de son importance face aux enjeux climatiques, la forêt a repris une place de taille dans les politiques engagées par la Communauté de communes. En 2016, elle a mené une vaste réflexion sur la forêt et le bois avec l’ensemble des acteurs concernés. Celle-ci a mené à l’adoption, en 2021, d’une Stratégie filière forêt-bois, qui propose un programme d’actions portant sur une gestion durable de la forêt, la mise en place de politiques d’utilisation du matériau bois dans la maîtrise d’ouvrage publique, ainsi que la sensibilisation et l’accueil du public (Evènement de Mai 2022- Le printemps de la Forêt).',
            location: {
                center: [7.331572, 48.52629],
                zoom: 16,
                pitch: 54,
                bearing: 41
            },
            onChapterEnter: [
                {
                    layer: '05_Forets',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '05_Forets',
                    opacity: 0
                }
            ]
        },
        {
            id: '6',
            title: 'Le site Scheidecker, un projet de réhabilitation d’une friche industrielle',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/06_Scheidecker.webp': { "alt": "06_Scheidecker", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Village précurseur de l’industrie textile dans la Vallée de la Bruche, Lutzelhouse abrite au milieu du XIXe siècle une filature de coton et de laine peignée, un moulin et une scierie mécanique. A proximité de l’usine, la famille Scheidecker fait ériger un château. En 2022, dans une optique de mise en valeur de ses friches industrielles, l’ancien site Scheidecker est acquis par l’EPF Alsace pour le compte de la Communauté de communes de la Vallée de la Bruche. Depuis, une réflexion est menée sur l’avenir de ce site avec l’ensemble des partenaires de la collectivité, afin de favoriser l’implantation de projets mixtes et innovants sur cet ancien site industriel.',
            location: {
                center: [7.2864385, 48.515119],
                zoom: 16,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            title: 'La médiathèque de Wisches, la réhabilitation d’une ancienne gare',
            images: {
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/08_Locomotive.webp': { "alt": "08_Locomotive", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/08_Locomotive/DSC_0772a.webp': { "alt": "08_Locomotive_1", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/08_Locomotive/DSCN4217a.webp': { "alt": "08_Locomotive_2", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/08_Locomotive/DSCN4770a.webp': { "alt": "08_Locomotive_3", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/08_Locomotive/FSCN4343a.webp': { "alt": "08_Locomotive_4", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' }
            },
            description: 'La politique paysagère menée par la Communauté de communes de la Vallée de la Bruche a souligné l’importance de la mise en valeur des friches dans les villages. Elles constituent, en effet, une ressource foncière non négligeable pour l’implantation de nouvelles activités, tout en limitant l’étalement urbain ou la disparition des espaces agricoles. Dans cette optique, en 2008, la commune de Wisches rachète à la SNCF l’ancien bâtiment voyageur de la gare, inutilisé depuis les années 1980. Elle inaugure six années plus tard « La Locomotive », un centre culturel composé d’une salle polyvalente accueillant expositions, réunions et activités associatives, ainsi que de logements et d’une nouvelle médiathèque.',
            location: {
                center: [7.270460, 48.508111],
                zoom: 16,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '08_Locomotive',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '08_Locomotive',
                    opacity: 0
                }
            ]
        },
        {
            id: '7',
            title: 'Petites villes de demain',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/07_PVD.webp': { "alt": "07_PVD", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Depuis 2021, quatre localités de la Communauté de communes de la Vallée de la Bruche ont adhéré au programme Petites villes de demain : Schirmeck, la Broque, Barembach et Rothau. L’objectif de ce programme est de développer l’attractivité des bourgs-centre et d’améliorer la qualité de vie des habitants. Pendant 10 ans, les communes signataires bénéficient d’une aide financière et technique de l’Etat pour élaborer un projet de territoire visant à apporter un nouveau dynamisme sur le plan économique, social et culturel, et cela dans un souci de revalorisation de l’habitat, de respect du patrimoine et de transition écologique.',
            location: {
                center: [7.21092, 48.46885],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '07_PVD',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '07_PVD',
                    opacity: 0
                }
            ]
        },
        {
            id: '9',
            title: 'La Vallée de la Bruche, Capitale Française de la Biodiversité en 2022 - Paysage et Biodiversité',
            images: {
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/03-1.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/16.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/17.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/24.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/Barembach2.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/Belmont-Bellefosse-ccvb.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/Blancherupt_3920-24_cllc.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/Clairière du hang-ccvb-2020.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/La Broque1.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/Saulxures.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/09_CapitaleBio/Wildersbach2.webp': { "alt": "09_CapitaleBio", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' }
            },
            description: 'Depuis le début des années 1990, la Communauté de communes de la Vallée de la Bruche s’est dotée d’un Plan de paysage, un outil de programmation et de gestion mettant en évidence l’organisation spatiale du territoire, les liens entre les différentes entités paysagères et les ressources potentielles de chaque zone. Les politiques mises en place et les outils pour les appuyer ont porté, ces 30 dernières années, sur divers sujets : travaux de réouverture en fond de vallée, création d’associations foncières pastorales, soutien à l’agriculture extensive de montagne, concilier démarche paysagère et fonctionnalité des milieux (réseaux de trame verte et bleue), préservation de la biodiversité des milieux pastoraux (landes, coteaux, fonds de vallées), valorisation de la filière bois, démarches de sensibilisation pour le grand public, recomposition du système hydraulique, réhabilitation de friches… En reconnaissance de cette politique volontariste et de ses effets tangibles sur le territoire, la vallée de la Bruche a été désignée « Capitale Française de la Biodiversité 2022 – Paysages et Biodiversité », une distinction décernée par l’Office Français de la Biodiversité.',
            location: {
                center: [7.2109, 48.4413],
                zoom: 15,
                pitch: 45,
                bearing: 20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            title: 'Les points de lecture du paysage',
            images: {
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/10_PointLecture.webp': { "alt": "10_PointLecture", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/10_PointLecture/7947.webp': { "alt": "10_PointLecture", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/10_PointLecture/bruche  316.webp': { "alt": "10_PointLecture", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/10_PointLecture/DSC03189.webp': { "alt": "10_PointLecture", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/10_PointLecture/LaBroque360.webp': { "alt": "10_PointLecture", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/10_PointLecture/st blaise pano simple.webp': { "alt": "10_PointLecture", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' }
            },
            description: 'Le Plan de paysage déployé par la Communauté de communes de la Vallée de la Bruche depuis les années 1990 a participé à mettre en valeur les ressources naturelles, les activités économiques et les modes de vie de ce territoire. Afin de valoriser les actions engagées et d’ouvrir le dialogue entre les acteurs politiques et économiques et les habitants, plusieurs points de lecture du paysage ont été aménagés depuis 2008 à Barembach, La Broque, Colroy La Roche, Ranrupt, Saint Blaise La Roche, Saulxures ou encore Saâles. Touristes, randonneurs et habitants sont ainsi invités à découvrir certains villages, panoramas, vignes, espaces agricoles et forêts, et à comprendre les enjeux qui les traversent grâce aux passerelles, silhouettes, longues vues et maquettes mis à disposition.<br/><br/>Site internet : <a href="https://www.rando-bruche.fr/">https://www.rando-bruche.fr/</a>',
            location: {
                center: [7.202478, 48.3700801],
                zoom: 15,
                pitch: 45,
                bearing: 20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            title: 'La Bruche, un atout majeur du paysage',
            images: {
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/11_Bruche.webp': { "alt": "11_Bruche", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/11_Bruche/bruche_pecheur_001.webp': { "alt": "11_Bruche", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/11_Bruche/BRUCHE-111.webp': { "alt": "11_Bruche", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' },
                'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/11_Bruche/rothau_006.webp': { "alt": "11_Bruche", "credit": '<a href="https://cc.valleedelabruche.fr/">CC Vallée de la Bruche</a>' }
            },
            description: 'La Bruche constitue un lien naturel entre les différents territoires urbains et agricoles, de Bourg-Bruche à Strasbourg. Jusque dans les années 1950, elle a constitué une ressource essentielle, tant pour la consommation humaine et les activités agricoles, que pour le flottage des bois vers la plaine d’Alsace ou pour l’énergie hydro-électrique alimentant villages et usines textiles. Après la disparition progressive des aménagements hydrauliques avec la déprise agricole et l’arrivée des énergies fossiles, une attention accrue est à nouveau portée à l’eau présente dans la vallée. Le SCOT de la Bruche (2016) et le Plan climat Bruche Mossig (2022) soulignent ainsi son importance pour la biodiversité et prônent une renaturation des cours d’eau et zones humides. La piste cyclable offre quant à elle de nombreux points de vue sur les paysages bordés par la Bruche.',
            location: {
                center: [7.14129, 48.38284],
                zoom: 13,
                pitch: 34,
                bearing: -67.5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            title: 'La Vélo Bruche, une piste cyclable de Strasbourg à Saâles',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/12_VeloBruche.webp': { "alt": "12_VeloBruche", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'En 2018, la Communauté de communes de la Vallée de la Bruche s’est dotée d’une Stratégie touristique pour un horizon de 10 ans. Le premier axe de cette stratégie concerne les mobilités, ayant pour objectif une « vallée sans voiture ». En complément de la valorisation de la voie ferrée Saint-Dié – Bruche – Strasbourg et de ses nombreuses gares, elle s’appuie sur une mise en valeur du réseau cyclable qui relie Strasbourg à Saales. Pour rendre cet itinéraire plus lisible et l’intégrer au cercle des itinéraires cyclables et véloroutes en Alsace, la « Vélo Bruche » dispose depuis 2023 de son propre logo. Des investissements sont également prévus pour poursuivre l’équipement du parcours en 2024-2025, incluant signalisation touristique, aire de repos et de service, et création d’une carte cyclo dédiée.<br/><br/>Site internet : <a href="https://www.velo-bruche.fr/">https://www.velo-bruche.fr/</a>',
            location: {
                center: [7.17202, 48.41833],
                zoom: 13,
                pitch: 60,
                bearing: -141.1
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            title: 'Des plans climat',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/13_Eoliennes.webp': { "alt": "13_Eoliennes.svg", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Les parcs éoliens qui composent le paysage vosgien témoignent de l’engagement des collectivités du territoire dans le domaine de la transition énergétique. Depuis les années 1990, la Communauté de communes de la Vallée de la Bruche s’engage ainsi dans une démarche paysagère prônant notamment la préservation de la forêt et la valorisation du bois-énergie. Adopté en 2022 par le PETR Bruche Mossig, le Plan climat s’appuie également sur le développement de nouvelles sources d’énergie verte, telles que le photovoltaïque ou le biogaz. Depuis 2015, la Communauté d’agglomération de Saint-Dié-des-Vosges dispose, avec les autres intercommunalités du PETR de la Déodatie, d’une Maison de l’Habitat et de l’Energie, qui vise à accompagner les particuliers, les entreprises, les hébergeurs et les collectivités dans les projets de rénovation énergétique et d’amélioration du bâti. En 2023, la Communauté d’agglomération a également amorcé une démarche d’élaboration d’un Plan climat pour 2026-2031.',
            location: {
                center: [7.077058, 48.351695],
                zoom: 13,
                pitch: 45,
                bearing: 20
            },
            onChapterEnter: [
                {
                    layer: '13_Eoliennes',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '13_Eoliennes',
                    opacity: 0
                }
            ]
        },
        {
            id: '14',
            title: 'Le lac de Pierre-Percée, un paysage naturel exceptionnel',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/14_PierrePercee.webp': { "alt": "14_PierrePercee.svg", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Avec sa forme en feuille d’érable et ses forêts bordées d’eau, le lac de Pierre-Percée, qui s’étend sur plus de 300 hectares, est surnommé « le petit Canada lorrain ». Afin de valoriser ce paysage naturel exceptionnel, la communauté d’agglomération de Saint-Dié-des-Vosges s’est engagée avec le PETR du Pays du Lunévillois dans une campagne publicitaire de promotion et de communication en 2023. Depuis 2018, elle met également en œuvre une démarche de préservation des ruines de château de Pierre-Percée, qui offre une vue imprenable sur le lac.',
            location: {
                center: [6.91144, 48.46611],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            title: 'Projet alimentaire territorial et continuité écologique : une mise en valeur des paysages naturels et agricoles',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/15_PAT.webp': { "alt": "15_PAT", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'La Communauté d’agglomération de Saint-Dié-des-Vosges met en place plusieurs actions visant à préserver et restaurer les milieux naturels et leur biodiversité, incluant l’élaboration d’un inventaire visant à faciliter des travaux de restauration des cours d’eau et zones humides ainsi que le rétablissement de la continuité écologique. Elle pilote également le dispositif Aggl’Eau d’Education à l’Environnement et au Développement Durable à destination des scolaires, et travaille, avec le Conseil Départemental de Meurthe-et-Moselle, sur la préservation de la valeur environnementale de l’Espace Naturel Sensible de la vallée de la Plaine. En outre, la CA gère trois Associations Foncières Pastorales, dont l’objectif est l’ouverture des paysages et le soutien de l’agriculture de montagne. Enfin, avec les deux autres intercommunalités qui forment le PETR du Pays de la Déodatie, elle participe au Projet alimentaire territorial « Cultivons notre alimentation de demain » visant à soutenir la structuration de la filière agricole.',
            location: {
                center: [6.877449, 48.415047],
                zoom: 15,
                pitch: 20,
                bearing: 45
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16',
            title: 'Les abbayes des Vosges',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/16_Abbayes.webp': { "alt": "L’abbaye de Moyenmoutier", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Fondées au VII e siècle, les abbayes d’Etival, Moyenmoutier et Senones formaient, avec la cathédrale de Saint-Dié-des-Vosges et l’abbaye aujourd’hui disparue de Bonmoutier, la Sainte-Croix-des-Vosges. Au fil des siècles, elles constituent des lieux de culte, mais aussi d’enseignement, avec l’école de grammaire de Moyenmoutier, et d’activité économique, avec les usines textiles implantées sur le site de l’abbaye de Senones au 19e siècle. Aujourd’hui, cet ensemble religieux et historique s’impose encore dans le paysage, et constitue un attrait touristique et culturel important, entre randonnées, visites guidées et concerts de musique classique, avec le Festival des Abbayes en Lorraine qui fête cette année ses 20 ans.',
            location: {
                center: [6.92179, 48.38175],
                zoom: 15,
                pitch: 14,
                bearing: 19.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17',
            title: 'La réhabilitation de la friche du Souche',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/17_Anoud.webp': { "alt": "17_Anoud", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Construites au 19e siècle le long de la rivière de la Meurthe, les papeteries du Souche ont alimenté l’activité économique de la commune d’Anould jusqu’à leur mise en liquidation en 2013. Dès lors, la Communauté d’agglomération de Saint-Dié-des-Vosges et le conseil départemental des Vosges ont engagé des réflexions sur la reconversion du site, qui a laissé en friche près de 30 000 m2 d’infrastructures industrielles. Une douzaine d’hectares est acquise en 2019 par l’Etablissement public foncier du Grand-Est (EPFGE), afin d’amorcer les travaux de désamiantage et développer un projet de reconversion. A terme, le site, qui accueille déjà diverses nouvelles activités industrielles, doit permettre l’établissement d’un centre de formation aux métiers de la sûreté et de la sécurité.',
            location: {
                center: [6.951643, 48.196479],
                zoom: 15,
                pitch: 45,
                bearing: 20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18',
            title: 'Petites villes de demain',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/18_PVD.webp': { "alt": "07_PVD", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'En octobre 2021, trois communes de la Communauté d’agglomération de Saint-Dié-des-Vosges ont adhéré au programme Petites villes de demain : Raon-l’Etape, Fraize et Plainfaing. L’objectif de ce programme est de développer l’attractivité des bourgs-centre et d’améliorer la qualité de vie des habitants. Pendant 10 ans, les communes signataires bénéficient d’une aide financière et technique de l’Etat pour élaborer un projet de territoire visant à apporter un nouveau dynamisme sur le plan économique, social et culturel, et cela dans un souci de revalorisation de l’habitat, de respect du patrimoine et de transition écologique.',
            location: {
                center: [6.9894, 48.2818],
                zoom: 10,
                pitch: 45,
                bearing: 20
            },
            onChapterEnter: [
                {
                    layer: '18_PVD',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '18_PVD',
                    opacity: 0
                }
            ]
        },
        {
            id: '19',
            title: 'Des pôles d’échange multimodaux',
            images: { 'https://sig.strasbourg.eu/datastrasbourg/fig2024/images/19_Gare.webp': { "alt": "La gare de Saint-Dié-des-Vosges, un pôle d’échange multimodal", "credit": '<a href="https://www.adeus.org/">ADEUS</a>' } },
            description: 'Ces dernières années, deux pôles d’échange multimodaux ont été inaugurés dans la Communauté d’agglomération de Saint-Dié-des-Vosges. La gare de Saint-Dié-des-Vosges en 2023, et celle de Raon-l’Etape en 2024, ont ainsi bénéficié de travaux d’envergure visant à revaloriser leur image et à faciliter l’intermodalité. Avec l’aménagement de bornes de recharge électrique, de quais de bus adaptés aux personnes à mobilité réduite, de dépose-minute, de pistes cyclables et de locaux à vélo sécurisés, ces nouveaux aménagements facilitent l’accès à des mobilités douces pour l’ensemble des habitants.',
            location: {
                center: [6.948121, 48.281898],
                zoom: 15,
                pitch: 20,
                bearing: 45
            },
            onChapterEnter: [
                {
                    layer: '19_Gare',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '19_Gare',
                    opacity: 0
                }
            ]
        }
    ]
};