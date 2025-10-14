/**
 * ternary
 */
let message = "";
let time = 30;
message =
  time < 30
    ? "you need to try harder!"
    : time < 60
    ? "doing good"
    : "excellent!";
// console.log(message);

const playerGuess = 13;
const correctAnswer = 6;
// console.log(
//   playerGuess === correctAnswer
//     ? "Correct!"
//     : playerGuess < correctAnswer
//     ? "too low!"
//     : "too high!"
// );

/**
 * object desctructuring
 */
const favFood = {
  meal: "ramen",
  drink: "mango smoothie",
};
const { meal } = favFood;
// console.log("meal: " + meal);

/**
 * setTimeout
 */
function displayTrafficLight(light) {
  console.log(light);
}

// const test = setTimeout(displayTrafficLight, 3000, "red");

// setTimeout(
//   function (string) {
//     console.log("test string: " + string);
//   },
//   3000,
//   "this is a test string!"
// );

const start = performance.now();

// setTimeout(() => {
//   const end = performance.now();
//   console.log(`Execution time: ${end - start} milliseconds`);
// });

// import { studentsArr } from "./test/test";
// console.log(studentsArr[0].name);

/**
 * Date constructor
 */
const dateObject = new Date();
// console.log(dateObject.toString());
// console.log(dateObject.getFullYear());

/**
 * Error constructor
 */
function checkUsername(usernName) {
  if (usernName) {
    console.log(userName);
  } else {
    throw new Error("No username");
  }
}
// checkUsername();

const getSpendAlert = function (amount) {
  return `Warning! you just spent ${amount}`;
};

const getSpendAlertArrow = (amount) =>
  amount > 10 ? `Warning! you just spent ${amount}` : null;

// console.log(getSpendAlertArrow(133));

const speedLimit = (limit, speed) =>
  speed > limit ? `You're going at ${speed} mph!` : `You're good`;

const distanceTraveledMiles = [344, 63, 346, 236, 246];
const distanceTraveledKm = distanceTraveledMiles.map((distance) =>
  Math.round(distance * 1.6)
);

function f(first, second, ...args) {
  args.forEach((num) => console.log("this is num: " + num));
}
f(3, "hey", 4, 5, 7);
