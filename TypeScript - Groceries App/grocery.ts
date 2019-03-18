class Grocery {
    fullName: string;
    constructor(public itemName1: string, public unitPrice1: number, public quantity1: number, public itemName2: string, public unitPrice2: number, public quantity2: number) {
        this.fullName = itemName1 + " " + unitPrice1 + " " + quantity1 + itemName2 + " " + unitPrice2 + " " + quantity2;
    }
}

interface itemDetail {
    itemName1: string;
    unitPrice1: number;
    quantity1: number;
    itemName2: string;
    unitPrice2: number;
    quantity2: number;
}

function display(item : itemDetail) {
    var startTable = "<table> <tr> <th>Item Name</th> <th>Quantity</th> <th>Unit Price</th> </tr>" ;
    var row1 = "<tr> <td>" + item.itemName1 + "</td><td>" +  item.quantity1 + "</td><td>" + item.unitPrice1 + "</td></tr>" ;
    var row2 = "<tr> <td>" + item.itemName2 + "</td><td>" +  item.quantity2 + "</td><td>" + item.unitPrice2 + "</td></tr>" ;
    var endTable = "</table>";
    return startTable + row1 +  row2 + endTable;


}

let user = new Grocery("Apple", 3, 0.39, "Milk", 1, 2.992);

document.body.innerHTML = display(user);