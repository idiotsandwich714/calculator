const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.buttons');
const tape = calculator.querySelector('.screen');

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

        calculator.dataset.firstNumber = tapeValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if (type === 'equals') {
        // Perform the calculation and display the result on the screen
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = tapeValue;
        tape.textContent = operate(firstNumber, operator, secondNumber);
        
        // Removes highlight from last selected operator key
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(element => element.dataset.state = '');
    }
    calculator.dataset.previousKeyType = type;
})

function operate (num1, operator, num2) {
    if (operator === 'plus') {
        return Math.round((+num1 + +num2) * 10000) / 10000;
    } else if (operator === 'minus') {
        return Math.round((+num1 - +num2) * 10000) / 10000;
    } else if (operator === 'multiply') {
        return Math.round((+num1 * +num2) * 10000) / 10000;
    } else if (operator === 'divide') {
        return Math.round((+num1 / +num2) * 10000) / 10000;
    }
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    tape.textContent = '0';

    // Removes highlight from last selected operator key
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach(element => element.dataset.state = '');
})

// Next Steps:
// Display result if an operator is selected again after the second number input and continue calculation
// Keyboard functionality
