let currOper = '';
let prevOper = '';
let operation = undefined;

function clearDisplay() {
    currOper = '';
    prevOper = '';
    operation = undefined;
    updateDisplay('0');
}

function appendNumber(number) {
    if (number === '.' && currOper.includes('.')) return;
    currOper = currOper.toString() + number.toString();
    updateDisplay(currOper);
}

function chooseOperation(op) {
    if (currOper === '') return;
    if (prevOper !== '') {
        compute();
    }
    operation = op;
    prevOper = currOper;
    currOper = '';
}

function compute() {
    let val;
    const prev = parseFloat(prevOper);
    const curr = parseFloat(currOper);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
        case '+':
            val = prev + curr;
            break;
        case '-':
            val = prev - curr;
            break;
        case '*':
            val = prev * curr;
            break;
        case '÷':
            val = prev / curr;
            break;
        default:
            return;
    }
    currOper = val;
    operation = undefined;
    prevOper = '';
    updateDisplay(currOper);
}

function updateDisplay(content) {
    document.getElementById('display').innerText = content;
}
