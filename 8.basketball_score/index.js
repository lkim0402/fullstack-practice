let homeScore = 0;
let guestScore = 0;
document.getElementById("homeScore").textContent = homeScore;
document.getElementById("guestScore").textContent = guestScore;

let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");

function addScore(winner, number) {
  if (winner === "home") {
    homeScore += number;
    homeScoreEl.textContent = homeScore;
  } else {
    guestScore += number;
    guestScoreEl.textContent = guestScore;
  }
}
