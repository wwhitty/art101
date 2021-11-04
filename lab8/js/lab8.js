/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 25 October
 * License: Public Domain
 */

 function isOdd(x){
   return (x % 2 == 1);
 }

 // test Functions
 console.log("Is 1 odd? ", isOdd(1));
 console.log("Is 2 odd? ", isOdd(2));

 array = [30, 11, 35, 9, 23, 5]
 console.log("Warriors array", array);

 var result = array.map(isOdd);
 // the return of this should be [false, true, true, true, true, true]
 console.log("Test if numbers are odd in array", result);

 var result = array.map(function(x){
   return x * 2;
 })

 // new array should be [60, 22, 70, 19, 46, 10]
 console.log("Array multiplied by 2:", result);
