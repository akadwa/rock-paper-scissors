// Variable to get the computer's selection
const computerSelection = getComputerChoice();

// Variable to get the player's selection
const playerSelection = ('scissors').toLowerCase();
console.log(playerSelection);

// score variable
let playerScore = 0;
let computerScore = 0;

// Get the computer's random choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    // selects random choice from array
    const randomComputerSelection = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    console.log(randomComputerSelection);
    return(randomComputerSelection);
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    // draw condition in case of both the player and computer selecting the same option
    if (playerSelection == computerSelection) {
        return "It's a draw!";
    }
    // player win conditions:
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return "You win! Paper beats rock!";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper!";
    }
    // player lose conditions:
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper!";
    }
}