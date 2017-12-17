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
var userPick; 
var correctAnswers = 0;
var incorrectAnswers = 0;
var wrongAnswer = 0;
var question = 0;
var count = 30; 

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

$(".startbutton").click(function(){
    $(this).hide(); 
    var counter = setInterval(startTimer, 1000);
    startTrivia(); 
})

function startTimer () {
   count--;
   // why doesn't count = 0 work here
   if (count <= -1) {
        clearInterval(counter);
   }

    $(".timer").html(`Time Remaining : 00 : ${count} seconds`);
}

function startTrivia () {
    $(".question").html(holidayQuestions[0].question);
    question++;

    var choicesArr = holidayQuestions[0].choices;
    var buttonsArr = []; 

    for (var i = 0; i < choicesArr.length; i++) {
        var button = $("<button>");
        button.text(choicesArr[i]);
        button.attr("data-id",i);  
       $ (".answer1").append(button);
    }
}

$(".answer1").on("click", "button", function (){
    userChoice = $(this).data("id"); 
    holidayQuestions[0].validAnswer;
    if(userChoice != holidayQuestions[0].validAnswer {
        $("")
    }
})





})