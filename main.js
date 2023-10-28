function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2
}
function remainder(num1,num2){
    return num1%num2;
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

