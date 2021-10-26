/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 25 October
 * License: Public Domain
 */

 // sortMovieTitle - this is a function that takes a user input and sorts the letters within the inputed movie title to create an imaginary sequel
 function sortMovieTitle() {
   var myFavMovie = window.prompt("Hi there! Tell me your favorite movie and I'll come up with the future sequel.");
   console.log("myFavMovie =", myFavMovie);
   // split the string to an array
   var movieArray = myFavMovie.split('');
   // sorting the movie array
   var movieArraySort = movieArray.sort();
   console.log("movieArraySort =", movieArraySort);
   // turn the array back to a string
   var movieSorted = movieArraySort.join('');
   console.log("movieSorted =", movieSorted);
   return movieSorted;
 }

// outputted results
 document.writeln("A future sequel to your favorite movie is: ",
  sortMovieTitle(), "</br>");
