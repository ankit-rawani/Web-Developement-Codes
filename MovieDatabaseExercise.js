var movies = [
{
	movieName: "The Harry Potter Series",
	hasWatched: true,
	rating: 5 
},
{
	movieName: "The Conjuring",
	hasWatched: true,
	rating: 4.5
},
{
	movieName: "Delhi6",
	hasWatched: false,
	rating: 4.7
},
{
	movieName: "Kedarnath",
	hasWatched: true,
	rating: 5
}
];

movies.forEach(function(movie) {
	
	console.log(movieString(movie));
});

function movieString(movie) {
	var string = "You have ";
	if(movie.hasWatched) {
		string = string + "watched ";
	}else {
		string = string + "not seen ";
	}
	string = string + "\"" + movie.movieName + "\" ";
	string = string + "- " + movie.rating + " stars";
	return string;
}