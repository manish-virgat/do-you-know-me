var readlineSync = require("readline-sync");
var score = 0;
var questions = 
[
  {
    question: "What is my nickname? ",
    answer: "Viru"
  }, 
  {
    question: "Which is my favourite sport? ",
    answer: "Cricket"
  },
  {
    question: "I am from which state? ",
    answer: "Bihar"
  },
  {
    question: "Who is my favourite cricketer? ",
    answer: "Sachin Tendulkar"
  },
  {
    question: "What is my hobby? ",
    answer: "Reading Books"
  }
];

function welcome() 
{
  var userName = readlineSync.question("Please enter your name: ");
  console.log("Welcome "+ userName + " to DO YOU KNOW Manish Virgat?");
}

function play(question, answer) 
{
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  {
    console.log("Bingo! You got that right!");
    score = score + 1;
    
  } else 
  {
    console.log("Oh no! That's incorrect.");
  }

  console.log("current score: ", score);
  console.log("-*-*-*-*-*-*-*-*-*-*-*-*-")
}

function game() 
{
  for (var i=0; i<questions.length; i++) 
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() 
{
  console.log("Your final score is: ", score);
}

welcome();
game();
showScores();
