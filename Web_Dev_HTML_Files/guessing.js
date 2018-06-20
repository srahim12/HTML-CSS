var num = 34;

var guess = Number(prompt("Enter a guess: "));
if(guess===num){
	alert("You guessed it... HUUH!");
}
else if(guess>num){
	alert("Too high");
}
else{
	alert("Too low");
}