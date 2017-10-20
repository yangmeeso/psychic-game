// Let user guesses letters matched with computer's guess. If user can't match same letters within 10 chances, it resets to the beginning. 

// Set loop to repeat 10 times and then start from beginning. 

	// Arrays.
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var wins = 0
	var loses = 0
	var ties = 0
	var guessesLeft = 10
	var guessesMade = [];


	// Lower-case checkup.
	document.onkeyup = function (event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		var computerGuess = letters[Math.floor(Math.random()*letters.length)];
	

	// Conditional function (if/else) for the users' guess.
	// Set the guess limits (10 times).

		if (userGuess === computerGuess) {
			wins++;
			guessesLeft--;
			guessesMade.push(userGuess);
			console.log(userGuess);
			console.log(computerGuess);
		}

		else {
			console.log("loses: " +loses);
			loses++;
			guessesLeft--;
			guessesMade.push(userGuess);
			console.log(userGuess);
			console.log(computerGuess);
		}

	// Display (writeStats) each win, lose, chances left for guess (10 times), and incorrect guess on screen.
	var html = "<h1>Psychic-Game</h1>" +
	"<p>Press any keys to start playing!</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Loses: " + loses + "</p>" +
	"<p>Ties: " + ties +"</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your guesses so far: " + guessesMade + "</p>";

	document.querySelector('#psychic_game').innerHTML = html;

	}