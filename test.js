// Initialize the Score Variables
let humanScore = 0;
let computerScore = 0;

// Play One Round
function playRound(humanChoice, computerChoice) {
    // Decide the Winner
    if (humanChoice === computerChoice) {
        // Print the winner on current round on the webpage
        gameResult.textContent = `It's a tie, ${computerChoice} draws ${humanChoice}`;
        // Print the current score on the Webpage to Show who is Leading
        gameScore.textContent = `Human Score- ${humanScore} - ${computerScore} -Computer Score`;
    }
    else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        gameResult.textContent = `You Lose! (${computerChoice} wins ${humanChoice})`;
        // Increases the Winner's score by 1, so the winner can be decided at the end of the game
        computerScore += 1;
        gameScore.textContent = `Human Score- ${humanScore} - ${computerScore} -Computer Score`;
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        gameResult.textContent = `You Win! (${humanChoice} wins ${computerChoice})`;
        humanScore += 1;
        gameScore.textContent = `Human Score- ${humanScore} - ${computerScore} -Computer Score`;
    }
    else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        gameResult.textContent = `You Win! (${humanChoice} wins ${computerChoice})`;
        humanScore += 1;
        gameScore.textContent = `Human Score- ${humanScore} - ${computerScore} -Computer Score`;
    }
    else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        gameResult.textContent = `You Lose(${computerChoice} wins ${humanChoice})`;
        computerScore += 1;
        gameScore.textContent = `Human Score- ${humanScore} - ${computerScore} -Computer Score`;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        gameResult.textContent = `You Lose! (${computerChoice} wins ${humanChoice})`;
        computerScore += 1;
        gameScore.textContent = `Human Score- ${humanScore} - ${computerScore} -Computer Score`;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        gameResult.textContent = `You Win! (${humanChoice} wins ${computerChoice})`;
        humanScore += 1;
        gameScore.textContent = `Human Score- ${humanScore} - ${computerScore} -Computer Score`;
    }
}

// Declared the Human and Computer Selection Variables, Which Holds the Computer and Human Choices
let humanSelection;
let computerSelection;


// Declared variables for the DOM Elements
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const gameResult = document.querySelector(".gameResult");
const gameScore = document.querySelector(".gameScore");
const gameWinner = document.querySelector(".gameWinner");
const buttonContainer = document.querySelector(".buttonContainer");
const gameReload = document.querySelector(".gameReload");


let numberOfGamesPlayed = 0;
// Checks if one of the Three Buttons is Clicked, and Passes the Value to the playRound() function for execution
// ROCK SECTION
rockButton.addEventListener("click", () => {
function getComputerChoice(){
    // Generate Random Number
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // Return either Rock, Paper or Scissors According to the Random Number
    switch(randomNumber){
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
    }
}
    // Get Computer Selection to Decide Winner
    computerSelection = getComputerChoice();
    humanSelection = "ROCK";
    playRound(humanSelection, computerSelection);
    numberOfGamesPlayed++;

    if(numberOfGamesPlayed == 5 && humanScore > computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Congratulations, You WON!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }else if(numberOfGamesPlayed == 5 && humanScore < computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Sorry, You LOST!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }else if(numberOfGamesPlayed == 5 && humanScore === computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Its a TIE!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }
});

// PAPER SECTION
paperButton.addEventListener("click", () => {
    function getComputerChoice(){
    // Generate Random Number
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // Return either Rock, Paper or Scissors According to the Random Number
    switch(randomNumber){
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
    }
}
    // Get Computer Selection to Decide Winner
    computerSelection = getComputerChoice();
    humanSelection = "PAPER";
    playRound(humanSelection, computerSelection);
    numberOfGamesPlayed++;

    if(numberOfGamesPlayed == 5 && humanScore > computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Congratulations, You WON!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }else if(numberOfGamesPlayed == 5 && humanScore < computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Sorry, You LOST!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }else if(numberOfGamesPlayed == 5 && humanScore === computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Its a TIE!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }
});

// SCISSORS SECTION
scissorsButton.addEventListener("click", () => {
function getComputerChoice(){
    // Generate Random Number
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // Return either Rock, Paper or Scissors According to the Random Number
    switch(randomNumber){
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
    }
}
    // Get Computer Selection to Decide Winner
    computerSelection = getComputerChoice();
    humanSelection = "SCISSORS";
    playRound(humanSelection, computerSelection);
    numberOfGamesPlayed++;

    if(numberOfGamesPlayed == 5 && humanScore > computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Congratulations, You WON!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }else if(numberOfGamesPlayed == 5 && humanScore < computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Sorry, You LOST!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }else if(numberOfGamesPlayed == 5 && humanScore === computerScore){
        buttonContainer.parentNode.removeChild(buttonContainer);
        gameResult.textContent = `Its a TIE!`;
        gameScore.textContent = `FINAL RESULT: Human Score- ${humanScore} - ${computerScore} -Computer Score`;
        alert("Thanks for Playing, Reload the page to play again.");
        gameReload.textContent = "THANKS FOR PLAYING, RELOAD THE PAGE TO PLAY AGAIN";
    }
});






