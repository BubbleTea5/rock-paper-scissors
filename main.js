// Variable declarations
let userSel;
let compSel;
let userScore = 0;
let compScore = 0;

// Computer selection
function compSelFunc() {
  randomPick = Math.floor(Math.random() * 3);
  switch (randomPick) {
    case 0:
      compSel = "rock";
      break;
    case 1:
      compSel = "paper";
      break;
    case 2:
      compSel = "scissors";
      break;
    default:
      compSel = "error";
      break;
  }
}

//User input
function userSelFunc() {
  let userPrompt = window.prompt("Choose rock, paper, or scissors");
  userSel = userPrompt.toLowerCase();
}

// Round function
function calculateRound() {
  compSelFunc();

  userSelFunc();

  // Logging choices
  console.log(
    `Player: ${capitalize(userSel)} Computer: ${capitalize(compSel)}`
  );

  // Game logic
  if (userSel === compSel) {
    return "Draw";
  } else if (userSel === "rock") {
    if (compSel === "scissors") {
      return "You win! Rock beats scissors.";
    } else if (compSel === "paper") {
      return "You lose! Paper beats rock.";
    }
  } else if (userSel === "scissors") {
    if (compSel === "rock") {
      return "You lose! Rock beats scissors.";
    } else if (compSel === "paper") {
      return "You win! Scissors beats paper.";
    }
  } else if (userSel === "paper") {
    if (compSel === "rock") {
      return "You win! Paper beats rock.";
    } else if (compSel === "scissors") {
      return "You lose! Scissors beats paper.";
    }
  } else {
    return "Invalid input";
  }
}

function roundCalc() {
  let roundResult = calculateRound();
  console.log(roundResult);

  if (roundResult.includes("win") === true) {
    userScore++;
  } else if (roundResult.includes("lose") === true) {
    compScore++;
  }
}

function game() {
  userScore = 0;
  compScore = 0;
  console.log("Round 1");
  roundCalc();
  console.log("Round 2");
  roundCalc();
  console.log("Round 3");
  roundCalc();
  console.log("Round 4");
  roundCalc();
  console.log("Round 5");
  roundCalc();
  console.log(`Player: ${userScore} Computer: ${compScore}`);

  if (userScore > compScore) {
    console.log("Computer Wins!");
  } else if (userScore < compScore) {
    console.log("Player Wins!");
  } else if (userScore === compScore) {
    console.log("It's a tie!");
  }
}

// Helper functions
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

/* Rock Paper Scissors Requirements:

[x] Random computer generated input
[x] Function for 1 round
    [x] Takes in userinput and computerinput
    [x] Player input different
[x] Function for game
    [] Best of 5
[] Score tracking
[] overall winner

*/
