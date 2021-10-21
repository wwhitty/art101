/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 20 October
 * License: Public Domain
 */

 // Define Variables
 myTransport = ["car", "bus", "uber"];

 myMainRide = {
   make: "Tesla",
   model: "Model X",
   color: "white",
   year: 2018,
   age: function() {
     return 2021 - age;
   }
 }

 // output
 document.writeln("Different ways I get around Santa Cruz: ", myTransport, "</br>");
 document.writeln("My Dream Ride: <pre>");
 document.writeln(JSON.stringify(myMainRide, null, '\t', "</pre>"));
