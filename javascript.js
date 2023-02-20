const screen = document.getElementById('screen');
let tape = '';

let zero = document.getElementById('zero');
zero.addEventListener('click', () => {
    tape += '0'; 
    screen.textContent = tape;
});

let one = document.getElementById('one');
one.addEventListener('click', () => {
    tape += '1'; 
    screen.textContent = tape;
});

let two = document.getElementById('two');
two.addEventListener('click', () => {
    tape += '2'; 
    screen.textContent = tape;
});

let three = document.getElementById('three');
three.addEventListener('click', () => {
    tape += '3'; 
    screen.textContent = tape;
});

let four = document.getElementById('four');
four.addEventListener('click', () => {
    tape += '4'; 
    screen.textContent = tape;
});

let five = document.getElementById('five');
five.addEventListener('click', () => {
    tape += '5';
    screen.textContent = tape; 
});

let six = document.getElementById('six');
six.addEventListener('click', () => {
    tape += '6';
    screen.textContent = tape;
});

let seven = document.getElementById('seven');
seven.addEventListener('click', () => {
    tape += '7';
    screen.textContent = tape;
});

let eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    tape += '8';
    screen.textContent = tape;
});

let nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    tape += '9';
    screen.textContent = tape;
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    tape = '';
    screen.textContent = tape;
});

