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

    return `${winner} is the winner! ${winningChoice} beats ${losingChoice}`
}

function playGame(){
    for(let i = 0; i < 5; i++)
    {
        console.log(playRound(getHumanChoice(), computerChoice()))
    }

    console.log(`Final score: Human - ${humanScore}, Computer - ${computerScore}`)

    if(computerScore > humanScore)
    {
        console.log("Sorry, the Computer won! Try again!")
    }
    else if (computerScore === humanScore)
    {
        console.log("It's a tie! No winners! But also no losers!")
    }
    else
    {
        console.log("Congratulations, Human - you won!")
    }
}

let humanScore = 0
let computerScore = 0

playGame()