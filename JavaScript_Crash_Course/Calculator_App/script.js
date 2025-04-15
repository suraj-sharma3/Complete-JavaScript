const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorSelectInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

function calculate() {
  const firstNumber = parseFloat(firstNumberInput.value);
  const secondNumber = parseFloat(secondNumberInput.value);
  const operator = operatorSelectInput.value;
  let result;

  if (isNaN(firstNumber) || isNaN(secondNumber)) { 
    resultParagraph.textContent = 'Please enter a valid number';
    return;
  }

/*   
What is isNaN()?
  isNaN() is a built-in JavaScript function that checks whether a value is "Not-a-Number" (NaN). It returns:
    true if the value is NaN (i.e., not a valid number).
    false if the value is a valid number. 
*/

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      if (secondNumber === 0) { // The === operator is called the strict equality operator. It checks whether two values are equal and of the same type.
        resultParagraph.textContent = 'Division by zero is not allowed';
        return;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      result = 'Invalid operator';
  }

  resultParagraph.textContent = 'Result: ' + result;
}

calculateButton.addEventListener('click', calculate);
