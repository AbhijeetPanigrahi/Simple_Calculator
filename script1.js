let currentInput = '';
let display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendSymbol(symbol) {
    currentInput += symbol;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}
