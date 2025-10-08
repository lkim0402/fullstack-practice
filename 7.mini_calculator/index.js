let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let resultEl = document.getElementById("result-el");

function add() {
  let sum = num1 + num2;
  resultEl.textContent = "Result: " + sum;
}

function subtract() {
  let sum = num1 - num2;
  resultEl.textContent = "Result: " + sum;
}
function divide() {
  let sum = num1 / num2;
  resultEl.textContent = "Result: " + sum;
}
function multiply() {
  let sum = num1 * num2;
  resultEl.textContent = "Result: " + sum;
}
