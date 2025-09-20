let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');

// Random choice (rock, paper, scissors)
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    })
}

// Play round function
function playRound(user) {
    // Prevent spamming the buttons
    if (userScore >= 5 || computerScore >= 5) {
        return;
    }
    let computer = getComputerChoice();
    let result = "";

    if (user === computer) {
        userScore++;
        computerScore++;
        result = `Draw\nHughmann: ${userScore} - ${computerScore}: Machine\n`;
    } else if (user === "rock" && computer === "scissors" 
        || user === "paper" && computer === "rock"
        || user === "scissors" && computer === "paper") {
        userScore++;
        result = `Win\nHughmann: ${userScore} - ${computerScore}: Machine\n`;
        if (userScore === 5) {
            result += 'Winner. Reload the page to play again'
            disableButtons()
        }
    } else {
        computerScore++;
        result = `Loss\nHughmann: ${userScore} - ${computerScore}: Machine\n`;
        }
        if (computerScore === 5) {
            result += ('Loser. Reload the page to play again');
            disableButtons();
        }

    document.querySelector("#result").innerText = result;
    return;
}

// Play game function
function play() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playRound(button.value);
        })
    })
}

// Main
play()
