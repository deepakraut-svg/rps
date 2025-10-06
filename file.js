const display = document.querySelector(".result");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let humanScore = 0;
let computerScore = 0;

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

  if (humanScore >= 5) {
    display.textContent = `Congrats you won! Your score at end of 5 rounds is ${humanScore} and computers score is ${computerScore}!`;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    display.textContent = `Sorry you lost on! Your score at end of 5 rounds is ${humanScore} and computers score is ${computerScore}!`;
    humanScore = 0;
    computerScore = 0;
  } else {
    display.textContent = "Continue!!";
  }
}

rockButton.setAttribute("style", "background-color:cyan;");
paperButton.setAttribute("style", "background-color:yellow;");
scissorsButton.setAttribute("style", "background-color:pink;");

rockButton.addEventListener("click", (event) => {
  let result = playGame("rock");
});
paperButton.addEventListener("click", (event) => {
  let result = playGame("paper");
});
scissorsButton.addEventListener("click", (event) => {
  let result = playGame("scissors");
});
