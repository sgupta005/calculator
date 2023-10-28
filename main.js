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

screen = document.querySelector('#screen-input');
all_clear_button = document.querySelector('.all-clear');
all_clear_button.addEventListener('click', ()=>screen.value = '');

const digits = document.querySelectorAll('.digits');
digits.forEach(digit=> digit.addEventListener('click', ()=>screen.value += digit.textContent ));

const operators = document.querySelectorAll('.operators');
operators.forEach(operator => operator.addEventListener('click', operatorClick));

let num1 = null;
let num2 = null;
let operator = null;
const operatorRegex = /[+\-/*%]/;
function operatorClick(event){
    if (operatorRegex.test(screen.value)){
        values = screen.value.split(operatorRegex);
        num2 = values[1];
        result = operate(num1,num2,operator);
        num1 = result;
        operator = event.target.textContent;
        screen.value = result + operator;
        num2 = null;   
    }else{
        num1 = screen.value;
        operator = event.target.textContent;
        screen.value+=event.target.textContent;
    }
}

equals_button = document.querySelector('.equals');
equals_button.addEventListener('click', ()=>{
    values = screen.value.split(operatorRegex);
    num2 = values[1];
    result = operate(num1,num2,operator);
    screen.value = result;
})
