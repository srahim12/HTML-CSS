var arr =["AAAAA"];
var option = prompt("What would you like to do?");
while(option!=="quit"){
	if(option=="new"){
		addToDo();
	}
	else if(option == "list"){
		showToDo();
	}
	else if(option == "quit"){
		q=true;
	}
	else if(option == "delete"){
		deleteToDo();
	}
	option = prompt("What would you like to do?");
}


function addToDo(){
	var item = prompt("Enter a todo");
	arr.push(item);
	console.log(item + " added to list");
}

function showToDo(){
	console.log("*********");
	var i = 0;
	arr.forEach(function(list){
		console.log(i+": " + list);
		i++;
	});
	console.log("*********");
}

function deleteToDo(){
	var indx = prompt("Enter index of todo to delete");
	arr.splice(indx,1);
	console.log("Todo item removed");
}