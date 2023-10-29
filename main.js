function add(num1,num2){
    return Number(num1)+Number(num2);
}
function subtract(num1,num2){
    return Number(num1)-Number(num2);
}
function multiply(num1,num2){
    return Number(num1)*Number(num2);
}
function divide(num1,num2){
    return Number(num1)/Number(num2);
}
function remainder(num1,num2){
    return Number(num1)%Number(num2);
}

function operate(num1,num2,operator){
    let result = null;
    if (operator == '+'){
        result = add(num1, num2);
    }else if(operator == '-'){
        result = subtract(num1, num2);
    }else if(operator == '*'){
        result = multiply(num1,num2);
    }else if(operator == '/'){
        result = divide(num1,num2);
    }else if(operator == '%'){
        result = remainder(num1,num2);
    }
    return result;
}

const screen = document.querySelector('#screen-input');

const digits = document.querySelectorAll('.digits');
digits.forEach(digit=> digit.addEventListener('click', digitClick ));

const operators = document.querySelectorAll('.operators');
operators.forEach(operator => operator.addEventListener('click', operatorClick));

let num1 = null;
let num2 = null;
let operator = null;
const operatorRegex = /[+\-/*%]/;

function operatorClick(event){
    if (operatorRegex.test(screen.value)){
        result = operate(num1,num2,operator);
        num1 = result;
        operator = event.target.textContent;
        screen.value = result + operator;
        num2 = null;   
    }else{
        operator = event.target.textContent;
        screen.value+=event.target.textContent;
    }
}

function digitClick(event){
    if (operatorRegex.test(screen.value)){
        num2 = (num2===null)?event.target.textContent:num2+=event.target.textContent;
    }else{
        num1 = (num1===null)?event.target.textContent:num1+=event.target.textContent;
    }
    screen.value += event.target.textContent;
}

equals_button = document.querySelector('.equals');
equals_button.addEventListener('click', ()=>{
    result = operate(num1,num2,operator);
    screen.value = result;
    num1 = result;
    num2 = null;
})

all_clear_button = document.querySelector('.all-clear');
all_clear_button.addEventListener('click', ()=>{
    num1 = null;
    num2 = null;
    operator = null;
    screen.value='';
});

clear_button = document.querySelector('.clear');
clear_button.addEventListener('click', clear);
function clear(){
    if (operatorRegex.test(screen.value.slice(-1))){
        operator = null;
    }else if (operatorRegex.test(screen.value)){
        num2 = num2.toString().slice(0,-1);
    }else{
        num1 = num1.toString().slice(0,-1);
    }
    screen.value = screen.value.slice(0,-1);
}