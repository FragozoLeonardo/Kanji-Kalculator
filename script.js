var currentValue = "0";
var selectedOperation = null;
var firstNumber = null;
var result = null;

function updateDisplay() {
  var displayElement = document.getElementById("display");
  if (displayElement) {
    if (currentValue === "0" && selectedOperation) {
      displayElement.textContent = selectedOperation;
    } else {
      displayElement.textContent = currentValue;
    }
  } else {
    console.error('Element with ID "display" not found');
  }
}

function clear() {
  currentValue = "0";
  selectedOperation = null;
  firstNumber = null;
  result = null;
  updateDisplay();
}

function handleNumberClick(number) {
  if (currentValue === "0" || selectedOperation) {
    currentValue = number;
  } else {
    if (currentValue === firstNumber.toString() || currentValue === result.toString()) {
      currentValue = number;
    } else {
      currentValue += number;
    }
  }
  updateDisplay();
}

function handleOperationClick(operation) {
  if (!selectedOperation) {
    selectedOperation = operation;
    firstNumber = parseFloat(currentValue);
    currentValue = "0";
    updateDisplay();
  }
}

function calculate() {
  if (selectedOperation) {
    var displayElement = document.getElementById("display");
    if (displayElement) {
      var secondNumber = parseFloat(currentValue);
      switch (selectedOperation) {
        case "+":
          result = firstNumber + secondNumber;
          break;
        case "-":
          result = firstNumber - secondNumber;
          break;
        case "*":
          result = firstNumber * secondNumber;
          break;
        case "/":
          result = firstNumber / secondNumber;
          break;
      }
      currentValue = result.toString();
      selectedOperation = null;
      firstNumber = null;
      updateDisplay();
    } else {
      console.error('Element with ID "display" not found');
    }
  }
}

var btnClear = document.querySelector(".btn-cln");
btnClear.addEventListener("click", clear);

var btnNumbers = document.querySelectorAll(".btn-num");
btnNumbers.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var number = this.getAttribute("data-num");
    handleNumberClick(number);
  });
});

var btnOperations = document.querySelectorAll(".btn-opr");
btnOperations.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var operation = this.getAttribute("data-op");
    handleOperationClick(operation);
  });
});

var btnEqual = document.querySelector(".btn-eql");
btnEqual.addEventListener("click", calculate);

document.addEventListener("keydown", function (event) {
  var key = event.key;
  if (/\d/.test(key)) {
    handleNumberClick(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperationClick(key);
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Escape") {
    clear();
  }
});