function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let playRound = () => {
    let getComputerChoice = () => {
      return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    };

    let getHumanChoice = () => {
      return prompt(" Make a choice between rock, paper and scissors");
    };
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice().toLowerCase();
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
  /*
  for (let i = 0; i <= 4; i++) {
    let result = playRound();
    if (result === "Human") {
      humanScore += 1;
    } else if (result === "Computer") {
      computerScore += 1;
    } else {
      humanScore = humanScore;
      computerScore = computerScore;
    }
  } */

  if (humanScore > computerScore) {
    console.log(
      `Congrats you won! Your score at end of 5 rounds is ${humanScore} and computers score is ${computerScore}!`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Sorry you lost on! Your score at end of 5 rounds is ${humanScore} and computers score is ${computerScore}!`
    );
  }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.setAttribute("style", "background-color:cyan;");
paperButton.setAttribute("style", "background-color:yellow;");
scissorsButton.setAttribute("style", "background-color:pink;");

rockButton.addEventListener("click", (event) => {
  let result = playRound();
  if (result === "Human") {
    humanScore += 1;
  } else if (result === "Computer") {
    computerScore += 1;
  } else {
    humanScore = humanScore;
    computerScore = computerScore;
  }
});
paperButton.addEventListener("click", (event) => {
  let result = playRound();
  if (result === "Human") {
    humanScore += 1;
  } else if (result === "Computer") {
    computerScore += 1;
  } else {
    humanScore = humanScore;
    computerScore = computerScore;
  }
});
scissorsButton.addEventListener("click", (event) => {
  let result = playRound();
  if (result === "Human") {
    humanScore += 1;
  } else if (result === "Computer") {
    computerScore += 1;
  } else {
    humanScore = humanScore;
    computerScore = computerScore;
  }
});

playGame();
