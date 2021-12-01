/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 23 November
 * License: Public Domain
 */

 maxFactors = 4;

 outputEl = document.getElementById("output");

 // this function gets the factors from the inputs and write them in an object
 function getFactorObj() {
     var factorObj = {};
     for (var factor=0; factor<maxFactors; factor++) {
         numId = "num" + factor;
         textId = "text" + factor;
         numValue = document.getElementById(numId).value;
         textValue = document.getElementById(textId).value;
         console.log(factor + ") num:", numValue, "text:", textValue)
         // if either value is blank, don't use it
         if (numValue && textValue) {
             factorObj[numValue] = textValue;
         }
     }
     return factorObj;
 }

 function outputToPage(str) {
     newEl = document.createElement("p");
     newEl.innerHTML = str;
     outputEl.appendChild(newEl);
 }


// Create a "FizzBuzz" function similar to how we did in class.
function fizzBuzz (maxNums, factorObj) {
  //iterate over all of out numbers
  for (var num=0; num<maxNums; num++) {
    //reset output string
    var outputStr = "";
    //iterate over the factors we got from the html
    for (var factor in factorObj) {
      if (num % factor == 0) {
        outputStr += factorObj[factor];
      }
    }
    //if we have words in outputStr, then it will look like this " : FizzBuzz!"
    if (outputStr) {
      outputStr = " : " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  if (! max) {
    reportError("You must provide a maximum value");
    return;
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length === 0) {
    reportError("You must provide at least one factor and text");
    return;
  }
  // this clears the error if there's one
  outputEl.innerHTML = "";
  fizzBuzz(max, factorObj);
  outputEl.classList.add("cols");
})
