const buttons = document.querySelectorAll('input');
let result = document.querySelector("#result");

// Random choice (rock, paper, scissors)
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Score function
function getScore(userScore, computerScore) {
    const divScore = document.querySelector(".divScore");
    const score = document.createElement("p");
    score.innerText = `Hughmann ${userScore} - ${computerScore} Machine `;
    divScore.appendChild(score);
}

// Play round function
function playRound(user, computer, userScore, computerScore) {
    if (user === computer) {
        // It's a tie
        getScore(userScore, computerScore);
    } else if (user === "rock" && computer === "scissors" 
        || user === "paper" && computer === "rock"
        || user === "scissors" && computer === "paper") {
        // User wins
        userScore++;
        getScore(userScore, computerScore);
    } else {
        // Computer wins
        computerScore++;
        getScore(userScore, computerScore);
    }

    // Return updated scores
    return { userScore, computerScore };
}

// Play game function
function playGame() {
    let result = "";
    let userScore = 0;
    let computerScore = 0;
    const numRounds = 5;

    // Add event listeners once
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the user's choice and computer's choice
            const userChoice = button.value;
            const computerChoice = getComputerChoice();

            // Play the round and get updated scores
            const scores = playRound(userChoice, computerChoice, userScore, computerScore);
            userScore = scores.userScore;
            computerScore = scores.computerScore;

            // Check for a winner
            if (userScore === numRounds) {
                result = "You win!";
            } else if (computerScore === numRounds) {
                result = "You lose!";
            }
        });
    });
}

// Main function
playGame();

