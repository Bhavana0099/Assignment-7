/*eslint-env browser*/
//STEP 1

var no = parseInt(window.prompt("Enter a number"));
var halfNo;
function halfNumber(no) {
    "use strict";
    halfNo = parseFloat(no / 2); 
    window.console.log("Half of " + no + " is " +halfNo + "."); 
    return halfNo;
}
halfNumber(no);

//STEP 2
/*
var number = parseInt(window.prompt("Enter a number"));
var squareNo;
function squareNumber(number) {
    "use strict";
    squareNo = parseInt(number * number); 
    window.console.log("The result of squaring the number " + number + " is " + squareNo + "."); 
    return squareNo;
}
squareNumber(number);
*/
//STEP 3
/*
var no1 = parseInt(window.prompt("Enter first number"));
var no2 = parseInt(window.prompt("Enter second number"));
var percent;
function percentOf(no1, no2) {
    "use strict";
    percent = (no1 * 100) / no2;
    window.console.log(no1 + " is " + percent + "% of " + no2 + ".");
    return percent;
}
percentOf(no1, no2);
*/
//STEP 4
/*
var num1 = parseInt(window.prompt("Enter first number"));
var num2 = parseInt(window.prompt("Enter second number"));
var mod;
function findModulus(num1, num2) {
    "use strict";
    mod = parseInt(num2 % num1);
    window.console.log(mod + " is the modulus of " + num1 + " and " + num2 + ".");
    return mod;
}
findModulus(num1, num2);
*/
//STEP 5
/*
var num = window.prompt("Enter the numbers seperated by commas");
num = num.split(",");
var sum = 0;
function findSum(num) {
    "use strict";
    for (var i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    window.console.log("Sum of the numbers " + num + " is " + sum + ".");
    return sum;
}
findSum(num);
*/