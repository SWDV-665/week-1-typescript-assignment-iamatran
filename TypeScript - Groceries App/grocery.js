var Grocery = /** @class */ (function () {
    function Grocery(itemName1, unitPrice1, quantity1, itemName2, unitPrice2, quantity2) {
        this.itemName1 = itemName1;
        this.unitPrice1 = unitPrice1;
        this.quantity1 = quantity1;
        this.itemName2 = itemName2;
        this.unitPrice2 = unitPrice2;
        this.quantity2 = quantity2;
        this.fullName = itemName1 + " " + unitPrice1 + " " + quantity1 + itemName2 + " " + unitPrice2 + " " + quantity2;
    }
    return Grocery;
}());
function display(item) {
    var startTable = "<table> <tr> <th>Item Name</th> <th>Quantity</th> <th>Unit Price</th> </tr>";
    var row1 = "<tr> <td>" + item.itemName1 + "</td><td>" + item.quantity1 + "</td><td>" + item.unitPrice1 + "</td></tr>";
    var row2 = "<tr> <td>" + item.itemName2 + "</td><td>" + item.quantity2 + "</td><td>" + item.unitPrice2 + "</td></tr>";
    var endTable = "</table>";
    return startTable + row1 + row2 + endTable;
}
var user = new Grocery("Apple", 3, 0.39, "Milk", 1, 2.992);
document.body.innerHTML = display(user);
