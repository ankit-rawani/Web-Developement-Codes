var secretNumber = 4;
var guess = Number(prompt("Guess the number..."));
if(guess === secretNumber) {
	alert("Woah...You got it right!");
}
else if(guess > secretNumber) {
	alert("Guess is too High! Guess again...");
}
else {
	alert("Guess is too Low! Guess again...");
}