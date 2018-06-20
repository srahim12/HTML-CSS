function factorial(num){
	if(num==0){
		return 1;
	}
	return num*factorial(num-1);
}

function kebabToSnack(string){
	return string.replace(/-/g, "_");

}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(1));

console.log(kebabToSnack("hello-world"));
console.log(kebabToSnack("dogs-are-awsome"));
console.log(kebabToSnack("blah"));