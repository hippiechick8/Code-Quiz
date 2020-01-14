// getting variable from local storage
var accessQuestionsStored;
var retrieveQuestionsStored = localStorage.getItem("varQuestionsStored", questionsString);
accessQuestionsStored = retrieveQuestionsStored;

// parse questions object from string
var questionsParse = JSON.parse(questionsString);

// list of existing html elements
var highScores = document.getElementsByClassName('highScores');
var timeRemanining = document.getElementsByClassName('timeRemaining');
var countdownTimer = document.getElementById('countdownTimer');
var codeQuiz = document.getElementsByClassName('codeQuiz');
var quizInstruct = document.getElementById('quizInstruct');
var questions = document.getElementById('questions');
var answers = document.getElementById('answers');
var answerABtn = document.getElementById('answerA');
var answerBBtn = document.getElementById('answerB');
var answerCBtn = document.getElementById('answerC');
var answerDBtn = document.getElementById('answerD');
var feedback = document.getElementById('feedback');
var displayUserScore = document.getElementById('displayUserScore');
var displayHighScores = document.getElementById('displayHighScores');
var clearHighScoresBtn = document.getElementById('clearHighScores');
var startQuizBtn = document.getElementById('startQuiz');
var startOverBtn = document.getElementById('startOver');


// what to do when user clicks Start Quiz button
document.getElementById("startQuizBtn").addEventListener("click", startQuestions);

function startQuestions () {
  // hide button
  startQuizBtn.style.display = "none";
  
  // display first question
  document.getElementById("questions").innerHTML = accessQuestionsStored.title; // use for loop below?
  
  // start timer
  var count = 60;
  var timer = setInterval(function() {
    console.log(count);
    count--;
  // stop timer at 0
    if(count === 0) {
      stopInterval()
    }
  }, 1000);

  var stopInterval = function() {
    console.log('time is up!');
    clearInterval(timer);
  };

}

/*
// new variables
var correctAnswers = 0;

// for loop to scroll through questions
function displayQuiz() {
  for(var i = 0; i < accessQuestionsStored.length; i++) {
    var singleQuestion = accessQuestionsStored[i].title;
    //access each question (title) here

    //link choices to questions
    var userSelection = accessQuestionsStored[i].choices;
    if (userSelection == accessQuestionsStored[i].answer) {
      correctAnswers++;  // tallies how many correct answers so can add add 10 points to score
                        // make sure to append(?) score for running total
      console.log('user answered correctly:' + correctAnswers + ' out of:' + accessQuestionsStored.length);
      return ('Correct! You scored 10 points.'); // return? or innerHTML?
    } else {
      // subtract 15 seconds from remaining time
      console.log('Incorrect! 15 seconds have been subtracted from your remaining time.');
      return ('Incorrect! 15 seconds have been subtracted from your remaining time.'); // return? or innerHTML?
    }
  }
}
console.log(displayQuiz());
*/



