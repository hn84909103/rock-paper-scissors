let userScore = 0;
let computerScore = 0;
//the text to show on page
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
  const choice = ["Rock", "Paper", "Scissors"];
  var ramdonNum = Math.floor(Math.random()*3);
  return choice[ramdonNum];
}

function win(user, computer){
  userScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = user + " beats " + computer +". You Win!";
}

function lose(user, computer){
  computerScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = user + " againests " + computer +". You Lose!";
}

function draw(user, computer){
  result_div.innerHTML = user + " is equal to " + computer +". Draw!";
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  /*console.log("User choice is: "+userChoice);
  console.log("Computer choice is "+computerChoice);*/
 //determine who win
  switch(userChoice + computerChoice){
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, computerChoice);
      break;
  }
} //game close

function main(){
  //when user click
  rock_div.addEventListener('click',function(){
    game("Rock");
  })

  paper_div.addEventListener('click',function(){
    game("Paper");
  })

  scissors_div.addEventListener('click',function(){
    game("Scissors");
  })
}//main close


main();
