playGame();

function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.33) {
        return "ROCK"
    } else if (compChoice <= 0.66) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

function getHumanChoice() {
    return prompt("Please enter rock, paper, or scissors.").toUpperCase();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "ROCK") {
        if (humanChoice == "ROCK") { // TIE
            console.log("Tie! Try Again!");
            return "TIE";
        } else if (humanChoice == "PAPER") {
            console.log("You win! Paper beats rock!");
            return "HUMAN";
        } else if (humanChoice == "SCISSORS") {
            console.log("You lose! Rock beats scissors!");
            return "COMPUTER";
        }
    } else if (computerChoice == "PAPER") {
        if (humanChoice == "PAPER") { // TIE
            console.log("Tie! Try Again!");
            return "TIE";
        } else if (humanChoice == "SCISSORS") {
            console.log("You win! Scissors beats paper!");
            return "HUMAN";
        } else if (humanChoice == "ROCK") {
            console.log("You lose! Paper beats rock!");
            return "COMPUTER";
        }
    } else if (computerChoice == "SCISSORS") {
        if (humanChoice == "SCISSORS") { // TIE
            console.log("Tie! Try Again!");
            return "TIE";
        } else if (humanChoice == "ROCK") {
            console.log ("You win! Rock beats scissors!");
            return "HUMAN";
        } else if (humanChoice == "PAPER") {
            console.log("You lose! Scissors beats paper!");
            return "COMPUTER";
        }
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i <= 4; i++) {
        let result = playRound(getComputerChoice(), getHumanChoice());
        if (result == "HUMAN") {humanScore++;}
        if (result == "COMPUTER") {computerScore++;}
        if (result == "TIE") {i--;}
    }

    console.log("Game Over!")
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}