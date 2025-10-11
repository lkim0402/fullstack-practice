let num = "";
const convertBtnEl = document.getElementById("convert-btn");
const userInputEl = document.getElementById("user-input");

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

convertBtnEl.addEventListener("click", function () {
  // get input
  num = userInputEl.value;

  renderConversion(Number(num));
});

function renderConversion(num) {
  /**
   * 1 meter = 3.281 feet
   * 1 liter = 0.264 gallon
   * 1kg = 2.204 pound
   */

  // length
  const stringLength = `
    ${num} meters = ${(num * 3.281).toFixed(3)} feet | ${num} feet = ${(
    num / 3.281
  ).toFixed(3)} meters
    `;
  lengthEl.textContent = stringLength;

  // volume
  const stringVolume = `
    ${num} liters = ${(num * 0.264).toFixed(3)} gallons | ${num} gallons = ${(
    num / 0.264
  ).toFixed(3)} liters
    `;
  volumeEl.textContent = stringVolume;

  // mass
  const stringMass = `
    ${num} liters = ${(num * 2.204).toFixed(3)} gallons | ${num} gallons = ${(
    num / 2.204
  ).toFixed(3)} liters
    `;
  massEl.textContent = stringMass;
}
