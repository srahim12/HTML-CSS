/*Problem Set 1*/
function isEven(num){
	if(num%2==0){
		return true;
	}
	else{
		return false;
	}
}
console.log(isEven(4));
console.log(isEven(9)); 
console.log("Problem Set 2");


/*Problem Set 2*/
function factorial(n){
	if(n==1){
		return 1;
	}
	else{
		return n* factorial(n-1);
	}
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));

/*Problem Set 3*/
function kebabToSnake(str){
	/*for(i = 0;i<str.length;i++){
		if(str.charAt(i)==='-'){
			console.log("There is a dash at " + i);
			str.replace(/-/g,"_");
		}
	}*/
	return str.replace(/-/g,"_");
	
}
console.log(kebabToSnake("hello-world"));