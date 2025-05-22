function computerChoice(){
    let choice = Math.random() * 100;

    if(choice > 66)
    {
        return "rock";
    }
    if(choice > 33 && choice < 66)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock? Paper? Scissors?");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    let winner = ""
    let winningChoice = ""
    let losingChoice = ""

    if(humanChoice === computerChoice)
    {
        return "This is a tie! Try again!";
    }
    else{
        if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock"
        )
        {
            winner = "Human"
            winningChoice = humanChoice
            losingChoice = computerChoice
            humanScore++
        }
        else
        {
            winner = "The computer"
            winningChoice = computerChoice
            losingChoice = humanChoice
            computerScore++
        }
    }

    displayRoundScore();
    outputField.textContent = `${winner} is the winner! ${winningChoice} beats ${losingChoice}`

    if(humanScore == 5 || computerScore == 5)
    {
        displayGameResult();
    }
}

function displayGameResult(){

    if(computerScore > humanScore)
    {
        gameResult.textContent = "Sorry, the Computer won! Try again!";
    }
    else if (computerScore === humanScore)
    {
        gameResult.textContent = "It's a tie! No winners! But also no losers!";
    }
    else
    {
        gameResult.textContent = "Congratulations, Human - you won!";
    }
}

function displayRoundScore()
{
    humanScoreField.textContent =`Human: ${humanScore}`;
    computerScoreField.textContent =`Computer: ${computerScore}`;
}

let humanScore = 0
let computerScore = 0

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const humanScoreField = document.querySelector(".humanScore");
const computerScoreField = document.querySelector(".computerScore");

const outputField = document.querySelector(".output");
const gameResult = document.querySelector(".gameResult");

rockButton.addEventListener("click", ()=>playRound("rock", computerChoice()));
paperButton.addEventListener("click", ()=>playRound("paper", computerChoice()));
scissorsButton.addEventListener("click", ()=>playRound("scissors", computerChoice()));
