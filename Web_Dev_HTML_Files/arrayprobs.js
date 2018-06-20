function printReverse(arr){
	for(var i =arr.length-1;i>=0;i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var obj = arr[0];
	for(var i = 1;i<arr.length;i++){
		if(arr[i]!==obj){
			return false;
		}
	}
	return true;
}

function sumArray(arr){
	var sum =0;
	for(var i = 0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum;
}

function max(arr){
	var max = arr[0];
	for(var i = 1;i<arr.length;i++){
		if(arr[i]>=max){
			max = arr[i];
		}
	}
	return max;
}

// Problem Set 1
var array = ["a","b","c","d"];
printReverse(array);

// Problem Set 2
var array2 = [1,1,1,1];
var array3 = [1,1,1,2];
var array4 = ["a","b","c"];
var array5 = ["a","a","a"];
console.log(isUniform(array2));
console.log(isUniform(array3));
console.log(isUniform(array4));
console.log(isUniform(array5));

// Problem Set 3
var array6 = [1,2,3];
var array7 = [10,3,10,4];
var array8 = [-5,100];
console.log(sumArray(array6));
console.log(sumArray(array7));
console.log(sumArray(array8));

// Problem Set 4
var array9 = [1,2,3];
var array10 = [10,3,10,4];
var array11 = [-5,100];
console.log(max(array9));
console.log(max(array10));
console.log(max(array11));