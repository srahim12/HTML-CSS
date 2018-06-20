var MoviesArray = [{
						title:"Im Bruges",
						rating:5,
						hasWatched:true
					},
					{
						title:"Frozen",
						rating:4.5,
						hasWatched:fals
					},
					{
						title:"Mad Max Fury Road",
						rating:5,
						hasWatched:true
					},
					{
						title:"Les Miserables",
						rating:3.5,
						hasWatched:false
					}];

function movie(){
	var watched= "You have ";
	if(MoviesArray[i].hasWatched===true){
		watched+= "not seen ";
	}
	else{
		watched+= "seen ";
	}
	console.log(watched + "\""+ MoviesArray[i].title + "\"" + " - " + MoviesArray[i].rating + " stars");
}
for(var i = 0;i<MoviesArray.length;i++){
	movie();
}

