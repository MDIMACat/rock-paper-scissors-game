const { outcomeMessages } = require('./helper_object')

class Game {
  constructor() {
    this.userInput = "";    
    this.computerInput = "";
  }

  getComputerChoice() {
    const list = ["rock", "paper", "scissors"];
    const result = Math.floor(Math.random() * list.length);
    this.computerInput = list[result];
    return this.computerInput;
  }

  getUserChoice(input) {
    const list = ["rock", "paper", "scissors"];
    if (list.includes(input)) {
      this.userInput = input;
      return this.userInput.toLowerCase();
    } else {
      return "Invalid entry, Try Again";
    }
  }

  playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
      return outcomeMessages.tie;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      return outcomeMessages.computerWin;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return outcomeMessages.playerWin;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return outcomeMessages.playerWin;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      return outcomeMessages.tie;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      return outcomeMessages.computerWin;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return outcomeMessages.computerWin;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      return outcomeMessages.playerWin;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "scissors"
    ) {
      return outcomeMessages.tie;
    } else {
      return "Invalid entry, Try Again";
    }
  }
}

module.exports = { Game };
