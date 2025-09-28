let humanScore = 0;
let computerScore = 0;

function playGame() {
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
  };

  for (let i = 0; i <= 4; i++) {
    playRound();
  }

  return 0;
}

playGame();
