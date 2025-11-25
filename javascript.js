const humanScoreDiv = document.querySelector("#human-actual-score-number");
const computerScoreDiv = document.querySelector("#computer-actual-score-number");
const humanCardDiv = document.querySelector("#human-card");
const humanElement = document.getElementById("human-card");
const computerCardDiv = document.querySelector("#computer-card");
const computerElement = document.getElementById("computer-card");
const resultDiv = document.querySelector("#result");
const resultElement = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;

computerScoreDiv.textContent = computerScore;
humanScoreDiv.textContent = humanScore;

playGame();

function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.33) {
        computerCardDiv.textContent = "ROCK";
        computerElement.style.backgroundColor = "sandybrown";
        return "ROCK"
    } else if (compChoice <= 0.66) {
        computerCardDiv.textContent = "PAPER";
        computerElement.style.backgroundColor = "rgb(242, 220, 192)";
        return "PAPER"
    } else {
        computerCardDiv.textContent = "SCISSORS";
        computerElement.style.backgroundColor = "silver";
        return "SCISSORS"
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "ROCK") {
        if (humanChoice == "ROCK") { // TIE
            resultDiv.textContent = "Tie!";
            resultElement.style.color = black;
            humanCardDiv.textContent = "ROCK";
            humanElement.style.backgroundColor = "sandybrown";
        } else if (humanChoice == "PAPER") {
            humanCardDiv.textContent = "PAPER";
            resultElement.style.color = "green";
            humanScore++;
            humanScoreDiv.textContent = humanScore;
            humanElement.style.backgroundColor = "rgb(242, 220, 192)";
            resultDiv.textContent = "Round won! +1 point!";
        } else if (humanChoice == "SCISSORS") {
            humanCardDiv.textContent = "SCISSORS";
            resultElement.style.color = "red";
            computerScore++;
            computerScoreDiv.textContent = computerScore;
            humanElement.style.backgroundColor = "silver";
            resultDiv.textContent = "Round lost! +1 point for computer!";
        }
    } else if (computerChoice == "PAPER") {
        if (humanChoice == "PAPER") { // TIE
            resultDiv.textContent = "Tie!";
            resultElement.style.color = "black";
            humanCardDiv.textContent = "PAPER";
            humanElement.style.backgroundColor = "rgb(242, 220, 192)";
        } else if (humanChoice == "SCISSORS") {
            humanCardDiv.textContent = "SCISSORS";
            resultElement.style.color = "green";
            humanScore++;
            humanScoreDiv.textContent = humanScore;
            humanElement.style.backgroundColor = "silver";
            resultDiv.textContent = "Round won! +1 point!";
        } else if (humanChoice == "ROCK") {
            humanCardDiv.textContent = "ROCK";
            resultElement.style.color = "red";
            computerScore++;
            computerScoreDiv.textContent = computerScore;
            humanElement.style.backgroundColor = "sandybrown";
            resultDiv.textContent = "Round lost! +1 point for computer!";
        }
    } else if (computerChoice == "SCISSORS") {
        if (humanChoice == "SCISSORS") { // TIE
            humanCardDiv.textContent = "SCISSORS";
            resultElement.style.color = "black";
            humanElement.style.backgroundColor = "silver";
            resultDiv.textContent = "Tie!"
        } else if (humanChoice == "ROCK") {
            humanCardDiv.textContent = "ROCK";
            resultElement.style.color = "green";
            humanScore++;
            humanScoreDiv.textContent = humanScore;
            humanElement.style.backgroundColor = "sandybrown";
            resultDiv.textContent = "Round won! +1 point!";
        } else if (humanChoice == "PAPER") {
            humanCardDiv.textContent = "PAPER";
            resultElement.style.color = "red";
            computerScore++;
            computerScoreDiv.textContent = computerScore;
            humanElement.style.backgroundColor = "rgb(242, 220, 192)";
            resultDiv.textContent = "Round lost! +1 point for computer!";
        }
    }
    checkForVictory();
}

function handleRockClick(humanChoice) {
    return playRound(getComputerChoice(), "ROCK");
}

function handlePaperClick(humanChoice) {
    return playRound(getComputerChoice(), "PAPER");
}

function handleScissorsClick(humanChoice) {
    return playRound(getComputerChoice(), "SCISSORS");
}

function checkForVictory() {

    if (humanScore >= 5) {
        resultDiv.textContent = "You win the game! Congratulations!"
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
        humanCardDiv.textContent = "";
        computerCardDiv.textContent = "";
        humanElement.style.backgroundColor = "green";
        computerElement.style.backgroundColor = "red";
    }

    if (computerScore >= 5) {
        resultDiv.textContent = "You lose the game! Sorry!"
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
        humanCardDiv.textContent = "";
        computerCardDiv.textContent = "";
        humanElement.style.backgroundColor = "red";
        computerElement.style.backgroundColor = "green";
    }
}

function playGame() {

    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    rockButton.addEventListener('click', handleRockClick);
    paperButton.addEventListener('click', handlePaperClick);
    scissorsButton.addEventListener('click', handleScissorsClick);

    
}