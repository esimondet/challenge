var startScreen = document.querySelector("#startScreen")
var questionScreen = document.querySelector("#questionScreen")

var startQuiz = function () {
    startScreen.classList.remove("show");
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    questionScreen.classList.add("show");
}

var startBtn = document.querySelector("#start");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");

startBtn.addEventListener("click", startQuiz);
answerOne.addEventListener("click", null);
answerTwo.addEventListener("click", null);
answerThree.addEventListener("click", null);
answerFour.addEventListener("click", null);

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