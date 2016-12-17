'use strict';


var _result = document.getElementById("result");


//绑定回车
function bindEnter() {
    if (event.keyCode == 13) {
        event.cancelBubble = true;
        event.returnValue = false;
        studentScore();
    }
}

function studentScore() {
    var _score = document.getElementById("score_input").value;

    //验证非空
    if (_score == "") {
        alert("请输入分数...");
        return false;
    }

    //验证是否数字
    var num = /^[0-9]+.?[0-9]*$/;
    if (!num.test(_score)) {
        alert("请输入数字");
        return false;
    }

    //判断成绩
    var x;
    switch (true) {
        case _score < 100 && _score >= 90:
            x = "一等生";
            break;
        case _score < 90 && _score >= 80:
            x = "二等生";
            break;
        case _score < 80 && _score >= 70:
            x = "三等生";
            break;
        case _score < 70 && _score >= 60:
            x = "四等生";
            break;
        case _score < 60 && _score >= 50:
            x = "五等生";
            break;
        default :
            x = "六等生";
    }

    //显示结果
    _result.innerHTML = x;
}

