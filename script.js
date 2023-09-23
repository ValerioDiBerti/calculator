function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function display(a) {
    screen.innerText = +parseFloat((+a).toPrecision(14)).toString();
}

let firstNumber;
let secondNumber;
let operation;
let result;

let displayValue = '';

function operate(a, b, operation) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

const screen = document.querySelector('#screen');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (result) {
            result = false;
            displayValue = number.innerText;
        } else {
            displayValue += number.innerText;
        }
        display(displayValue);
        // alert(number.innerText)
    })
})

const point = document.querySelector('#point');
point.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    displayValue = '';
    operation = '';
    display(0);
})

const operations = document.querySelectorAll('.operations');
operations.forEach(a => {
    a.addEventListener('click', () => {
        if (operation) {
            secondNumber = +displayValue;
            firstNumber = operate(firstNumber, secondNumber, operation);
            display(firstNumber);
        } else {
            firstNumber = +displayValue;
        }
        
        displayValue = '';
        operation = a.id;

    })
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    secondNumber = +displayValue;
    displayValue = operate(firstNumber, secondNumber, operation).toString();
    display(displayValue)
    operation = '';
    
    result = true;
})


const sign = document.querySelector('#sign');
sign.addEventListener('click', () => {
    if (displayValue.includes('-')) {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    }
    display(displayValue);
})

const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    displayValue = multiply(+displayValue, 0.01).toString();
    display(displayValue);
})