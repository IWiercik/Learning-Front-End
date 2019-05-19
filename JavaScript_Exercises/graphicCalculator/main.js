let currentNumber;
let operation;
let flag = false;
let input = document.querySelector('input');

function getNumber(number) {
    input.value += number;
    flag = true;
}

function getOperand(operand) {
    if (input.value.length == 0) {} else {
        if (flag == true) {
            input.value += operand;
            flag = false;
        }
    }
}

function result() {
    input.value = eval(input.value);
}

function clearInput() {
    input.value = " ";
    flag = false;
}

function backspace() {
    flag = true;
    let leng = input.value.length;
    input.value = input.value.substring(0, leng - 1);

}

function getBracket(operand) {
    input.value += operand;
}