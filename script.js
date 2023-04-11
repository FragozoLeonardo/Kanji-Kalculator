const btnNumber = document.querySelectorAll(".btn-number");
const displayElement = document.getElementById("display");
let currentValue = "";
btnNumber.forEach((button) => {
  button.addEventListener("click", function () {
    const number = this.getAttribute("data-num");
    if (number === ".") {
      if (!currentValue.includes(".")) {
        currentValue += number;
      }
    } else {
      if (currentValue === "0") {
        if (number !== "0") {
          currentValue = number;
        }
      } else {
        if (currentValue.length < 16) {
          currentValue += number;
        }
      }
    }
    if (currentValue.length > 1 && currentValue[0] === "0" && currentValue[1] !== ".") {
      currentValue = currentValue.slice(1);
    }
    displayElement.textContent = currentValue;
  });
});

var btnOperation = document.getElementsByClassName("btn-op");

for (var i = 0; i < btnOperation.length; i++) {
  btnOperation[i].addEventListener("click", function () {
    var operation = this.getAttribute("data-op");

    var displayElement = document.getElementById("display");
    if (displayElement) {
      displayElement.textContent = operation;
    } else {
      console.error('Element with ID "display" not found');
    }
  });
}

var btnClear = document.getElementsByClassName("btn-clear");

for (var i = 0; i < btnClear.length; i++) {
  btnClear[i].addEventListener("click", function () {
    var clear = this.getAttribute("data-clear");

    var displayElement = document.getElementById("display");
    if (displayElement) {
      currentValue = "0";
      displayElement.textContent = currentValue;
    } else {
      console.error('Element with ID "display" not found');
    }
  });
}