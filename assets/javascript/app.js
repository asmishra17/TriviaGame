$(document).ready(function() {

// psuedocode steps
// define variables
// create timer using timeout function
// initialize game including start screen
// create on click functions
// equal to a certain index in the array
// game conditions
// reset function
// game start page
// game restart page

// global variables
var userPick; 
var correctAnswers = 0;
var incorrectAnswers = 0;
var wrongAnswer = 0;
var question = 0;
var images;
var count = 30; 

//make several questions within this object
var holidayQuestion = [{
    question: "What Christmas decoration was originally made from strands of silver?",
    choices: ["Ornaments", "Tinsel", "Mistletoe", "Wreaths"],
    rightAnswer: 1
}, {
    question: "What beverage company has been using Santa Claus in its advertising since 1931?",
    choices: ["Coca-Cola", "Pepsi", "Dr. Pepper", "Fanta"],
    rightAnswer: 0
}, {
    question: "When was the first New Year celebration?", 
    choices: ["1000 years ago", "2000 years ago", "3000 years ago", "4000 years ago"],
    rightAnswer: 4
}, {
    question: "What does the traditional New Year's song, \"Auld Lang Syne\" mean?"
    choices: 
}

// create start button
//$(".startbutton").click.function(){
   // $(this).hide();
   // counter = setInterval(timer, 1000);
   // displayTrivia();
//}; 

$(".startbutton").click(function(){
    $(this).hide(); 
    var counter = setInterval(timer, 1000); 
})

function timer () {
   count--;
   // why doesn't count = 0 work here
   if (count <= -1) {
        clearInterval(counter);
   }

    $(".timer").html(`Time Remaining : 00 : ${count} seconds`);
}




})