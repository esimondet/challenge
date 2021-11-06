var time = document.querySelector("#time");
var startScreen = document.querySelector("#startScreen");
var questionScreen = document.querySelector("#questionScreen");
var resultScreen = document.querySelector("#resultScreen");
var quizOver = document.querySelector("#quizOver");
var score = document.querySelector("#score");
var wrongAnswer = document.querySelector("#wrongAnswer");
var question = document.querySelector("#question");
var startBtn = document.querySelector("#start");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var initialsBtn = document.querySelector("#initialsBtn")

var currentQuestionIndex = 0;
var timerInterval = null;
var timeRemaining = 75;

var timer = function () {
    time.innerHTML = timeRemaining;

    var timerOver = function () {
        clearInterval();
        timeRemaining = 1;
    }

    timerInterval = setInterval(function () {
        timeRemaining--;
        time.innerHTML = timeRemaining;

        if (timeRemaining < 1) {
            questionScreen.classList.remove("show");
            questionScreen.classList.add("hide");
            resultScreen.classList.remove("hide");
            resultScreen.classList.add("show");
            document.getElementById("quizOver").innerHTML = "Time Limit Reached!";

            timerOver();
        }
    }, 1000);
}

var quizScore = function () {
    time.innerHTML = timeRemaining;
    var score = timeRemaining;
    document.getElementById("score").innerHTML = "Good work! Your score is " + score + ".";
    clearInterval(timerInterval);
}

var startQuiz = function () {
    startScreen.classList.remove("show");
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    questionScreen.classList.add("show");
    timer();
    setUp(currentQuestionIndex);
}

var setUp = function (questionIndex) {
    question.innerHTML = quizQuestions.questions[questionIndex].questionText;
    answerOne.innerHTML = quizQuestions.questions[questionIndex].answers[0].answerText;
    answerTwo.innerHTML = quizQuestions.questions[questionIndex].answers[1].answerText;
    answerThree.innerHTML = quizQuestions.questions[questionIndex].answers[2].answerText;
    answerFour.innerHTML = quizQuestions.questions[questionIndex].answers[3].answerText;
}

var checkAnswer = function (answerIndex) {
    var isCorrect = quizQuestions.questions[currentQuestionIndex].answers[answerIndex].isCorrect;
    if (isCorrect && currentQuestionIndex < 4) {
        currentQuestionIndex++;
        wrongAnswer.classList.remove("show");
        wrongAnswer.classList.add("hide");
        setUp(currentQuestionIndex);
    } else if (!isCorrect) {
        wrongAnswer.classList.remove("hide");
        wrongAnswer.classList.add("show");
    } else {
        questionScreen.classList.remove("show");
        questionScreen.classList.add("hide");
        resultScreen.classList.remove("hide");
        resultScreen.classList.add("show");
        document.getElementById("quizOver").innerHTML = "Quiz Completed!";
        quizScore();
    }

}

var quizQuestions = {
    "questions": [{
        "questionText": "1. Before joining the WWII war effort, Alan Turing received his PhD from Princeton in the field of ____.",
        "answers": [{
            "answerText": "Cyptology",
            "isCorrect": false
        }, {
            "answerText": "Mathematics",
            "isCorrect": true
        }, {
            "answerText": "Computer Science",
            "isCorrect": false
        }, {
            "answerText": "Theology",
            "isCorrect": false
        }]
    }, {
        "questionText": "2. What was the name of the machine built to decipher enemy coded intel?",
        "answers": [{
            "answerText": "The Bombe",
            "isCorrect": true
        }, {
            "answerText": "The Enigma",
            "isCorrect": false
        }, {
            "answerText": "TI-84",
            "isCorrect": false
        }, {
            "answerText": "HAL",
            "isCorrect": false
        }]
    }, {
        "questionText": "3. Alan Turing came in fifth place at a qualifier for which 1948 Olympic activity?",
        "answers": [{
            "answerText": "Marathon",
            "isCorrect": true
        }, {
            "answerText": "Shot Put",
            "isCorrect": false
        }, {
            "answerText": "Fencing",
            "isCorrect": false
        }, {
            "answerText": "Bicycling",
            "isCorrect": false
        }]
    }, {
        "questionText": "4. ___ is the concept of a set of questions that attempt to determine if a machine can think.",
        "answers": [{
            "answerText": "The Stoplight Test",
            "isCorrect": false
        }, {
            "answerText": "The Bladerunner Test",
            "isCorrect": false
        }, {
            "answerText": "The Turing Test",
            "isCorrect": true
        }, {
            "answerText": "The Captcha Test",
            "isCorrect": false
        }]
    }, {
        "questionText": "5. Issued June 23, 2021, Alan Turing is on which Bank of England currency note?",
        "answers": [{
            "answerText": "£5",
            "isCorrect": false
        }, {
            "answerText": "£10",
            "isCorrect": false
        }, {
            "answerText": "£20",
            "isCorrect": false
        }, {
            "answerText": "£50",
            "isCorrect": true
        }]
    }]
}

startBtn.addEventListener("click", startQuiz);
answerOne.addEventListener("click", function () { checkAnswer(0) });
answerTwo.addEventListener("click", function () { checkAnswer(1) });
answerThree.addEventListener("click", function () { checkAnswer(2) });
answerFour.addEventListener("click", function () { checkAnswer(3) });