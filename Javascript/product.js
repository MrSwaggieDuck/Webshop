function Product(name, imgURL, description, price, category) {
    this.name = name;
    this.imgURL = imgURL;
    this.description = description
    this.price = price;
    this.category = category;
}

products = [];
products.push(new Product('Le Grande Garage', '../Images/speelgoed.png', 'Le Grande Garage is de allerleukste speelgoed garage voor jong en oud. Deze garage staat garant voor uren speelplezier.', '€15,99', 'Speelgoed'));
products.push(new Product('Blauwe Trui', '../Images/truiblauw.png', 'Dit is de allermooiste en warmste blauwe trui, gemaakt van 85% katoen en 15% wol', '€17,99', 'Kleding'));
products.push(new Product('Speelgoed Lamborghini', '../Images/lamborghini.png', 'Houdt uw kind van auto\'s? Dan is de nieuwste speelgoed lamborghini perfect voor uw kind.', '€17,-', 'Speelgoed'));
products.push(new Product('Bitterbal', '../Images/bitterbal.png', 'Dit is de allerlekkerste bitterbal die u ooit heeft gegeten, de bitterbal zal voor bezorging worden opgewarmd.', '€0,50', 'Eten'));
products.push(new Product('Schepje', '../Images/schepje.png', 'Een super leuk schepje om lekker mee te spelen op het strand.', '€3,50', 'Speelgoed'));
