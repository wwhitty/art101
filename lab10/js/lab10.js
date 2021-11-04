/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 4 November
 * License: Public Domain
 */
 // create a function for putting a name in a title sequence
function putNameInTitle(){

  // create variables for field and name. Name will be for what the user puts in the box and field is the area where the user puts in their name
  var field = document.getElementById("myfield");
  var name = field.value;

  // define a varible for the header where the name variable will go
  // replaces the HTML with "Hi there " + name
  var headingEl = document.getElementById("user-name");
  headingEl.innerHTML = "Hi there " + name;
}

//Attach an event listener to the button
var buttonEl = document.getElementById("my-button");
buttonEl.addEventListener("click", putNameInTitle);
