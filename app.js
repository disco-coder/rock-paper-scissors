// Variables for player scores
let playerWins = 0;
let computerWins = 0;
const playerRoll = document.querySelector("#playerRoll");
const computerRoll = document.querySelector("#computerRoll");
const roundResult = document.querySelector("#roundResult");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const announcer = document.querySelector("#announcer");


// Buttons is a node list (looks and acts similarly to an array)
const buttons = document.querySelectorAll("button");

// Use .forEach to iterate through each button in the node list
buttons.forEach((button) => {
  
    // Add "click" event listener to each button
    button.addEventListener("click", (e) => {
    playRound(button.id, computerPlay())
    })
})

// Randomly choose what computer plays
function computerPlay() {
    let randomRoll = Math.random()
    if (randomRoll < (1/3)) {
        return "rock";
    } else if (randomRoll > (1/3) && randomRoll < (2 * 1/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function declareWinner() {
    if (playerWins === 5) {
        announcer.textContent = "YOU WIN THIS GAME";
        computerWins = 0;
        playerWins = 0;
    }
    if (computerWins === 5) {
        announcer.textContent = "COMPUTER WINS THE GAME";
        computerWins = 0;
        playerWins = 0;
    }
}

// Plays one round of the game
function playRound(playerSelection, computerSelection) {
    if (playerWins === 0 && computerWins === 0) {
        announcer.textContent = "";
    }
  
    // Compare rolls, declare winner and update player scores
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = "Computer plays rock";
            roundResult.textContent = "It's a draw!";
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        } else if (computerSelection == "paper") {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = `Computer plays ${computerSelection}`;
            roundResult.textContent = "Paper beats rock, you lose!";
            ++computerWins;
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        } else {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = `Computer plays ${computerSelection}`;
            roundResult.textContent = "Rock beats scissors, you win!";
            ++playerWins;
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = `Computer plays ${computerSelection}`;
            roundResult.textContent = "It's a draw!";
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        } else if (computerSelection == "rock") {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = `Computer plays ${computerSelection}`;
            roundResult.textContent = "Paper beats rock, you win!";
            ++playerWins;
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        } else {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = `Computer plays ${computerSelection}`;
            roundResult.textContent = "Scissors beat paper, you lose!";
            ++computerWins;
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        }
    } else {
        if (computerSelection == "scissors") {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = `Computer plays ${computerSelection}`;
            roundResult.textContent = "It's a draw!";
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        } else if (computerSelection == "paper") {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = `Computer plays ${computerSelection}`;
            roundResult.textContent = "Scissors beat paper, you win!";
            ++playerWins;
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        } else {
            playerRoll.textContent = `You played ${playerSelection}`;
            computerRoll.textContent = `Computer plays ${computerSelection}`;
            roundResult.textContent = "Rock beats scissors, you lose!";
            ++computerWins;
            playerScore.textContent = `Player ${playerWins}  -  `;
            computerScore.textContent = `${computerWins} Computer`;
            declareWinner()
            return
        }
    }    
}