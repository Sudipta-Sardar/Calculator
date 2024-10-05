let cOper = '';
let pOper = '';
let operation = undefined;

function clearDisplay() {
    cOper = '';
    pOper = '';
    operation = undefined;
    updateDisplay('0');
}

function appendNumber(number) {
    if (number === '.' && cOper.includes('.')) return;
    cOper = cOper.toString() + number.toString();
    updateDisplay(cOper);
}

function chooseOperation(op) {
    if (cOper === '') return;
    if (pOper !== '') {
        compute();
    }
    operation = op;
    pOper = cOper;
    cOper = '';
}

function compute() {
    let val;
    const prev = parseFloat(pOper);
    const curr = parseFloat(cOper);
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
    cOper = val;
    operation = undefined;
    pOper = '';
    updateDisplay(cOper);
}

function updateDisplay(content) {
    document.getElementById('display').innerText = content;
}
