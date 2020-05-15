function Product(name, imgURL, description, price, category, video=null) {
    this.name = name;
    this.imgURL = imgURL;
    this.video = video;
    this.description = description
    this.price = price;
    this.category = category;
}

products = [];

//Speelgoed
products.push(new Product('Le Grande Garage', '../Images/speelgoed.png', 'Le Grande Garage is de allerleukste speelgoed garage voor jong en oud. Deze garage staat garant voor uren speelplezier.', '€15,99', 'Speelgoed'));
products.push(new Product('Schepje', '../Images/schepje.png', 'Een super leuk schepje om lekker mee te spelen op het strand.', '€3,50', 'Speelgoed'));
products.push(new Product('Speelgoed Lamborghini', '../Images/lamborghini.png', 'Houdt uw kind van auto\'s? Dan is de nieuwste speelgoed lamborghini perfect voor uw kind.', '€17,-', 'Speelgoed'));

//Kleding
products.push(new Product('Blauwe Trui', '../Images/truiblauw.png', 'Dit is de allermooiste en warmste blauwe trui, gemaakt van 85% katoen en 15% wol', '€17,99', 'Kleding'));

//Eten
products.push(new Product('Bitterbal', '../Images/bitterbal.png', 'Dit is de allerlekkerste bitterbal die u ooit heeft gegeten, de bitterbal zal voor bezorging worden opgewarmd.', '€0,50', 'Eten'));

//Games
products.push(new Product('Rocket League', '../Images/rocketleague.jpg', 'Rocket League, een wereldwijde verslaving en winnaar en/of genomineerd met meer dan 150 “Game of the Year” awards. Rocket League een van de meest bekroonde sportgames van onze generatie. Met meer dan 36 miljoen spelers is de game een krachtige combinatie van een arcadestijl voetbalspel en racevoertuigen met makkelijk te begrijpen besturing en vloeiende competities.', '€19,99', 'Games', 'https://youtube.com/embed/JpIRkKIE4Ig'));
products.push(new Product('GTA V', '../Images/gtav.png', 'Los Santos: een uitgestrekte, zonovergoten metropool vol zelfhulpgoeroes, sterretjes en vergane beroemdheden. Ooit wekte deze plek de jaloezie op van de gehele westerse wereld, maar nu worstelt de stad om het hoofd boven water te houden in een tijdperk van economische onzekerheid en goedkope reality-tv. Te midden van deze onrust riskeren drie zeer verschillende criminelen alles in een reeks van gedurfde en gevaarlijke heists, die hen een leven zonder geldzorgen moeten bezorgen.', '€27,99', 'Games', 'https://www.youtube.com/embed/QkkoHAzjnUs'));
products.push(new Product('Minecraft', '../Images/minecraft.png', 'In Minecraft begint het avontuur met je eigen verbeelding. Je kunt blokken breken, plaatsen en ermee doen wat je wilt. Probeer een zo diep mogelijk gat te graven of maak een schuilplaats om \'s nachts in te schuilen voor de verschrikkelijke monsters. Van stenen hut tot kasteel, van eenvoudig idee tot super-ambitieus plan; jij bepaalt hoe het spel wordt gespeeld. Wees dapper, nieuwsgierig en origineel. Maak alles, van een simpele boot tot een complete wereldstad.', '€19,99', 'Games', 'https://www.youtube.com/embed/MmB9b5njVbA'));
products.push(new Product('Civilization VI', '../Images/civ-vi.png', 'Civilization is oorspronkelijk gemaakt door de legendarische gameontwerper Sid Meier en is een turn-based strategiespel waarin je probeert een imperium op te bouwen om de tand des tijds te doorstaan. Verken een nieuw land, onderzoekstechnologie, verover je vijanden en ga het tegen de bekendste leiders van de geschiedenis in, terwijl je probeert de grootste beschaving te bouwen die de wereld ooit heeft gekend.', '€50,00', 'Games', 'https://www.youtube.com/embed/5KdE0p2joJw'));
products.push(new Product('Ark Survival Evolved', '../Images/ark.png', 'Bereid je voor op het ultieme dino-avontuur ! Aangespoeld op een mysterieus prehistorisch eiland, moet je op verkenning doorheen de verschillende gebieden, terwijl je jaagt, oogst, werktuigen bouwt, voedsel teelt en een huis bouwt om te overleven. Gebruik je vaardigheden om de dinosauriërs en andere primitieve dieren die op de ‘ARK’ leven, te doden, temmen, kweken en zelfs te berijden. Zorg ervoor dat je technologie evolueert van primitieve tools tot laser kanonnen op een T-Rex, en speel alleen of samen met honderden andere spelers.', '€34,99', 'Games', 'https://www.youtube.com/embed/5fIAPcVdZO8'))
