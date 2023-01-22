// ASK player for their selection of either rock, paper or scissors through button options.
// GET a random selection for the computer

// COMPARE these values to output a result:
    // IF the player selection is the same as the computer selection then output result as a draw.
    // ELSE IF the player selection beats the computer selection then output result as a win for the player as well as increase the player's score by one.
    // ELSE IF the computer selection beats the player selection then output the result as a win for the computer as well as increase the computer's score by one.

// DISPLAY a running score

// REPEAT this process until either the player or computer reaches a score of 5.

// OPTION button to replay the game

// OUTPUT final results as well as the winner.



// score variable
let playerScore = 0;
let computerScore = 0;

let playerSelection;

// Selectors
const buttons = document.querySelectorAll('button');
const resultDisplay = document.querySelector('#resultDisplay');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

// Get the computer's random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    // selects random choice from array
    const randomComputerSelection = choices[Math.floor(Math.random() * choices.length)];
    return(randomComputerSelection);
}


// Add event listeners for each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        let computerSelection = getComputerChoice();
        resultDisplay.textContent = (playRound(playerSelection, computerSelection));
        playerScoreDisplay.textContent = `Your score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
        if (playerScore === 5 || computerScore === 5){
            document.body.innerHTML = "";
            // Create a new div which will display the final result
            const finalResultDiv = document.createElement('div');
            finalResultDiv.id = "finalResultDiv";
            finalResultDiv.textContent = (finalResult());
            document.body.appendChild(finalResultDiv);
            // Create a new button which reloads the webpage to restart the game
            const playAgain = document.createElement('button');
            playAgain.id = "playAgainButton";
            playAgain.textContent = "Play again";
            document.body.appendChild(playAgain);
            // Add a click event listener to playAgain button which will reload the page
            playAgain.addEventListener('click', () => {
                window.location.reload();
            })
        }
    });
});

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    // draw condition in case of both the player and computer selecting the same option
    if (playerSelection == computerSelection) {
        return "It's a draw!";
    }
    // player win conditions:
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore ++;
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore ++;
        return "You win! Paper beats rock!";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore ++;
        return "You win! Scissors beats paper!";
    }
    // player lose conditions:
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore ++;
        return "You lose! Rock beats scissors!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore ++;
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore ++;
        return "You lose! Scissors beats paper!";
    }
}

// Function to output the final results of the game
function finalResult() {
    if (playerScore > computerScore) {
        return "CONGRATULATIONS! YOU WIN!";
    }
    else if (computerScore > playerScore) {
        return "BOOHOO, YOU LOSE!";
    }
};