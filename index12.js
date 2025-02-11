let firstnum = "";
let op = "";
let Result;
let secondnum="";

function number(num) {
    document.getElementById('input').value += num;
}
function opration(opration) {
    firstnum = document.getElementById('input').value;
    op = opration;
    document.getElementById('input-mini').value = document.getElementById('input').value + op;
    document.getElementById('input').value = "";
}
function result() {
    secondnum = document.getElementById('input').value;
    switch (op) {
        case '+':Result = parseFloat(firstnum) + parseFloat(secondnum);break;
        case '-':Result = parseFloat(firstnum) - parseFloat(secondnum);break;
        case '*':Result = parseFloat(firstnum) * parseFloat(secondnum);break;
        case '/':Result = parseFloat(firstnum) / parseFloat(secondnum);break;
    }
    document.getElementById('input-mini').value += secondnum + "=";
    document.getElementById('input').value = Result
}

function clearInput() {
    document.getElementById('input').value = "";
    document.getElementById('input-mini').value = "";
}