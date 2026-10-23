function getComputerChoice() {
    let num = getRandomArbitrary(1, 4);

    if (num === 1){
        return "Rock";
    }else if (num === 2){
        return "Paper";
    }else if (num === 3){
        return "Scissors";
    }else {
        return "Error in computer choice generation";
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getHumanChoice() {
    let userChoice = prompt("Select rock, paper, or scissors for your turn");

    if (userChoice.toLowerCase() === "rock") {
        return "Rock";
    }else if (userChoice.toLowerCase() === "paper") {
        return "Paper";
    }else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore = computerScore + 1;
    }else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore = humanScore + 1;
    }else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore = humanScore + 1;
    }else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore = computerScore + 1;
    }else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore = humanScore + 1;
    }else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore = computerScore + 1;
    }else if (humanChoice === computerChoice) {
        console.log("Tie! Both players played " + humanChoice);
    }else {
        console.log("Game error");
        console.log(humanChoice);
        console.log(computerChoice);
    }
}

function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

let humanScore = 0;
let computerScore = 0;

playGame();

if (humanScore > computerScore) {
    console.log("You win the game! You won " + humanScore + " out of 5 rounds!");
}else if (computerScore > humanScore) {
    console.log("You lost the game! You lost " + computerScore + " out of 5 rounds!");
}else {
    console.log("Tie game!");
}
