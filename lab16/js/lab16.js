/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 2 November
 * License: Public Domain
 */

 var myURL = "https://yesno.wtf/api"
 $("#my-button").click(callAjax);

 function callAjax() {
   console.log("click");
 // Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs)
     url: myURL,
     // The data to send (will be converted to a query string)
     //data: {
             // here is where any data required by the api
             //   goes (check the api docs)
             //id: v2,
             //api_key: "blahblahblah",
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
   })
     .done(function(data) {
       console.log("Success:", data);
       var imgUrl = data.image;
       var imgTag = "<img src=" + imgUrl + ">";
       console.log(imgUrl, imgTag);
       $("#image").html(imgTag);
       //$("#image").html(imgUrl);

    })
     // What we do if the api call fails
     .fail(function(request,error) {
       console.log(request, error);
     })
     }

 // var myURL = "https://pokeapi.co/api/v2/pokemon/"
 // $("#my-button").click(callAjax);
 //
 // function callAjax() {
 //   console.log("click");
 //   // Using the core $.ajax() method
 //   $.ajax({
 //     // The API endpoint
 //     url: myURL,
 //     // Any data to send
 //     // data: { id: 123},
 //     // POST or GET request
 //     type: "GET",
 //     // data type we expect back
 //     dataType: "json",
 //   })
 //   // If the request succeeds, then the data is passed back
 //   .done(function(data) {
 //     console.log("Success:", data);
 //     $("#output").append("<p>" + data.quote);
 //   })
 //   // If the request fails
 //   .fail(function(request, error) {
 //     console.log(request, error);
 //
 //   })
 // }
