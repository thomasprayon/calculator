console.log('Script attached to HTML file ;)');

// ADD
function add(value1, value2) {
    return value1 + value2;
}

// SUBTRACT
function subtract(value1, value2) {
    return value1 - value2;
}

// MULTIPLY
function multiply(value1, value2) {
    return value1 * value2;
}

// DIVIDE
function divide(value1, value2) {
    return value1 / value2;
}

// OPERATE
function operate(operator, val1, val2) {
    switch (operator) {
        case '+':
            return add(val1, val2);
        case '-':
            return subtract(val1, val2);
        case '*':
            return multiply(val1, val2);
        case '/':
            return divide(val1, val2);
        default:
            return null;
    }
}

operate('+', 5, 5);
