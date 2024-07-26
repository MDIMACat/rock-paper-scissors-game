const { Game } = require('./game');
const { outcomeMessages } = require('./helper_object')



function createGame(){
    const game = new Game()
    return game
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault()
        let computerScore = 0
        let userScore = 0
        
        const input = document.getElementById('rock-paper-scissors-input-user').value
        const game = createGame()
        const result = game.getUserChoice(input)
        if(result === 'Invalid entry, Try Again'){
            document.getElementById('error-messages').innerText = result
            setTimeout(()=>{
                document.getElementById('error-messages').innerText = ''
            }, 3000)
            document.getElementById('rock-paper-scissors-input-computer').placeholder = ''
        } else {
            const computerAnswer = game.getComputerChoice()
            document.getElementById('rock-paper-scissors-input-computer').placeholder = computerAnswer
            const gameResult = game.playRound(result, computerAnswer)

            if(gameResult === outcomeMessages.computerWin){
                let currentPoints = document.getElementById('computer-score').innerText
                computerScore = parseInt(currentPoints) + 1
                document.getElementById('computer-score').innerText = computerScore;
                
            } else if (gameResult === outcomeMessages.playerWin){
                let currentPoints = document.getElementById('user-score').innerText
                userScore = parseInt(currentPoints) + 1
                document.getElementById('user-score').innerText = userScore;
            } else {
                document.getElementById('error-messages').innerText = gameResult
                setTimeout(()=>{
                    document.getElementById('error-messages').innerText = ''
                }, 3000)
            }
        }
    })
})

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('reset').addEventListener('click', (event) => {
        event.preventDefault()
        document.getElementById('user-score').innerText = 0
        document.getElementById('computer-score').innerText = 0
        document.getElementById('rock-paper-scissors-input-user').value = ''
        document.getElementById('rock-paper-scissors-input-computer').placeholder = ''
    })
})