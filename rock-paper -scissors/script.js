const choices =["ROCK","PAPER","SCISSORS"];
const display = document.getElementById("display")
const resultDisplay = document.getElementById("resultDisplay")
const refresh = document.getElementById("refresh")

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random()*3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S DRAW!"
  } 
  else {
    switch (playerChoice) {
      case "ROCK":
        result = (computerChoice === "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
        break;
        
      case "SCISSORS":
        result = (computerChoice === "PAPER") ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "PAPER":
        result = (computerChoice === "ROCK") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  display.textContent = `YOU ${playerChoice} AND COMPUTER ${computerChoice}`
  resultDisplay.textContent = result
  refresh.textContent = "Play again?"
}

function clear() {
  display.textContent = "";
  resultDisplay.textContent = "";
  refresh.textContent = ""
}

refresh.addEventListener("click", clear);