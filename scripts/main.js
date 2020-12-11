//DOM declarations
const choices = document.querySelectorAll(".choices");
const table = document.querySelector("#matchHistory");
const innerTable = document.querySelector("#innerTable");
const userScoreQuery = document.querySelector("#userScoreNum");
const compScoreQuery = document.querySelector("#compScoreNum");
const winResult = document.querySelector("#winResult");
const loseResult = document.querySelector("#loseResult");
const playAgain = document.querySelectorAll(".playAgain");

// Variable declarations
let roundsPlayed = 0;
let userScore = 0;
let compScore = 0;

//Game start
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (userScore < 5 && compScore < 5) {
      if (roundsPlayed === 0) {
        firstRound(choice.dataset.hand);
      } else {
        game(choice.dataset.hand);
      }
    }
  });
});

// Computer selection
function compSelFunc() {
  randomPick = Math.floor(Math.random() * 3);
  switch (randomPick) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "error";
  }
}

//Round function
function playRound(userSel, compSel) {
  if (userSel === compSel) {
    return "DRAW";
  } else if (userSel === "rock") {
    if (compSel === "scissors") {
      return "WIN";
    } else if (compSel === "paper") {
      return "LOSE";
    }
  } else if (userSel === "scissors") {
    if (compSel === "rock") {
      return "LOSE";
    } else if (compSel === "paper") {
      return "WIN";
    }
  } else if (userSel === "paper") {
    if (compSel === "rock") {
      return "WIN";
    } else if (compSel === "scissors") {
      return "LOSE";
    }
  } else {
    return "Invalid input";
  }
}

//Add row function

function addRow(roundNum, userSel, compSel, roundResult) {
  let userSelCaps = userSel.toUpperCase();
  let compSelCaps = compSel.toUpperCase();
  let row = innerTable.insertRow(-1);
  row.classList.add("round");
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerHTML = `ROUND ${roundNum}`;
  cell2.innerHTML = userSelCaps;
  cell3.innerHTML = compSelCaps;
  cell4.innerHTML = roundResult;
}

//First round function

function firstRound(userInput) {
  table.style.opacity = "100%";

  game(userInput);
}

//Game function
function game(userInput) {
  let userSel = userInput;
  let compSel = compSelFunc();
  ++roundsPlayed;
  let roundNum = roundsPlayed;

  let roundResult = playRound(userSel, compSel);
  addRow(roundNum, userSel, compSel, roundResult);

  switch (roundResult) {
    case "WIN":
      userScore++;
      break;
    case "LOSE":
      compScore++;
      break;
    default:
      break;
  }

  if (userScore === 5) {
    winResult.style.cssText = "opacity: 100%; z-index: 3";
  } else if (compScore === 5) {
    loseResult.style.cssText = "opacity: 100%; z-index: 3";
  }

  userScoreQuery.textContent = userScore;
  compScoreQuery.textContent = compScore;
}

//Play again button

playAgain.forEach((playAgainButton) => {
  playAgainButton.addEventListener("click", () => window.location.reload());
});
