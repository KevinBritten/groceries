let forum = document.getElementById("forum")

let makeList = function(str) {
    let numberOfItems = str.match(/[$]/g).length / 2
    let items = []
    let sortedItems = []
    for (let i = 0; i < numberOfItems; i++) {
        let secondDollar = str.indexOf("$", (str.indexOf("$") + 1)) + 6
        items.push(str.slice(0, secondDollar))
    }
    for (let item of items) {
        let currentObject = {
            name: item.slice(0, item.indexOf('Qty:')),
            price: item.slice(item.indexOf("$", (item.indexOf("$") + 1)))
        }
        sortedItems.push(currentObject)
    }
    sortedItems.forEach((item) => {
        let row = document.createElement("tr")
        console.log(forum)
        document.getElementById("forum").appendChild(row)
        forum.lastChildElement.innerHtml = `<td>${item['name']}</td><td>${item['price']}</td>`
    })
}

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
$2.64`)