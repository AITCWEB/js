// function populate() {
//   if (quiz.isEnded()) {
//     showScores();
//   } else {
//     // show question
//     const element = document.querySelector("#question");
//     element.innerHTML = quiz.getQuestionIndex().text;

//     // show choices
//     let choices = quiz.getQuestionIndex().choices;
//     for (let i = 0; i < choices.length; i += 1) {
//       let answers = document.getElementById("choice" + i);
//       answers.innerHTML = choices[i];
//       guess("btn" + i, choices[i]);
//     }
//     showProgress();
//   }
// }

// function showScores() {
//   let gameOver = `<h1>Result</h1>`;
//   gameOver += '<h2 id="score">Your Score ' + quiz.score + "</h2>";
//   let quizElement = document.querySelector("#quiz");
//   quizElement.innerHTML = gameOver;
// }

// function guess(id, guess) {
//   const button = document.getElementById(id);
//   button.addEventListener("click", function() {
//     quiz.guess(guess);
//     populate();
//   });
// }

// function showProgress() {
//   let CQN = quiz.questionIndex + 1;
//   const progress = document.querySelector("#progress");
//   progress.innerHTML = `Question ${CQN} of ${quiz.questions.length}`;
//   console.log(progress);
// }

// const questions = [
//   new Question(
//     "Which one is not an object oriented programming language?",
//     ["Java", "C#", "C++", "C"],
//     "C"
//   ),
//   new Question(
//     "Which language is used for styling web pages?",
//     ["HTML", "JQuery", "CSS", "XML"],
//     "CSS"
//   ),
//   new Question(
//     "There are ____ main components of object oriented programming.",
//     ["1", "6", "2", "4"],
//     "4"
//   ),
//   new Question(
//     "Which language is used for web apps?",
//     ["PHP", "Python", "Javascript", "All"],
//     "All"
//   ),
//   new Question(
//     "MVC is a ____.",
//     ["Language", "Library", "Framework", "All"],
//     "Framework"
//   )
// ];

// const quiz = new Quiz(questions);

// populate();

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

// create questions
var questions = [
  new Question(
    "Which one is not an object oriented programming language?",
    ["Java", "C#", "C++", "C"],
    "C"
  ),
  new Question(
    "Which language is used for styling web pages?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "There are ____ main components of object oriented programming.",
    ["1", "6", "2", "4"],
    "4"
  ),
  new Question(
    "Which language is used for web apps?",
    ["PHP", "Python", "Javascript", "All"],
    "All"
  ),
  new Question(
    "MVC is a ____.",
    ["Language", "Library", "Framework", "All"],
    "Framework"
  )
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
