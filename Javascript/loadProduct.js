let params = new URLSearchParams(window.location.search);
product = params.get('product');

for (i = 0; i < products.length; i++) {
    if (products[i].name == product) {
        product = products[i];
        break;
    }
}

document.getElementById('product-image').src = product.imgURL;
document.getElementById('product-image').alt = product.name;
document.getElementById('product-price').textContent = product.price;
document.getElementById('product-description').textContent = product.description;
document.getElementById('product-name').innerHTML = '<b>' + product.name + '</b>';