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

console.log(computerChoice())