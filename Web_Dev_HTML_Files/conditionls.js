var age = prompt("Enter your age:");

// --Conditionals
// if age is negative
// 	print an error message

// if age is 21
// 	print happ 21 birthday

// if age is odd
// 	print you age is odd

if(age<0){
	console.log("Error");
}
else{

if(age==21){
	console.log("Happy 21st birthday");
}

if((age%2)!==0){
	console.log("Age is odd");
}

}