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
var userChoice; 
var correctAnswers = 0;
var incorrectAnswers = 0;
var wrongAnswer = 0;
var question = 0;
var count = 4; 

// make several questions within this object
var holidayQuestions = [{
    question: "What does the traditional New Year's song, \"Auld Lang Syne\" mean?",
    choices: ["Time flies", "Yesterday is gone", "Times gone by", "We have only today"],
    rightAnswer: 2
}, {
    question: "When was the holiday of Kwanzaa introduced?",
    choices: ["1956", "1966", "1976", "1981"], 
    rightAnswer: 2
}, {
    question: "When was the first New Year celebration?", 
    choices: ["1000 years ago", "2000 years ago", "3000 years ago", "4000 years ago"],
    rightAnswer: 3
}, {
    question: "What beverage company has been using Santa Claus in its advertising since 1931?",
    choices: ["Coca-Cola", "Pepsi", "Dr. Pepper", "Fanta"],
    rightAnswer: 0
}, {
    question: "What Christmas decoration was originally made from strands of silver?",
    choices: ["Ornaments", "Tinsel", "Mistletoe", "Wreaths"],
    rightAnswer: 1
}, {
    question: "What is Hanukkah also known as?",
    choices: ["Feast of Happiness", "Feast of Dedication", "Feast of Commitment", "Feast of Prosperity"], 
    rightAnswer: 1
}, {
    question: "Kwanzaa is a phrase that means \"First Fruits\". What language is this in?", 
    choices: ["Swahili", "Arabic", "Hausa", "Igbo"], 
    rightAnswer: 0
}, {
    question: "How many days long is Hanukkah?",  
    choices: ["10", "9", "8", "7"],
    rightAnswer: 2
} 
]; 

var timerId;

$(".startbutton").click(function(){
    $(this).hide(); 
    timerId = setInterval(startTimer, 1000);
    startTrivia(); 
})

function startTimer () {
   count--;
   $(".timer").html(`Time Remaining : 00:${count} seconds`);
   if (count === 0) {
        clearInterval(timerId);
        $(".answer1").text("You're out of time!");
   }; 
}

//function timeOut () {
    //if (clearInterval) {
       // $(".answer1").text("You're out of time!");
    //}
//}



// initialize game
function startTrivia () {
    $(".question").html(holidayQuestions[0].question);
    question++;

    var choicesArr = holidayQuestions[0].choices;
    var buttonsArr = []; 
    // maybe do this manually for formatting
    // creating buttons for answer choices
    for (var i = 0; i < choicesArr.length; i++) {
        var button = $("<button>");
        button.text(choicesArr[i]);
        button.attr("data-id",i);  
       $ (".answer1").append(button);
    }
}

// REMEMBER TO RE-.TEXT ANSWER1 for next question
// game conditions
$(".answer1").on("click", "button", function (){
    userChoice = $(this).data("id"); 
    holidayQuestions[0].rightAnswer;
    if(userChoice != holidayQuestions[0].rightAnswer) {
        $(".answer1").text("Wrong answer!"); 
        incorrectAnswer++;
        
    } else if (userChoice === holidayQuestions[0].rightAnswer) {
        $(".answer1").text("Correct!"); 
        correctAnswers++;  
    }    
});




// game continuation function
function continueGame () {
        $(".question").html(holidayQuestions[1].question);
        question++;

        choicesArr = holidayQuestions[1].choices;
        
        for (var i = 0; i < choicesArr.length; i++) {
            button.text(choicesArr[i]);
            button.attr("data-id",i); 
            $ (".answer1").append(button); 
        }
    }


})