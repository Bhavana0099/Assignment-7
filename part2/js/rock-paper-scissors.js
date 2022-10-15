/*eslint-env browser*/
var choice = ["rock", "paper", "scissors"];
var computerChoice = choice[Math.floor(Math.random() * Math.floor(3))];

function playGame(userChoice) {
    "use strict";
    switch(userChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                window.alert("Paper covers rock...You lose!");
            } else if (computerChoice === 'scissors') {
                window.alert("Rock destroys scissors...You win!");
            } else {
                window.alert("Computer also chose " + computerChoice + " It's a tie.");
            }
            break;
        case 'paper':
            if(computerChoice === 'rock'){
                window.alert("Paper covers Rock...You win!");
            } else if (computerChoice === 'scissors'){
                window.alert("Scissor cuts paper...You lose!");
            } else {
                window.alert("Computer also chose " + computerChoice + " It's a tie.");
            } 
            break;
        case 'scissors':
            if(computerChoice === "rock"){
                window.alert("Rock destroys scissors...You lose!");
            } else if (computerChoice === "paper"){
                window.alert("Scissor cuts paper...You win!");
            } else {
                window.alert("Computer also chose " + computerChoice + " It's a tie.");
            } 
            break;
        default:
            window.alert("Please select a valid choice from rock, paper, scissors");
            break;
    }
}
var exit = false;
while(!exit){
    var userChoice = window.prompt("Select your choice (rock, paper, scissors)").toLowerCase();
    playGame(userChoice);
    var play = window.prompt("Do you want to play again?(y/n)");
    if(play != "y"){
        window.alert("Thanks for playing");
        quit = true;
    }
}
