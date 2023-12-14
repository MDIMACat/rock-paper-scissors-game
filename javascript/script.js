// getComputerChoice: a function used to generate random indexes based on list
function getComputerChoice () {
    // Array with selection of rock, paper, scissors
    const list = ['rock', 'paper', 'scissors'];
    // Generates a random index value based on list length
    const result = Math.floor(Math.random() * list.length);
    // Displaying the chosen element in the list
    return list[result];
}

// getUserChoice: a function used to get user input using a prompt method
function getUserChoice() {
    const userInput = prompt("Rock, Paper, Scissors: ");
    return userInput.toLowerCase();
}

// Calling the getUserChoice function
const playerSelection = getUserChoice();
// Calling the getComputerChoice function
const computerSelection = getComputerChoice();

// playRound function that shows the potential outcomes from rock, paper, scissors game

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log("It's a tie");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose! Paper beats rock");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win! Rock beats scissors");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats rock");
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log("It's a tie");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You lose! Scissors beats paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose! Rock beats scissors");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win! Scissors beats paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log("It's a tie");
    } else {
        console.log('Invalid entry, Try Again')
    }
}

// Calling the playRound, to play a singleround of rock-paper-scissors
playRound(playerSelection, computerSelection);
