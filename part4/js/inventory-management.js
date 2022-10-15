/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("Welcome to Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - update an existing product’s inventory");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function view(inventory) {
    "use strict";
    var i = 1;
    for (var i = 0; i < inventory.length; i++) {
        console.log(inventory[i][0] + ' ' + inventory[i][1] + ' (' + parseInt(inventory[i][2]) + ') ' + '$' 
        + parseFloat(inventory[i][3]));
    }
    console.log('');
}

function update(inventory) {
    "use strict";
    var sku = parseInt(window.prompt("Enter a sku number to update the stock"));
    for (var i = 0; i < inventory.length; i++) {
        if(inventory[i][0] == sku) {
            var stock = parseInt(window.prompt("Enter the updated stock quantity"));
            inventory[i][2] = stock;
            window.console.log("Updated the stock successfully!");
            view(inventory);
            break;
        } else {
        window.alert("Please enter a valid sku number");
        }
    }
}


function main() {
    "use strict";
    var inventory, command;
    inventory = [[123, "Jenga", 15, 12.56], [234, "Ludo", 25, 20.43], [345, "Chess", 40, 45.98], 
    [456, "Sequence", 20, 30.92], [567, "Pac-Man", 10, 18.95]];
    displayMenu();

    while (true) {
        command = window.prompt("Enter Command");
        if (command != null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("This is not a valid command");
            }
        } else {
            break;
        }
    }
    window.console.log("Program is terminated");
} 
main();
