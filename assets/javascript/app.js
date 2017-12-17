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
    question:
    choices:
    rightAnswer: 
}];

// create start button
$(".startbutton").click.function(e) {
    $(this).hide();
    counter = setInterval(timer, 1000);
    displayTrivia();
}); 

function timer () {
    count--;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }

    $(".timer").html(`Time Remaining: 00: ${count} seconds`);
}




}