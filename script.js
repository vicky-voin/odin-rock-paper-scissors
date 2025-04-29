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

let humanScore = 0
let computerScore = 0

console.log(playRound(getHumanChoice(), computerChoice()))