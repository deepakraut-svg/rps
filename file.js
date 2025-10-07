const display = document.querySelector("#result");
const hscore = document.querySelector("#human");
const cscore = document.querySelector("#computer");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;

//hscore.textContent = `Human score ${humanScore}!!`;
//cscore.textContent = `Computer score ${computerScore}!!`;

function playGame(buttontext) {
  let playRound = () => {
    let getComputerChoice = () => {
      return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    };

    let computerChoice = getComputerChoice();
    let humanChoice = buttontext;
    console.log(`Your choice is ${humanChoice}`);
    console.log(`Computers choice is ${computerChoice}`);

    if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("You Win! rock crushes scissors!");
        return "Human";
      } else if (computerChoice === "paper") {
        console.log("You Lose! paper covers rock!");
        return "Computer";
      } else {
        console.log("Its a tie!");
        return "Tie";
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You Lose! rock crushes scissors!");
        return "Computer";
      } else if (computerChoice === "paper") {
        console.log("You Win! scissors cut paper!");
        return "Human";
      } else {
        console.log("Its a tie!");
        return "Tie";
      }
    } else {
      if (computerChoice === "rock") {
        console.log("You Win! paper covers rock!");
        return "Human";
      } else if (computerChoice === "scissors") {
        console.log("You Lose! scissors cut paper!");
        return "Computer";
      } else {
        console.log("Its a tie!");
        return "Tie";
      }
    }
  };

  let result = playRound();
  if (result === "Human") {
    humanScore += 1;
  } else if (result === "Computer") {
    computerScore += 1;
  } else {
    humanScore = humanScore;
    computerScore = computerScore;
  }

  hscore.textContent = `Human score ${humanScore}`;
  cscore.textContent = `Machine's score ${computerScore}!!`;

  if (humanScore >= 5) {
    display.textContent = `Congrats you won! Your score is ${humanScore} and  machine's score is ${computerScore}! Make a choice again to start new game!!`;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    display.textContent = `Sorry you lost on! Your score is ${humanScore} and machine's score is ${computerScore}! Make a choice again to start new game!!`;
    humanScore = 0;
    computerScore = 0;
  } else {
    display.textContent = "Continue!!";
  }
}

//rockButton.setAttribute("style", "background-color:cyan;");
//paperButton.setAttribute("style", "background-color:yellow;");
//scissorsButton.setAttribute("style", "background-color:pink;");

rockButton.addEventListener("click", (event) => {
  let result = playGame("rock");
});
paperButton.addEventListener("click", (event) => {
  let result = playGame("paper");
});
scissorsButton.addEventListener("click", (event) => {
  let result = playGame("scissors");
});
