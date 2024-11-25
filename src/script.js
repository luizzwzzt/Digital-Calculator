let display = document.getElementById("display");
let currentInput = ""; 

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = currentInput;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculatePercentage() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) * 0.01).toString();
        display.value = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Erro";
        currentInput = "";
    }
}

document.querySelector('button:nth-child(17)').addEventListener('click', function() {
    calculatePercentage();
});

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key)) {
        appendToDisplay(key);
    }
    else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        appendToDisplay(key);
    }
    else if (key === 'Enter') {
        calculate();
    }
    else if (key === 'Backspace') {
        deleteLast();
    }
    else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
    else if (key === '%') {
        calculatePercentage();
    }
    event.preventDefault();
});
