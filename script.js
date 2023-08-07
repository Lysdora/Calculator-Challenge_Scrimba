let num1 = 8;
let num2 = 2;

let additionEL = document.querySelector('.add');
let subtractEl = document.querySelector('.subtract');
let divideEl = document.querySelector('.divide');
let multiplyEl = document.querySelector('.multiply');

let sumNumber = document.getElementById('sum-el');
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

additionEL.addEventListener('click', add);
function add() {
  let result = num1 + num2;
  //console.log(result);
  sumNumber.textContent = `Sum: ${result}`;
}

subtractEl.addEventListener('click', substraction);
function substraction() {
  let result = num1 - num2;
  //console.log(result);
  sumNumber.textContent = `Sum: ${result}`;
}

divideEl.addEventListener('click', divide);
function divide() {
  let result = num1 / num2;
  sumNumber.textContent = `Sum: ${result}`;
}

multiplyEl.addEventListener('click', multiply);
function multiply() {
  let result = num1 * num2;
  sumNumber.textContent = `Sum: ${result}`;
}
