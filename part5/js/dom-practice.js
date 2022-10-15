/*eslint-env browser*/
var message = "I have been clicked"
//STEP 1

function display() {
    "use strict";
    window.alert(message);
}

//STEP 2

var i = window.document.getElementById('button1');
i.onclick = function() {
    "use strict";
    window.alert(message);
}
//STEP 3
var j = window.document.getElementById('button2');
j.addEventListener("click", display);

//STEP 4

var x = document.getElementById('button3');
x.addEventListener("click", function() {
    'use strict';
    window.alert(message);
});

    //STEP 5
function part5() {    
    var y = window.document.getElementById("button4");
    y.addEventListener("click", function(){
        window.alert(message);
    });
}
window.addEventListener("load", part5);

