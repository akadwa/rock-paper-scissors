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

