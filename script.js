let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = null;

const buttons = document.querySelectorAll('.btn-num, .btn-opr, .btn-clr, .btn-eql');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = event.target;
    const isNumber = target.classList.contains('btn-num');
    const isOperator = target.classList.contains('btn-opr');
    const isEquals = target.classList.contains('btn-eql');
    const isClear = target.classList.contains('btn-clr');

    if (isNumber) {
      handleNumberInput(target.dataset.num);
    } else if (isOperator) {
      handleOperatorInput(target.dataset.op);
    } else if (isEquals) {
      handleEqualsInput();
    } else if (isClear) {
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
  } else {
    secondOperand += number;
  }
  updateDisplay(getCurrentOperand());
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

  firstOperand = result.toString();
  secondOperand = '';
  operator = '';
  updateDisplay(result);
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

function getCurrentOperand() {
  return secondOperand === '' ? firstOperand : secondOperand;
}
