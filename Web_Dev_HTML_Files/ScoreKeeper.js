var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelectorAll("button")[2];
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var winningScore = document.getElementById("winningScore");
var numDisplay = document.querySelector("input[type='number']");


var p1Score = 0;
var p2Score = 0

var gameOver = false;
var gameScore = 5;



console.log(p1Display);
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score==gameScore){
			gameOver=true;
			p1Display.classList.add("win");
		}
		p1Display.textContent = p1Score;
	}	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score==gameScore){
			gameOver=true;
			p2Display.classList.add("win");
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", reset);

numDisplay.addEventListener("change", function(){
	gameScore = numDisplay.value;
	winningScore.textContent = gameScore;
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver=false;
	p1Display.classList.remove("win");
	p2Display.classList.remove("win");
}