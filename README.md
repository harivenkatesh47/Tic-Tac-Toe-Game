Tic-Tac-Toe Game

Overview : This is a simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. It allows two players to take turns and play the game in a 3x3 grid. The game checks for a winner and declares the result accordingly.


Features

    ->Two-player game with Player 1 (P1) and Player 2 (P2)
    ->Winning conditions implemented with predefined patterns
    ->Draw detection when all boxes are filled with no winner
    ->Reset button to start a new game
    ->Responsive design with a visually appealing interface

Technologies Used

    ->HTML for the structure
    ->CSS for styling
    ->JavaScript for game logic

How to Play

    Open the index.html file in a browser.
    
    Players take turns clicking on empty boxes.
    
    Player 1 (P1) starts first, followed by Player 2 (P2).
    
    The game automatically detects a winner or a draw.
    
    If a player wins, a message is displayed, and the game is disabled.
    
    Click New Game or Reset Game to restart.

Project Structure

    Tic-Tac-Toe/
    │── index.html     # HTML file for game layout
    │── style.css      # CSS file for styling the game
    │── app.js         # JavaScript file for game logic

Game Logic

    A click event listener is added to each box.
    
    The script tracks turns and alternates between P1 and P2.
    
    Winning patterns are checked after each move.
    
    If a player wins, the game displays the winner and disables further moves.
    
    If all boxes are filled and no winner is found, the game declares a draw.

Future Enhancements

    Add animations and sound effects for a better user experience.
    
    Implement an AI-based single-player mode.
    
    Improve responsiveness for better mobile gameplay.

Demo : To run the project, simply open the index.html file in any modern web browser.
