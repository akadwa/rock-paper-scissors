// ASK player for their selection of either rock, paper or scissors.
// GET a random selection for the computer

// COMPARE these values to output a result:
    // IF the player selection is the same as the computer selection then output result as a draw.
    // ELSE IF the player selection beats the computer selection then output result as a win for the player as well as increase the player's score by one.
    // ELSE IF the computer selection beats the player selection then output the result as a win for the computer as well as increase the computer's score by one.

// REPEAT this process 5 times

// OUTPUT final results as well as the winner.



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
        playerScore += 1;
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore += 1;
        return "You win! Paper beats rock!";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        return "You win! Scissors beats paper!";
    }
    // player lose conditions:
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        return "You lose! Rock beats scissors!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        return "You lose! Scissors beats paper!";
    }
}

console.log(playRound(playerSelection, computerSelection));
