/*
 * Author: Will Whitty <wwhitty@ucsc.edu>
 * Created: 29 November
 * License: Public Domain
 */

var myURL = "https://api.kanye.rest/"
$("#my-button").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
    // The API endpoint
    url: myURL,
    // Any data to send
    // data: { id: 123},
    // POST or GET request
    type: "GET",
    // data type we expect back
    dataType: "json",
  })
  // If the request succeeds, then the data is passed back
  .done(function(data) {
    console.log("Success:", data);
    $("#output").append("<p>" + data.quote);
  })
  // If the request fails
  .fail(function(request, error) {
    console.log(request, error);

  })
}
