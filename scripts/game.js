class Game {
    constructor() {
        this.turns = 5;
        this.resultList = [];
        this.currentInput = '';
    }

    getComputerChoice () {
        const list = ['rock', 'paper', 'scissors'];
        const result = Math.floor(Math.random() * list.length);
        return list[result];
    }

    getUserChoice(input) {
        const list = ['rock', 'paper', 'scissors'];
        if (list.includes(input)) {
            this.currentInput = input;
            return this.currentInput.toLowerCase();
        } else {
            return ('Invalid entry, Try Again')
        }
    }

    playRound(playerSelection, computerSelection) {
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

    game () {
        for (let i = 0; i < this.turns; i++)
        {
            const playerSelection = this.getUserChoice(input);
            const computerSelection = this.getComputerChoice();
            const result = this.playRound(playerSelection, computerSelection)
            console.log(result)
            this.resultList.push(result)
        }
        console.log(this.resultList)
    }
}

module.exports = { Game }