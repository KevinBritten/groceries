let forum = document.getElementById('forum');

let makeList = function(str) {
    let remainingItems = str;
    let numberOfItems = str.match(/[$]/g).length / 2;
    let items = [];
    let sortedItems = [];
    for (let i = 0; i < numberOfItems; i++) {
        let secondDollar = remainingItems.indexOf('$', remainingItems.indexOf('$') + 1) + 6;
        items.push(remainingItems.slice(0, secondDollar));
        remainingItems = remainingItems.slice(secondDollar);
    }
    for (let item of items) {
        let currentObject = {
            name: item.slice(0, item.indexOf('Qty:')),
            price: item.slice(item.indexOf('$', item.indexOf('$') + 1))
        };
        sortedItems.push(currentObject);
    }
    sortedItems.forEach((item) => {
        let row = document.createElement('tr');
        document.getElementById('forum').appendChild(row);
        let edit = forum.lastElementChild;
        let currentPrice = parseFloat(item['price'].slice(1));
        edit.innerHTML = `<td class="name">${item['name']}</td>
        <td class="price" price="${currentPrice}">${item['price']}</td>
        <td><input type="checkbox" class="kevan"></td>
        <td><input type="checkbox" class="david"></td>
        <td><input type="checkbox" class="eric"></td>
        <td><input type="checkbox" class="evan"></td>
        <td><input type="checkbox" class="duncan"></td>
        `;
    });
};

let stonks = function() {
    let kevanTot = 0;
    let davidTot = 0;
    let ericTot = 0;
    let evanTot = 0;
    let duncanTot = 0;
    let items = forum.children;
    for (let tr of items) {
        for (let td of tr.children) {
            let itemPrice = 0;
            if (td.classList.contains('price')) {
                itemPrice = td.getAttribute('price');
            }
        }
    }
};

makeList(`Granulated Sugar
20145033_EA
Qty: 1 @ $2.48 ea
$2.48
Stone Milled Whole Wheat Bread
21178962_EA
Qty: 1 @ $2.48 ea
$2.48
Purple Eggplants
20155709001_KG
Wt: 0.445kg @ $6.56 /kg
$2.92
Mozzarella Cheese Sticks
21116020_EA
Qty: 1 @ $7.98 ea
$7.98
Guava
20975633001_EA
Qty: 1 @ $3.98 ea
$3.98
Avocado, 5/6-Count
20872671001_EA
Qty: 1 @ $2.88 ea
$2.88
Mango
20059635001_EA
Qty: 3 @ $0.88 ea
$2.64`);

stonks();