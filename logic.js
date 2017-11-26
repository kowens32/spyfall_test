
 var triviaQuestions = require('questions.js');
console.log('where am i', triviaQuestions);

//Need to create a timer that counts down from 30 seconds and testing
var number = 21;
var intervalId;
var trueAnswers = 0;
var incorrectAnswers = 0;
var questionCounter = 0;

$(document).ready(function() {
    function runTimer () {
        number = 20;
        intervalId = setInterval(decrement, 1000);
        $("#question-timer").html("<h2>" + number + ' seconds left'+ "</h2>");
    }
    runTimer();

    function decrement() {
        number--;
        $("#question-timer").html("<h2>" + number + ' seconds left'+ "</h2>");

        if (number === 0) {
            stopTimer();
            alert("Time Up!");
            questionCounter++;
            displayQuestion(triviaQuestions[questionCounter].question, questionCounter);
            displayAnswers(triviaQuestions[questionCounter].answer);
            userSelection();
            runTimer();
            console.log('timer and '+questionCounter);
        }
    }
    decrement();

    function stopTimer () {
        clearInterval(intervalId);
    }

    function displayQuestion(question, index) {
        var q = $('<h2>');
        q.attr('data-question', index)
        q.text(question);
        $('.question-box').html('');
        q.appendTo('.question-box')
    }

    function displayAnswers(answer) {
        $('.answers-box').html('');
        for (var i = 0; i < answer.length; i++) {
            var b = $('<button>');
            b.attr('data-answers', [i]);
            b.text(answer[i]);
            console.log(answer);
            b.appendTo('.answers-box')
        }
    }


    function userSelection () {
        var userGuess;
        console.log(questionCounter);
        $("button").on("click", function () {
            userGuess = $(this).attr('data-answers')
            var rightAnswer = triviaQuestions[questionCounter].answer
            console.log('computer' + rightAnswer);
            console.log('user' + userGuess);
            if (userGuess == rightAnswer) {
                //    alert('correct');
                trueAnswers++;
                $('.win').html('Correct Guesses ' + trueAnswers);
                console.log("1st test" + questionCounter);
                console.log('is this correct' + trueAnswers);
            }
            else {
                //   alert('wrong answer! correct answer is '+ rightAnswer);

                incorrectAnswers++;
                $('.loss').html('Incorrect Guesses ' + incorrectAnswers);
                console.log(questionCounter, ' ', incorrectAnswers);
            }
            questionCounter++;
            displayQuestion(triviaQuestions[questionCounter].question, questionCounter);
            displayAnswers(triviaQuestions[questionCounter].answers);
            userSelection();
            stopTimer();
            runTimer();


            console.log("2nd test" + questionCounter);
        });
    }

    function newGame() {
        if (questionCounter > triviaQuestions.length) {
            questionCounter = 0;
        }
    }


    newGame();
    displayQuestion(triviaQuestions[questionCounter].question, questionCounter);
    displayAnswers(triviaQuestions[questionCounter].answer);
    userSelection();
    stopTimer();
    runTimer();








});