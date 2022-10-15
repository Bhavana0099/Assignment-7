/*eslint-env browser*/

//STEP 1

var favMovies = ["The Conjuring", "The Hobbit", "Mission Impossible", "KingsMen", "The Spiderman"];
window.console.log(favMovies[1]);

//STEP 2
/*
var movies = new Array(5);
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
window.console.log(movies[0]);
*/
//STEP 3
/*
var movies = new Array(5);
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
movies.splice(2,0, "Transformers");
window.console.log(movies.length);
*/
//STEP 4
/*
var movies = [];
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
delete movies[0];
window.console.log(movies);
*/
//STEP 5
/*
var movies = [];
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
*/
//STEP 6
/*
var movies = [];
var index;
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
for (index in movies) {
    window.console.log(movies[index]);
}
*/
//STEP 7
/*
var movies = [];
var index;
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
movies.sort();
for (index in movies) {
    window.console.log(movies[index]);
}
*/
//STEP 8
/*
var movies = [];
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
var leastFavMovies = ["Dictator", "The Grey Man", "WonderWoman"];
window.console.log("\nMovies I like:\n\n" + movies.join("\n") + "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");
*/
//STEP 9
/*
var movies = [];
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
var leastFavMovies = ["Dictator", "The Grey Man", "WonderWoman"];
movies = movies.concat(leastFavMovies);
window.console.log(movies.sort().reverse());
*/
//STEP 10
/*
var movies = [];
movies[0] = "Avengers";
movies[1] = "Frozen";
movies[2] = "Batman";
movies[3] = "Black Panther";
movies[4] = "Spy"
movies[5] = "Transformers";
movies[6] = "The Conjuring";
var leastFavMovies = ["Dictator", "The Grey Man", "WonderWoman"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.pop());
*/