# Rock, Paper, Scissors GUI Game

This is a simple GUI-based Rock, Paper, Scissors game implemented in JavaScript with a basic user interface created using HTML and CSS. The JavaScript files are bundled using Webpack.

## How to Play

1. **Clone Repository**: Clone this repository to your local machine.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install the required dependencies.
3. **Build the Project**: Run `npm run build` to bundle the JavaScript files using Webpack.
4. **Open in Browser**: Open the `index.html` file in your preferred web browser.
5. **Play Game**: Use the GUI to choose rock, paper, or scissors for each round.
6. **View Results**: The results of each round will be displayed on the screen.
7. **Reset**: The game will continue until you click the reset button, and the results of each round will be displayed on the screen.
8. 

## Files

- `images/`: Contains images being displayed in the GUI.
- `dist/bundle.js`: Contains the bundled JavaScript logic for the game logic.
- `scripts/script.js`: Contains the JavaScript code for the game logic.
- `scripts/game.js`: Contains the Game class used for the game logic.
- `scripts/helper_object.js`: Contains a outcome object used for the game logic.
- `styles/style.css`: CSS file for styling the game.
- `index.html`: HTML file for displaying the game interface.
- `webpack.config.js`: Configuration file for Webpack.
- `package.json`: Lists the project dependencies and scripts.

## Functions

- **getComputerChoice**: Generates a random choice (rock, paper, or scissors) for the computer.
- **getUserChoice**: Captures the user's choice from the GUI.
- **playRound**: Determines the winner of a single round based on the player's and computer's choices.

## Future Improvements

- Enhance the user interface with more advanced styling.
- Display the overall winner at the end of the game.
- Add sound effects for a more immersive experience.

## Technologies Used

- JavaScript
- HTML
- CSS
- Webpack

## Author

This Rock, Paper, Scissors game was created by Siduduzile Snenhlanhla Mdima.

Feel free to contribute to the project by submitting pull requests or reporting issues on the GitHub repository.
