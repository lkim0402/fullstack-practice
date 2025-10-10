let castle = {
  location: "Germany",
  rented: false,
};

let person = {
  name: "Leejun",
  age: 23,
  country: "South Korea",
};

function logData() {
  let sentence =
    person.name +
    " is " +
    person.age +
    " years old and lives in " +
    person.country;
  console.log(sentence);
}

// logData();

let age = 6;
function ageCheck() {
  if (age < 6) {
    console.log("free");
  } else if (age <= 17) {
    console.log("child discount");
  } else if (age <= 26) {
    console.log("student discount");
  } else if (age <= 66) {
    console.log("full price");
  } else {
    console.log("senior citizen discount");
  }
}

// ageCheck();

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// console.log(largeCountries);
largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan");
// console.log(largeCountries);

let hands = ["rock", "paper", "scissor"];
function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
// console.log(getHand());

/**
 * Template String
 */
const recipient = "James";
const sender = "Leejun";
const email = `
  Hey ${recipient}! 
  How is it going? 
  Cheers ${sender}`;
console.log(email);
