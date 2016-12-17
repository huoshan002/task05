

calculator = {};


var _displayMain = document.getElementById("display");
var _displayOpe = document.getElementById("operator");

var arrA = [];
var arrB = [];
var operator = [];



calculator.num = function (value) {
    _displayMain.innerHTML = value;

    arrA.length = 0;
    arrA.push(value);

    if (operator.length == 1){
        arrB.length = 0;
        arrB.push(value)
    }
}
;

calculator.ope = function (value) {
    _displayOpe.innerHTML = value;
    operator.length = 0;
    operator.push(value);
};


calculator.clean = function () {
    _displayMain.innerHTML = "";
    _displayOpe.innerHTML = "";
};

calculator.compute = function () {
    
}


















