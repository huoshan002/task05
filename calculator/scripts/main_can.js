calculator = {
    numberContent: [],
    operationContent: []
};


var _display = document.getElementById("display");

var _numberBtn = document.getElementById("number_container");
var _operationBtn = document.getElementById("operate_container");
var _computerBtn = document.getElementById("calculation");


//监听点击的数字
_numberBtn.addEventListener("click", function (event) {

    //获取点击元素
    var _targetElement = event.target;
    if (_targetElement.targetName == "INPUT") {
        var _targetValue = _targetElement.value;
    }

    calculator.numberContent += _targetValue;

    //显示当前点击的数字
    _display.innerHTML = calculator.numberContent;


    console.log(calculator.numberContent);
});





