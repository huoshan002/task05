calculator = {
    numberContentA: [],
    numberContentB: [],
    operationContent: []
};


var _display = document.getElementById("display");
var _opeDisplay = document.getElementById("operator");

var _numberBtn = document.getElementById("number_container");
var _operationBtn = document.getElementById("operate_container");
var _computerBtn = document.getElementById("calculation");


//监听点击的数字
_numberBtn.addEventListener("click", function(event) {
    //获取点击元素
    var _targetElement = event.target;
    if (_targetElement.tagName == "INPUT") {
        var _targetValue = _targetElement.value;

        //判断点击是否是C
        if (_targetValue == "C") {
            //重置所有
            calculator.numberContentA = [];
            calculator.numberContentB = [];
            calculator.operationContent = [];
            _display.innerHTML = 0;
            _opeDisplay.innerHTML = "";
        } else {

            


            //判断运算符是否点击，点击就把数字放到B中
            if (calculator.operationContent.length == 1) {

                //判断是否已输入小数点
                if (_targetValue == "." && calculator.numberContentB.indexOf(".") > -1) {

                    return false;
                                    
                } else {

                    calculator.numberContentB += _targetValue;
                    _display.innerHTML = calculator.numberContentB;

                }


            } else {

                //判断是否已输入小数点
                if (_targetValue == "." && calculator.numberContentA.indexOf(".") > -1) {
                        
                        return false;

                    } else{
                        calculator.numberContentA += _targetValue;
                        _display.innerHTML = calculator.numberContentA;
                    }
                }
                
            }

        }



});


//监听点击运算符
_operationBtn.addEventListener("click", function(event) {
    //获取点击元素
    var _targetElement = event.target;
    if (_targetElement.tagName == "INPUT") {
        var _targetValue = _targetElement.value;
    }

    calculator.operationContent = _targetValue;
    _opeDisplay.innerHTML = calculator.operationContent;

})



_computerBtn.addEventListener("click", function(event) {
    //运算


    //判断运算符是否为空
    if (calculator.operationContent.length == 0 ) {
        return false;
    }

    //判断除数是否为0
    if (calculator.operationContent == "/" && calculator.numberContentB == "0") {
        _display.innerHTML = "除数不能为0"
        return false;
    }

    var result;
    switch (calculator.operationContent) {

        case "+":
            result = parseFloat(calculator.numberContentA) + parseFloat(calculator.numberContentB);
            break;

        case "-":
            result = parseFloat(calculator.numberContentA) - parseFloat(calculator.numberContentB);
            break;

        case "*":
            result = parseFloat(calculator.numberContentA) * parseFloat(calculator.numberContentB);
            break;

        case "/":
            result = parseFloat(calculator.numberContentA) / parseFloat(calculator.numberContentB);
            break;

        default:
            result = 0;
            break;
    }

    //显示结果
    _display.innerHTML = result;
    
})
