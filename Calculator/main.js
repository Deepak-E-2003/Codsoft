function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteChar() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("result").value += number;
}

function appendOperator(operator) {
    document.getElementById("result").value += operator;
}

function appendDot() {
    let currentValue = document.getElementById("result").value;
    if (!currentValue.includes(".")) {
        document.getElementById("result").value += ".";
    }
}

function calculate() {
    try {
        let result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}