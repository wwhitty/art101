/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 15 November
 * License: Public Domain
 */

 // create a function and return a NBA player's name
function basketballPlayer(str) {
  //counts the letters in str and assigns it to a variable length
  len = str.length;
  //uses modulus (% operator) to get the remainder with 4: mod = length % 4
  mod = len % 4;
  //create a conditional that will return Michael Jordan, Steph Curry, LaMelo, and Javale McGee depending on whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {
    return "Michael Jordan"
  }
  else if (mod == 1) {
    return "Steph Curry"
  }
  else if (mod == 2) {
    return "LaMelo Ball"
  }
  else if (mod == 3) {
    return "Javale McGee"
  }
}
  // Create a click listener attached to #button that gets the value of #input and assigns it to a variable name
  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var player = basketballPlayer(name);
    newText = "<p> Your NBA Comparison is " + player + "</p>";
    document.getElementById("output").innerHTML = newText;
  })
