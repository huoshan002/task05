var _resultCon = document.getElementById("result");

function num() {
    var _inputCon = document.getElementById("input_content").value;

    //判断非空
    if (_inputCon == '') {
        alert("请输入计算内容");
        return false;
    }

    //输入内容分割为数组
    var _value = _inputCon.split(",");
    
    //拿到返回结果
    var result = calculator(parseInt(_value[0]), parseInt(_value[1]), _value[2]);
    _resultCon.innerHTML = result;
}


function calculator(x, y, n) {
    return eval(x + n + y);
}

