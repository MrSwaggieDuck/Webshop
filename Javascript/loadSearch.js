let params = new URLSearchParams(window.location.search);
let product = params.get('search');

document.getElementById('category-type').textContent = 'Resultaten voor ' + product;

for (i = 0; i < products.length; i++) {
    console.log(product);
    if (!products[i].name.toLowerCase().includes(product.toLowerCase())) continue;
    a = document.createElement('A');
    a.classList.add('category-product');
    a.classList.add(products[i].category);
    a.id = products[i].name;
    a.href = 'product.html?product=' + products[i].name;
    img = document.createElement('IMG');
    img.classList.add('category-product-image');
    img.src = products[i].imgURL;
    img.width = '95%';
    img.height = '95%';
    img.alt = products[i].name;
    nameElem = document.createElement('DIV');
    nameElem.classList.add('category-product-name');
    nameElem.innerText = products[i].name;

    a.id = products[i].name;
    img.id = products[i].name;
    nameElem.id = products[i].name;

    a.appendChild(img);
    a.appendChild(nameElem);

    document.getElementById('product-list').appendChild(a);
}