// JavaScript for Simple Calculator

// Function to get input values and validate them
function getInputs() {
  const num1 = parseFloat(document.getElementById('number1').value) || 0;
  const num2 = parseFloat(document.getElementById('number2').value) || 0;
  return { num1, num2 };
}

// Function to display the result
function displayResult(result) {
  document.getElementById('calculation-result').textContent = result;
}

// Arithmetic operations
function add() {
  const { num1, num2 } = getInputs();
  const result = num1 + num2;
  displayResult(result);
}

function subtract() {
  const { num1, num2 } = getInputs();
  const result = num1 - num2;
  displayResult(result);
}

function multiply() {
  const { num1, num2 } = getInputs();
  const result = num1 * num2;
  displayResult(result);
}

function divide() {
  const { num1, num2 } = getInputs();
  if (num2 === 0) {
      displayResult('Error: Division by zero');
  } else {
      const result = num1 / num2;
      displayResult(result);
  }
}

// Attach event listeners to buttons
document.getElementById('add').addEventListener('click', add);
document.getElementById('subtract').addEventListener('click', subtract);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);
