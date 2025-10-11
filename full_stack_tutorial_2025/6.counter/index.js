let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  countEl.innerText = ++count;
}

function save() {
  saveEl.textContent += count + " - ";
  countEl.innerText = 0;
  count = 0;
}

let welcomeEl = document.getElementById("welcome-el");
let name = "Leejun";
let greeting = "Hello";
welcomeEl.innerHTML = greeting + ", " + name;
