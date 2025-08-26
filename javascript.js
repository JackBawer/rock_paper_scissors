// Random choice (rock, paper, scissors)
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Get user's choice
function getUserChoice() {
  while (true) {
    let userChoice = prompt("Rock🗿, paper📜, or scissors✂!");
    userChoice = userChoice.toLowerCase();
    if (
      userChoice === "rock" ||
      userChoice === "paper" ||
      userChoice === "scissors"
    ) {
      return userChoice;
    }
    console.log("Enter rock🗿, paper📜, or scissors✂, please!");
  }
}

// play game

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  // Play round
  function playRound(getUserChoice, getComputerChoice) {
    user = getUserChoice;
    computer = getComputerChoice;

    if (user === "rock") {
      if (computer === "rock") {
        console.log(
          "Draw!\nThe score is: " + userScore + " : " + computerScore,
        );
        return;
      }
      if (computer === "paper") {
        computerScore++;
        console.log(
          "You lose! Paper📜 beats Rock🗿\nThe score is: " +
            userScore +
            " : " +
            computerScore,
        );
        return;
      }
      if (computer === "scissors") {
        userScore++;
        console.log(
          "You win! Rock🗿 beats scissors✂\nThe score is: " +
            userScore +
            " : " +
            computerScore,
        );
        return;
      }
    } else if (user === "paper") {
      if (computer === "paper") {
        console.log(
          "Draw!\nThe score is: " + userScore + " : " + computerScore,
        );
        return;
      }
      if (computer === "rock") {
        userScore++;
        console.log(
          "You win! Paper📜 beats Rock🗿\nThe score is: " +
            userScore +
            " : " +
            computerScore,
        );
        return;
      }
      if (computer === "scissors") {
        computerScore++;
        console.log(
          "You lose! Scissors✂ beats Paper📜\nThe score is: " +
            userScore +
            " : " +
            computerScore,
        );
        return;
      }
    } else {
      if (computer === "scissors") {
        console.log(
          "Draw!\nThe score is: " + userScore + " : " + computerScore,
        );
        return;
      }
      if (computer === "rock") {
        computerScore++;
        console.log(
          "You lose! Rock🗿 beats Scissors✂\nThe score is: " +
            userScore +
            " : " +
            computerScore,
        );
        return;
      }
      if (computer === "paper") {
        userScore++;
        console.log(
          "You win! Scissors✂ beats Paper📜\nThe score is: " +
            userScore +
            " : " +
            computerScore,
        );
        return;
      }
    }
  }
  const numRounds = 5;

  while (userScore <= numRounds || computerScore <= numRounds) {
    const userSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    if (userScore === numRounds) {
      console.log(
        "You win the game!\nThe score is: " + userScore + " : " + computerScore,
      );
      return;
    }
    if (computerScore === numRounds) {
      console.log(
        "You lose the game...\nThe score is: " +
          userScore +
          " : " +
          computerScore,
      );
      return;
    }
  }
}

// Main function

playGame();
