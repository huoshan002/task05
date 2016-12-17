calculator = {
    calculNumberStack : [],
    calculOperateStack : [],
    currentNumber : ""
};

window.onload = function () {
    var numberReg = /^(-?\d+)(\.\d*)?$/;
    var displayElement = document.getElementById("display");

    document.getElementById("number_container").addEventListener("click",function (event) {
        var targetElement = event.target;
        if(targetElement.tagName == "INPUT"){
            var targetValue = targetElement.value;
            if(targetValue == "C"){
                if(calculator.calculOperateStack.length > 0){
                    calculator.calculNumberStack = [];
                    calculator.calculOperateStack = [];
                    calculator.currentNumber = "";
                    displayElement.innerHTML = "0";
                    return;
                }else{
                    calculator.currentNumber = calculator.currentNumber.substring(0,calculator.currentNumber.length - 1);
                }
            }else{
                calculator.currentNumber +=  targetElement.value;
                if(!numberReg.test(calculator.currentNumber)) {
                    displayElement.style.color = "red";
                    setTimeout(function () {
                        displayElement.style.color = "white";
                    }, 500);
                    calculator.currentNumber = calculator.currentNumber.substring(0,calculator.currentNumber.length - 1);
                }
            }
            displayElement.innerHTML = calculator.currentNumber;
        }
    });

    document.getElementById("operate_container").addEventListener("click",function (event) {
        var targetElement = event.target;
        if(targetElement.tagName == "INPUT"){
            var targetValue = targetElement.value;
            if(targetValue == "-" && calculator.currentNumber == ""){
                calculator.currentNumber = "-";
            }else{
                if(calculator.calculOperateStack.length == 0){
                    calculator.calculNumberStack[0] = parseFloat(calculator.currentNumber);
                    calculator.currentNumber = "";
                    displayElement.innerHTML = "0";
                    calculator.calculOperateStack[0] = targetValue;
                }else{
                    calculator.calculOperateStack[0] = targetValue;
                }                
            }
        }
    });

    document.getElementById("calculation").addEventListener("click",function (event) {
        var operator = calculator.calculOperateStack[0];
        calculator.calculNumberStack[1] = parseFloat(calculator.currentNumber);
        var result ;
        switch (operator){
            case "+" :
                result =  calculator.calculNumberStack[0] + calculator.calculNumberStack[1];
                break;
            case "-" :
                result =  calculator.calculNumberStack[0] - calculator.calculNumberStack[1];
                break;
            case "*" :
                result =  calculator.calculNumberStack[0] * calculator.calculNumberStack[1];
                break;
            case "/" :
                result =  calculator.calculNumberStack[0] / calculator.calculNumberStack[1];
                break;
            default :
                result = 0;
                break;
        }
        calculator.calculNumberStack[0] = "" + result;
        displayElement.innerHTML = result.toFixed(1);
    });
};
























