let hasBlackjack = false;
let isAlive = true;
let message;
let sum;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let cards;

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  console.log(sum);
  renderAllCards();
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
}

function newCard() {
  if (!hasBlackjack && isAlive) {
    console.log("Drawing new card!");
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

function renderAllCards() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  //   cardsEl.textContent += cards;
}

function getRandomCard() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num === 1) {
    console.log("num === 1, returning 11");
    return 11;
  } else if (num > 10) {
    console.log("num > 10, returning 10");
    return 10;
  } else {
    return num;
  }
}
