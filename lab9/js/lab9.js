/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 1 November
 * License: Public Domain
 */

document.getElementById("output");

// assign it the output to the variable outputEl
var outputEl = document.getElementById("output");

// create a new element and assign it to a variable new1El
document.createElement("p");
var new1El = document.createElement("p");

// set this new element's id and change the text of that element
new1El.id = "p";
new1El.innerHTML = "Rocket Launch Button";

// create another new element and assign it to another variable new2El
document.createElement("h2");
var new2El = document.createElement("h2");

// set this new element's id and change the text of that element
new2El.id = "h2";
new2El.innerHTML = "Cancel Rocket Launch Button";

// append both of these new elements using appendChild() with the outputEl
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
