var numEl1 = document.getElementById("num1-el");
var numEl2 = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");
let operator = document.getElementById("operator");

function performOperation(operation) {
    try {
        let num1 = parseFloat(numEl1.value);
        let num2 = parseFloat(numEl2.value);

        if (isNaN(num1) || isNaN(num2)) {
            throw "Not a number";
        }

        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                throw "Invalid operation";
        }

        sumEl.textContent = "Result: " + result;
        operator.textContent = operation;
    } catch (err) {
        sumEl.textContent = "Please put in valid numbers";
    }
}

function add() {
    performOperation('+');
}

function subtract() {
    performOperation('-');
}

function multiply() {
    performOperation('*');
}

function divide() {
    performOperation('/');
}
