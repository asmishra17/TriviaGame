$(document).ready(function() {

// psuedocode steps
// define variables (!)
// create timer using interval function (!)
// initialize game including start screen (!)
// create on click functions
// game conditions
// next question function
// reset function
// game start page (!)
// game restart page

// global variables
var questionNum = 0; 
var userChoice; 
var correctAnswers = 0;
var incorrectAnswers = 0;
var wrongAnswer = 0;
var question = 0;
var count = 30; 
var timerId;

// make several questions within this object
var holidayQuestions = [{
    question: "What does the traditional New Year's song, \"Auld Lang Syne\" mean?",
    choices: ["\"Time Flies\"", "\"Yesterday Is Gone\"", "\"Times Gone By\"", "\"We Have Only Today\""],
    rightAnswer: 2,
    wordAnswer: "Times Gone By"
}, {
    question: "When was the holiday of Kwanzaa introduced?",
    choices: ["1956", "1966", "1976", "1981"], 
    rightAnswer: 1,
    wordAnswer: "1966"
}, {
    question: "When was the first New Year celebration?", 
    choices: ["1000 years ago", "2000 years ago", "3000 years ago", "4000 years ago"],
    rightAnswer: 3,
    wordAnswer: "4000 years ago"
}, {
    question: "What beverage company has been using Santa Claus in its advertising since 1931?",
    choices: ["Coca-Cola", "Pepsi", "Dr. Pepper", "Fanta"],
    rightAnswer: 0,
    wordAnswer: "Coca-Cola"
}, {
    question: "What Christmas decoration was originally made from strands of silver?",
    choices: ["Ornaments", "Tinsel", "Mistletoe", "Wreaths"],
    rightAnswer: 1,
    wordAnswer: "Tinsel"
}, {
    question: "What is Hanukkah also known as?",
    choices: ["Feast of Happiness", "Feast of Dedication", "Feast of Commitment", "Feast of Prosperity"], 
    rightAnswer: 1,
    wordAnswer: "Feast of Dedication"
}, {
    question: "Kwanzaa is a phrase that means \"First Fruits\". What language is this in?", 
    choices: ["Swahili", "Arabic", "Hausa", "Igbo"], 
    rightAnswer: 0,
    wordAnswer: "Swahili"
}, {
    question: "How many days long is Hanukkah?",  
    choices: ["10", "9", "8", "7"],
    rightAnswer: 2,
    wordAnswer: "8"
} 
]; 

// start game button
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
        $(".answer1").html("<h4 class=\"timeout\">You're out of time!</h4>"); 
        //put show answer function here
   }; 
}

function showAnswer () {
   $(".answer1").html(`The answer was: ${holidayQuestions[questionNum].wordAnswer}`);
}

// initialize game
function startTrivia () {
    $(".question").html(holidayQuestions[questionNum].question);
    question++;

    var choicesArr = holidayQuestions[questionNum].choices;
    // var buttonsArr = []; 

    // creating buttons for answer choices
    for (var i = 0; i < choicesArr.length; i++) {
        var button = $("<button>");
        button.text(choicesArr[i]);
        button.attr("data-id",i);  
        button.addClass("btn btn-default btn-lg btn-block");
       $ (".answer1").append(button);
    }
}

// game conditions
$(".answer1").on("click", "button", function (){
    
        userChoice = $(this).data("id"); 
        holidayQuestions[questionNum].rightAnswer;
        
        if(userChoice != holidayQuestions[questionNum].rightAnswer) {
            $(".answer1").html(`<h4>Wrong answer! The answer was: \"${holidayQuestions[questionNum].wordAnswer}\"</h4>`); 
            wrongAnswer++;
            clearInterval(timerId);
            setTimeout(continueGame, 5000); 
        
        } else if (userChoice === holidayQuestions[questionNum].rightAnswer) {
            $(".answer1").html("<h4>Correct!</h4>"); 
            correctAnswers++;  
            clearInterval(timerId);
            setTimeout(continueGame, 5000); 
        }    
});


// game continuation function
function continueGame () {
    $(".answer1").empty();
    questionNum++;
    startTrivia(questionNum);     

    }


})