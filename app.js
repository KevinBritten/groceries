let forum = document.getElementById('forum');
document.getElementById('stonks').addEventListener('click', () => stonks());
document
    .getElementById('listButton')
    .addEventListener('click', () => makeList(document.getElementById('listMaker').value));

let makeList = function(str) {
    forum.innerHTML = '';
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
            price: item.slice(item.indexOf('$', item.indexOf('$') + 1)),
            qty: item.slice(item.indexOf('Qty:') + 4, item.indexOf('@'))
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
        <td class="qty" style="text-align:center">${item['qty']}</td>
        <td class="check"><input type="checkbox" class="kevan"></td>
        <td class="check"><input type="checkbox" class="david"></td>
        <td class="check"><input type="checkbox" class="eric"></td>
        <td class="check"><input type="checkbox" class="evan"></td>
        <td class="check"><input type="checkbox" class="duncan"></td>
        <td class="check"><input type="checkbox" class="all"></td>
        `;
    });
};

let stonks = function() {
    // let kevanTot = 0;
    // let davidTot = 0;
    // let ericTot = 0;
    // let evanTot = 0;
    // let duncanTot = 0;
    let totals = {
        kevan: 0,
        david: 0,
        eric: 0,
        evan: 0,
        duncan: 0,
        all: 0
    };
    let items = forum.children;
    for (let tr of items) {
        let itemPrice = 0;
        let buyInPeople = [];
        let splitPrice = 0;

        for (let td of tr.children) {
            if (td.classList.contains('price')) {
                itemPrice = parseFloat(td.getAttribute('price'));
            }

            if (td.classList.contains('check')) {
                if (td.firstElementChild.checked) {
                    buyInPeople.push(td.firstElementChild.className);
                }
            }
        }
        splitPrice = Math.round(itemPrice / buyInPeople.length * 100) / 100;
        buyInPeople.forEach((name) => {
            console.log(splitPrice);
            totals[name] = splitPrice + totals[name];
            // totals[name] = Math.round(splitPrice * 100) / 100 + totals[name];
            console.log(totals);
        });
    }
    document.getElementById('totals').innerText = `
    Kevan: ${totals['kevan'].toFixed(2)}
    David: ${totals['david'].toFixed(2)}
    Eric: ${totals['eric'].toFixed(2)}
    Evan: ${totals['evan'].toFixed(2)}
    Duncan: ${totals['duncan'].toFixed(2)}
    Comunal: ${totals['all'].toFixed(2)}
    `;
};

// makeList(`Granulated Sugar
// 20145033_EA
// Qty: 1 @ $2.48 ea
// $2.48
// Stone Milled Whole Wheat Bread
// 21178962_EA
// Qty: 1 @ $2.48 ea
// $2.48
// Purple Eggplants
// 20155709001_KG
// Wt: 0.445kg @ $6.56 /kg
// $2.00
// Mozzarella Cheese Sticks
// 21116020_EA
// Qty: 1 @ $7.98 ea
// $7.00
// Guava
// 20975633001_EA
// Qty: 1 @ $3.98 ea
// $3.00
// Avocado, 5/6-Count
// 20872671001_EA
// Qty: 1 @ $2.88 ea
// $2.00
// Mango
// 20059635001_EA
// Qty: 3 @ $0.88 ea
// $2.00`);