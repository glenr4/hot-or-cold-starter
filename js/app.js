
$(document).ready(function(){
	'use strict';

	// Global variables
	var numToGuess;
	
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
		$("#feedback").empty().append("Make your Guess!");
		$("#count").empty().append("0");
	};

	// Process a guess
	$(".game form").submit(function(event){
		// stop submit from refreshing the page
		event.preventDefault();

		var guess = $("#userGuess").val();
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
	});

	// Create new game on page load
	newGame();
});
