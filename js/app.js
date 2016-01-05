
$(document).ready(function(){
	'use strict';

	// Global variables
	var numToGuess;
	var guessCnt;
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// Create a new game
  	$(".new").click(function(){
  		newGame();
  	});

	// Reset for a new game
	function newGame(){
		// Number to guess
		numToGuess = Math.round(Math.random()*100);
		console.log(numToGuess);
		// Reset text and count
		guessCnt = 0;
		$("#feedback").empty().append("Make your Guess!");
		$("#count").empty().append(guessCnt);
		$("#guessList").empty();
		$(".game form [name='userGuess']").val("");
	};

	// Process a guess
	$(".game form").submit(function(event){
		// stop submit from refreshing the page
		event.preventDefault();

		// Get user input and validate
		var guess = parseInt($("#userGuess").val(),10);
		if (guess < 1 || guess > 100){
			$("#feedback").empty().append("Must be between 1 and 100");
			return false;
		}
		if (!$.isNumeric(guess)){
			$("#feedback").empty().append("That's not a number!");
			return false;
		}

		// Check the guess
		var diff = Math.abs(guess - numToGuess);
		switch(true){
			case (diff === 0):
				$("#feedback").empty().append("You guessed right!");
				break;
			case (diff <= 2):
				$("#feedback").empty().append("Super hot");
				break;
			case (diff <= 5):
				$("#feedback").empty().append("Hot");
				break;
			case (diff <= 10):
				$("#feedback").empty().append("Warm");
				break;
			case (diff <= 20):
				$("#feedback").empty().append("Cold");
				break;
			case (diff > 20):
				$("#feedback").empty().append("Super cold!");
				break;
			default:
				$("#feedback").empty().append("Make your Guess!");
				break;
		};
		// Increment count
		guessCnt++;
		$("#count").empty().append(guessCnt);

		// Add guessed number to list
		$("#guessList").append("<li>"+guess);

		// Clear form input
		$(".game form [name='userGuess']").val("");
	});

	// Create new game on page load
	newGame();
});
