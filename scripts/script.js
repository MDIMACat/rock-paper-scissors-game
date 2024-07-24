const { Game } = require('./game');
const { outcomeMessages } = require('./helper_object')



function createGame(){
    const game = new Game()
    return game
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault()
        
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
                
            } else if (gameResult === outcomeMessages.playerWin){
                
            } else if (gameResult === outcomeMessages.tie){

            } else {
                document.getElementById('error-messages').innerText = gameResult
                setTimeout(()=>{
                    document.getElementById('error-messages').innerText = ''
                }, 3000)
            }
        }
    })
})