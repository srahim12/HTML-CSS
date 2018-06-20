var there = false;
var answer = prompt("Are we there yet?");
if(answer.indexOf("yes")!=-1){
	there=true;
}
while(there==false){
	var answer = prompt("Are we there yet?");
	if(answer.indexOf("yes")!=-1){
		there=true;
	}
}

alert("You made it!");