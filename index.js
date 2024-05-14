function getComputerChoice(){
    // Generate Random Number
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // Return either Rock, Paper or Scissors According to the Random Number
    switch(randomNumber){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
    }
}
// Get Human Choice
function getHumanChoice(){
    let humanChoice = prompt(`Choose Between ROCK,PAPER or SCISSORS`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

// Play One Round
function playRound(humanChoice, computerChoice){
    // Decide the Winner
        if (humanChoice === computerChoice) {
            console.log(`It's a tie, ${computerChoice} draws ${humanChoice}`);
        }
        else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
            console.log(`You Lose! (${computerChoice} wins ${humanChoice})`);
            computerScore = computerScore + 1;
        }
        else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            console.log(`You Win! (${humanChoice} wins ${computerChoice})`);
            humanScore = humanScore + 1;
        }
        else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            console.log(`You Win! (${humanChoice} wins ${computerChoice})`);
            humanScore = humanScore + 1;
        }
        else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
            console.log(`You Lose(${computerChoice} wins ${humanChoice})`);
            computerScore = computerScore + 1;
        }
        else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
            console.log(`You Lose! (${computerChoice} wins ${humanChoice})`);
            computerScore = computerScore + 1;
        }
        else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            console.log(`You Win! (${humanChoice} wins ${computerChoice})`);
            humanScore = humanScore + 1;
        }
        else {
            console.log(`Please Enter Either "ROCK", "PAPER" or "SCISSORS"`);
        }
}

// Selections
const humanSelection = getHumanChoice().toUpperCase();
const computerSelection = getComputerChoice().toUpperCase();

// Execute the Play Round Function
playRound(humanSelection, computerSelection);

