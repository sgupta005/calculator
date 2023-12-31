function add(num1,num2){
    return (Number(num1)+Number(num2)).toFixed(3);
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

function limitToThreeDecimalPlaces(number){
    let roundedNumber = Math.round(number*1000)/1000;
    return roundedNumber;
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
    return limitToThreeDecimalPlaces(result);
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
    let key = event.target.textContent || event.key;
    if (!operatorRegex.test(screen.value.slice(-1)) && screen.value){
        if (operatorRegex.test(screen.value)){
            result = operate(num1,num2,operator);
            num1 = result;
            operator = key;
            screen.value = result + operator;
            num2 = null;   
        }else{
            operator = key;
            screen.value+=key;
        }
    }
}

function digitClick(event){
    let key = event.target.textContent || event.key;
    if (operatorRegex.test(screen.value)){
        num2 = (num2===null)?key:num2+=key;
    }else{
        num1 = (num1===null)?key:num1+=key;
    }
    screen.value += key;
}

equals_button = document.querySelector('.equals');
equals_button.addEventListener('click', equalsClick)
function equalsClick(){
    if (!(num1===null || num2===null || operator===null)){
        result = operate(num1,num2,operator);
        screen.value = result;
        num1 = result;
        num2 = null;
    }
}

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

decimal_button = document.querySelector('.decimal');
decimal_button.addEventListener('click', decimalClick);
function decimalClick(event){
    if (screen.value.slice(-1)!=='.' && screen.value &&!operatorRegex.test(screen.value.slice(-1))){
        if (operatorRegex.test(screen.value)){
            num2+=event.target.textContent;
        }else{
            num1+=event.target.textContent;
        }
        screen.value += event.target.textContent;
    }
}

screen.addEventListener('keydown', function(event){
    event.preventDefault();
    const key = event.key;
    const digits = '0,1,2,3,4,5,6,7,8,9';
    if (operatorRegex.test(key)){
        operatorClick(event);
    }else if (digits.includes(key)){
        digitClick(event);
    }else if (key==='Enter'){
        equalsClick();
    }else if (key==='Backspace'){
        clear();        
    }
})

