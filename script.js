let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = null;

const buttons = document.querySelectorAll('.btn-num, .btn-opr, .btn-clr, .btn-eql');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const { target } = event;

    if (target.classList.contains('btn-num')) {
      handleNumberInput(target.dataset.num);
    } else if (target.classList.contains('btn-opr')) {
      handleOperatorInput(target.dataset.op);
    } else if (target.classList.contains('btn-eql')) {
      handleEqualsInput();
    } else if (target.classList.contains('btn-clr')) {
      handleClearInput();
    }
  });
});

function handleNumberInput(number) {
  if (number === ',' || number === '.') {
    number = '.';
  }

  if (operator === '') {
    firstOperand += number;
    updateDisplay(firstOperand);
  } else {
    secondOperand += number;
    updateDisplay(secondOperand);
  }
}

function handleOperatorInput(op) {
  if (firstOperand === '') {
    return;
  }

  if (secondOperand !== '') {
    handleEqualsInput();
  }

  operator = op;
}

function handleEqualsInput() {
  if (operator === '' || secondOperand === '') {
    return;
  }

  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);

  switch (operator) {
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
      return;
  }

  updateDisplay(result);
  firstOperand = result.toString();
  secondOperand = '';
  operator = '';
}

function handleClearInput() {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  result = null;
  updateDisplay('0');
}

function updateDisplay(value) {
  const display = document.getElementById('display');
  display.textContent = value;
}
