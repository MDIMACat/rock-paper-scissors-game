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


// playRound function that shows the potential outcomes from rock, paper, scissors game

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return ("It's a tie");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return ("You lose! Paper beats rock");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return ("You win! Rock beats scissors");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return ("You win! Paper beats rock");
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return ("It's a tie");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return ("You lose! Scissors beats paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return ("You lose! Rock beats scissors");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return ("You win! Scissors beats paper");
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return ("It's a tie");
    } else {
        return ('Invalid entry, Try Again')
    }
}
// Calling the playRound, to play a singleround of rock-paper-scissors

function game () {
    const turns = 5;
    const resultList = [];
    for (let i = 0; i < turns; i++)
    {
        // Calling the getUserChoice function
        const playerSelection = getUserChoice();
        // Calling the getComputerChoice function
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection)
        console.log(result)
        resultList.push(result)
    }
    

    console.log(resultList)

}

game();
   
