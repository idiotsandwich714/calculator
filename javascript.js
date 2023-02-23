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

function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}


const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.buttons');
const tape = calculator.querySelector('.screen');
let operands = [];

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return
    if (event.target.closest('.clear')) return

    const key = event.target;
    const keyValue = key.textContent;
    const tapeValue = tape.textContent;
    const type = key.dataset.type;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (key.classList.contains('empty')) {
        tape.textContent = 'UwUwUwU';
    }

    if (type === 'number') {
        if (tapeValue === '0') {
            tape.textContent = keyValue;
        } else if (previousKeyType === 'operator') {
            tape.textContent = keyValue;
        } else {
            tape.textContent += keyValue;
        }
    } 

    if (type === 'operator') {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(element => element.dataset.state = '');
        key.dataset.state = 'selected';
    }

    if (type === 'equals') {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(element => element.dataset.state = '');

        // const firstNumber;
        // const secondNumber = tapeValue;
    }
    calculator.dataset.previousKeyType = type;
})

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    tape.textContent = '0';
})