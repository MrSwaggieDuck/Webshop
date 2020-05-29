function Product(name, imgURL, description, price, category, video=null, audio=null) {
    this.name = name;
    this.imgURL = imgURL;
    this.video = video;
    this.description = description
    this.price = price;
    this.category = category;
    this.audio = audio;
}

function search() {
    window.location.href = 'search.html?search=' + document.getElementById('search-bar-input').value;
}

products = [];

//Speelgoed
products.push(new Product('Le Grande Garage', '../Images/speelgoed.png', 'Le Grande Garage is de allerleukste speelgoed garage voor jong en oud. Deze garage staat garant voor uren speelplezier.', '€15,99', 'Speelgoed'));
products.push(new Product('Schepje', '../Images/schepje.png', 'Een super leuk schepje om lekker mee te spelen op het strand.', '€3,50', 'Speelgoed'));
products.push(new Product('Speelgoed Lamborghini', '../Images/lamborghini.png', 'Houdt uw kind van auto\'s? Dan is de nieuwste speelgoed lamborghini perfect voor uw kind.', '€17,-', 'Speelgoed'));

//Kleding
products.push(new Product('Blauwe Trui', '../Images/truiblauw.png', 'Dit is de allermooiste en warmste blauwe trui, gemaakt van 85% katoen en 15% wol', '€17,99', 'Kleding'));

//Games
products.push(new Product('Rocket League', '../Images/rocketleague.jpg', 'Rocket League, een wereldwijde verslaving en winnaar en/of genomineerd met meer dan 150 “Game of the  Year” awards. Rocket League een van de meest bekroonde sportgames van onze generatie. Met meer dan 36 miljoen spelers is de game een krachtige combinatie van een arcadestijl voetbalspel en racevoertuigen met makkelijk te begrijpen besturing en vloeiende competities.', '€19,99', 'Games', 'https://youtube.com/embed/JpIRkKIE4Ig'));
products.push(new Product('GTA V', '../Images/gtav.png', 'Los Santos: een uitgestrekte, zonovergoten metropool vol zelfhulpgoeroes, sterretjes en vergane beroemdheden. Ooit wekte deze plek de jaloezie op van de gehele westerse wereld, maar nu worstelt de stad om het hoofd boven water te houden in een tijdperk van economische onzekerheid en goedkope reality-tv. Te midden van deze onrust riskeren drie zeer verschillende criminelen alles in een reeks van gedurfde en gevaarlijke heists, die hen een leven zonder geldzorgen moeten bezorgen.', '€27,99', 'Games', 'https://www.youtube.com/embed/QkkoHAzjnUs'));
products.push(new Product('Minecraft', '../Images/minecraft.png', 'In Minecraft begint het avontuur met je eigen verbeelding. Je kunt blokken breken, plaatsen en ermee doen wat je wilt. Probeer een zo diep mogelijk gat te graven of maak een schuilplaats om \'s nachts in te schuilen voor de verschrikkelijke monsters. Van stenen hut tot kasteel, van eenvoudig idee tot super-ambitieus plan; jij bepaalt hoe het spel wordt gespeeld. Wees dapper, nieuwsgierig en origineel. Maak alles, van een simpele boot tot een complete wereldstad.', '€19,99', 'Games', 'https://www.youtube.com/embed/MmB9b5njVbA'));
products.push(new Product('Civilization VI', '../Images/civ-vi.png', 'Civilization is oorspronkelijk gemaakt door de legendarische gameontwerper Sid Meier en is een turn-based strategiespel waarin je probeert een imperium op te bouwen om de tand des tijds te doorstaan. Verken een nieuw land, onderzoekstechnologie, verover je vijanden en ga het tegen de bekendste leiders van de geschiedenis in, terwijl je probeert de grootste beschaving te bouwen die de wereld ooit heeft gekend.', '€50,00', 'Games', 'https://www.youtube.com/embed/5KdE0p2joJw'));
products.push(new Product('Ark Survival Evolved', '../Images/ark.png', 'Bereid je voor op het ultieme dino-avontuur ! Aangespoeld op een mysterieus prehistorisch eiland, moet je op verkenning doorheen de verschillende gebieden, terwijl je jaagt, oogst, werktuigen bouwt, voedsel teelt en een huis bouwt om te overleven. Gebruik je vaardigheden om de dinosauriërs en andere primitieve dieren die op de ‘ARK’ leven, te doden, temmen, kweken en zelfs te berijden. Zorg ervoor dat je technologie evolueert van primitieve tools tot laser kanonnen op een T-Rex, en speel alleen of samen met honderden andere spelers.', '€34,99', 'Games', 'https://www.youtube.com/embed/5fIAPcVdZO8'));
products.push(new Product('FIFA 20', '../Images/fifa20.png', 'Dit is FIFA 20 op de Playstation 4, speel jezelf thuis in de kijker, of op grote eSports toernooien met FIFA Ultimate team. EA Sports FIFA 20, aangedreven door Frostbite, brengt de twee aspecten van \'The World\'s Game\' tot leven: het prestige van het als prof spelen en de totaal nieuwe straatvoetbalervaring in EA Sports Volta. FIFA 20 vernieuwt het hele spel. Voetbalintelligentie ontgrendelt een ongekend platform voor realisme wat betreft gameplay', 
'€29,99', 'Games', 'https://www.youtube.com/embed/vgQNOIhRsV4'));
products.push(new Product('Heroes of Hammerwatch', '../Images/heroesofhammerwatch.png', 'Heroes of Hammerwatch is een RPG actiespel vol avontuur. Heroes of Hammerwatch speelt zich af in hetzelfde universum als Hammerwatch. Er zijn echter ook grote verschillen met Hammerwatch. Upgrades zijn nu permanent op elk van je personages, afgezien van gevallen items die je kunt plunderen. Er is een nieuw materiaal genaamd erts om upgrades voor je personages te kopen en de meeste van de niveaus worden procedureel gegenereerd.  Je begint elke run in Outlook, een stad die je kunt upgraden om je helden verschillende verbeteringen te geven die je verder helpen in je zoektocht. Ontmoet eindeloze hordes vijanden, vallen, puzzels, geheimen en buit, terwijl je je een weg baant door procedureel gegenereerde niveaus om de top van de Forsaken Spire te bereiken.', '€11,99', 'Games', 'https://www.youtube.com/embed/uTIVDKdNvms'));
products.push(new Product('Forza Horizon 4', '../Images/forzahorizon4.png', 'Verken prachtige, historische Britse landschappen. Ontdek meren, valleien, kastelen en adembenemende omgevingen in verbluffende 4K-resolutie met HDR. De seizoenen veranderen alles! Leer rijden in droge, natte, modderige, besneeuwde en ijzige omstandigheden en ervaar een gedeelde wereld waarin iedereen gelijktijdig te maken krijgt met de veranderingen in tijd, weer en seizoenen. Geniet van de grootste en meest gevarieerde reeks auto\'s tot nu toe in Horizon. In de nieuwe open campagne telt alles wat je doet mee voor je voortgang in de game.', '€59,99', 'Games', 'https://www.youtube.com/embed/zJ477xAIlgU'));
products.push(new Product('Red Dead Redemption 2', '../Images/rdr2.png', 'Amerika, 1899. Wetshandhavers hebben het gemunt op de laatste outlaw-bendes. Wie zich niet wil overgeven, wordt genadeloos afgemaakt. Arthur Morgan en de Van der Linde-bende slaan op de vlucht nadat in het plaatsje Blackwater een overval slecht afloopt. Met federale agenten en de beste premiejagers van het Westen op de hielen, trekken ze door het ruige hart van Amerika, een spoor van overvallen en vuurgevechten achter zich latend. Als door interne strubbelingen de bende uiteen dreigt te vallen, wordt Arthur gedwongen een keuze te maken. Kiest hij voor zijn idealen of voor de bende waar hij alles aan te danken heeft? Red Dead Redemption 2, van de makers van Grand Theft Auto V en Red Dead Redemption, is een episch verhaal over het einde van het Wilde Westen en het begin van een nieuw tijdperk.', '€35,99', 'Games', 'https://www.youtube.com/embed/eaW0tYpxyp0'));
products.push(new Product('Minecraft Dungeons', '../Images/dungeons.png', 'Vecht je een weg door een gloednieuw actie-avonturenspel dat geïnspireerd is door klassieke dungeon crawlers en zich afspeelt in het Minecraft-universum! Speel met maximaal vier vrienden of trotseer de kerkers alleen. Ga de strijd aan met nieuwe onaangename vijanden in zeer uiteenlopende locaties vol met actie, in een zoektocht naar de snode Arch-Illager!', '€19,99', 'Games', 'https://www.youtube.com/embed/KCbE47v1qVk'));
products.push(new Product('Terraria', '../Images/terraria.png', 'Welkom in de wereld van Terraria. Graaf, vecht, verken en bouw! Niets is onmogelijk in dit spectaculaire avontuur. In deze game komt je meer dan een dozijn omgevingen en honderden voorwerpen en vijanden tegen. Jij bent heer en meester in Terraria, dus creeer je eigen wereld. Pak je tools en vooruit met de geit. In Terraria ben je min of meer vrij om te doen en laten wat je zelf wilt. Je kunt gaan graven en allerlei mijnen ontdekken vol schatten en gevaarlijke monsters. Alle gevonden materialen kon je vervolgens gebruiken om bouwmaterialen te produceren. Die zijn op hun beurt weer bruikbaar voor de bouw van een huis of kasteel of misschien een ondergrondse bunker. Er zullen vanzelf andere personages bij jou intrekken. Wellicht beginnen zij een winkeltje en kan je tegen gereduceerde prijzen wapens en andere spullen kopen. Alles in Terraria is volledig willekeurig. Er is geen begin, geen einde. In theorie kan dit spel voor altijd doorgaan.', '€29,99', 'Games', 'https://www.youtube.com/embed/H77Zfzy4LWw'));

//ELECTRONICA
products.push(new Product('Playstation 4', '../Images/electronica.png', 'Het PlayStation®4-systeem opent de deur naar een ongelooflijke reis door meeslepende nieuwe gamewerelden en een sterk verbonden game-community. PS4 Slim zet gamers op de eerste plaats. Door ontwikkelaars, voor gamers.', '€299,-', 'Electronica'));
products.push(new Product('Xbox One X', '../Images/xboxone.jpg', 'Xbox One X is de krachtigste console ooit, het maakt 4K gaming écht mogelijk. De Xbox One X heeft 40% meer vermogen dan elke ander gameconsole! Games en films zien er fenomenaal uit met vloeiende 4K gameplay, zelfs op een 1080p scherm. Alle Xbox games -de nieuwste Xbox One releases en Xbox 360 klassiekers- speel je op de Xbox One X. Ook alle Xbox accessoires werken op Xbox One X, zodat je je favoriete controller kan gebruiken.', '€340,-', 'Electronica'));
products.push(new Product('Raspberry Pi 3B', '../Images/raspberrypi.png', 'De Raspberry Pi 3 Model B is gebouwd rondom de Broadcom 2837 ARMv8 64bit processor en is sneller en krachtiger dan zijn voorgangers. Daarnaast heeft de Raspberry Pi 3 nu on-board WiFi / Bluetooth en verbeterd power management om ondersteuning te bieden voor krachtigere externe USB apparaten.', '€39,99', 'Electronica'));

//SOUND EFFECTS
products.push(new Product('Blaffende hond', '../Images/dog.png', '', '€0,50', 'Sound-effects', null, '../Audio/dogsound.mp3'));
products.push(new Product('Machine geweer', '../Images/machinegun.png', '', '€0,60', 'Sound-effects', null, '../Audio/machinegun.mp3'));

//SPORT
products.push(new Product('Volleybal', '../Images/volleybal.png', 'Gala Volleybal Pro-line, Door het gewicht van deze volleybal is hij bij uitstek geschikt voor het voorgezet onderwijs of hoger.Gemaakt van synthetisch leer, waardoor de bal erg degelijk en stevig is.Tevens is dit de goedkoopste bal die is goedgekeurd door de Nevobo. (Nederlandse Volleybal Bond.)Weegt 270 gram en dus ideaal voor training of groepsgebruik.', '€34,95', 'Sport'));