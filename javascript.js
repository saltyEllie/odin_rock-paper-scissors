
const options = ["rock", "paper", "scissor"]

function getComputerChoice(options) {

    const randomChoice = Math.floor(Math.random() * options.length);

    return options[randomChoice];
}


function getHumanChoice() {
    let getHumanChoice = prompt("Choose between Rock, Paper or Scissor:")
    return getHumanChoice.toLowerCase();

}


let humanScore = 0;
let computerScore = 0;

function playRound() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(options);

    console.log(`${humanChoice} vs ${computerChoice}`);

    if (humanChoice == computerChoice) {
        console.log("DRAW! Please try again!")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log("You win! Rock beats Scissor.")
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.")
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        console.log("You lose! Scissor beats Paper.")
        computerScore++;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        console.log("You win! Scissor beats paper")
        humanScore++;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissor.")
        computerScore++;
    }

    console.log(`Current score (human vs. computer): ${humanScore} vs. ${computerScore}`)
}


function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        console.log(`Congratulations, you have won ${humanScore} to ${computerScore} versus the computer`)
    } else if (computerScore > humanScore) {
        console.log(`Sorry, you have lost ${humanScore} to ${computerScore} versus the computer. Better luck next time.`)
    } else
        console.log(`The game ended in a draw. The final score was ${humanScore}:${computerScore}`)


}

playGame();