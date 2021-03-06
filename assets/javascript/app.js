$(document).ready(function() {

// global variables
var questionNum = 0; 
var userChoice; 
var correctAnswers = 0;
var noAnswer = 0;
var wrongAnswers = 0;
var questions = 0;
var count = 31; 
var timerId;

// trivia questions contained within an object
var holidayQuestions = [{
    question: "What does the traditional New Year's song, \"Auld Lang Syne\" mean?",
    choices: ["\"Time Flies\"", "\"Yesterday Is Gone\"", "\"Times Gone By\"", "\"We Have Only Today\""],
    rightAnswer: 2,
    wordAnswer: "Times Gone By",
    image: "assets/images/nye1.jpg"
}, {
    question: "When was the holiday of Kwanzaa introduced?",
    choices: ["1956", "1966", "1976", "1981"], 
    rightAnswer: 1,
    wordAnswer: "1966",
    image: "assets/images/kwanzaa1.jpg"
}, {
    question: "When was the first New Year celebration?", 
    choices: ["1000 years ago", "2000 years ago", "3000 years ago", "4000 years ago"],
    rightAnswer: 3,
    wordAnswer: "4000 years ago",
    image: "assets/images/nye2.jpg"
}, {
    question: "What beverage company has been using Santa Claus in its advertising since 1931?",
    choices: ["Coca-Cola", "Pepsi", "Dr. Pepper", "Fanta"],
    rightAnswer: 0,
    wordAnswer: "Coca-Cola",
    image: "assets/images/xmas1.jpg"
}, {
    question: "What Christmas decoration was originally made from strands of silver?",
    choices: ["Ornaments", "Tinsel", "Mistletoe", "Wreaths"],
    rightAnswer: 1,
    wordAnswer: "Tinsel",
    image: "assets/images/xmas2.jpg"
}, {
    question: "What is Hanukkah also known as?",
    choices: ["Feast of Happiness", "Feast of Dedication", "Feast of Commitment", "Feast of Prosperity"], 
    rightAnswer: 1,
    wordAnswer: "Feast of Dedication",
    image: "assets/images/hanukkah1.jpg"
}, {
    question: "Kwanzaa is a phrase that means \"First Fruits\". What language is this in?", 
    choices: ["Swahili", "Arabic", "Hausa", "Igbo"], 
    rightAnswer: 0,
    wordAnswer: "Swahili",
    image: "assets/images/kwanzaa2.jpg"
}, {
    question: "How many days long is Hanukkah?",  
    choices: ["10", "9", "8", "7"],
    rightAnswer: 2,
    wordAnswer: "8",
    image: "assets/images/hanukkah2.jpg"
} 
]; 

// start button
$(".startbutton").click(function(){
    $(this).hide(); 
    timerId = setInterval(startTimer, 1000); 
    startTrivia(0); 
})

// timer function 
function startTimer () {
    count--;
    $(".timer").text(`Time Remaining : ${count} seconds`);
    if (count === 0) {
        clearInterval(timerId);
        $(".answer1").html(`<h4 class=\"timeout\">You're out of time! The answer was: \"${holidayQuestions[questionNum].wordAnswer}\"</h4><br><img src = "${holidayQuestions[questionNum].image}">`);
        noAnswer++;
        setTimeout(continueGame, 4000); 
   }; 
}

// initialize game
function startTrivia () {
    $(".question").html(holidayQuestions[questionNum].question);
    questions++;

    var choicesArr = holidayQuestions[questionNum].choices;

    // creating buttons for answer choices
    for (var i = 0; i < choicesArr.length; i++) {
        var button = $("<button>");
        button.text(choicesArr[i]);
        button.attr("data-id",i);  
        button.addClass("btn btn-default btn-lg btn-block");
       $(".answer1").append(button);
    }
}

// click function for buttons with game conditions
$(".answer1").on("click", "button", function () {
    
        userChoice = $(this).data("id"); 
        
        if(userChoice != holidayQuestions[questionNum].rightAnswer) {
            $(".answer1").html(`<h4>Wrong answer! The answer was: \"${holidayQuestions[questionNum].wordAnswer}\"</h4><br><img src = "${holidayQuestions[questionNum].image}">`); 
            wrongAnswers++;
            clearInterval(timerId);
            setTimeout(continueGame, 4000); 
        
        } else if (userChoice === holidayQuestions[questionNum].rightAnswer) {
            $(".answer1").html(`<h4>Correct!</h4><br><img src = "${holidayQuestions[questionNum].image}">`); 
            correctAnswers++;  
            clearInterval(timerId);
            setTimeout(continueGame, 4000); 
        }    
});


// game continuation function
function continueGame () {
    if (questions != 8) {
        $(".answer1").empty();
        questionNum++;
        count = 31; 
        timerId = setInterval(startTimer, 1000);
        startTrivia(questionNum);     
    } else {
        clearInterval(timerId);
        $(".question").empty();
        $(".answer1").empty();
        $(".answer1").html(`<h4 class="results"> Results: <br><br> Correct Answers: ${correctAnswers} <br><br> Incorrect Answers: ${wrongAnswers} <br><br> Unanswered: ${noAnswer}</h4>`);
        var restart = $("<button>");
        restart.text(`Restart?`);
        restart.addClass("btn btn-default btn-lg btn-block");
        $(".restart").append(restart); 
    }
}

// restart button
$(".restart").on("click", function() {
    questionNum = 0;
    correctAnswers = 0;
    noAnswer = 0;
    wrongAnswers = 0;
    questions = 0;
    count = 31;
    $(".answer1").empty();
    $(".restart").empty();
    timerId = setInterval(startTimer, 1000);
    startTrivia(0); 
})

})