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
    let humanChoice = prompt(`Choose Between "rock","paper" or "scissors"`);
    return humanChoice;
}
