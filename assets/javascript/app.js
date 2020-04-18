$(document).ready(function() {
// Initializing Firebase
var config = {
    apiKey: "AIzaSyDBGIwKC1eALMjEA6wNo9L45PgWdeZghEw",
    authDomain: "project-1-36f35.firebaseapp.com",
    databaseURL: "https://project-1-36f35.firebaseio.com",
    projectId: "project-1-36f35",
    storageBucket: "project-1-36f35.appspot.com",
    };

    firebase.initializeApp(config);

    // Reference to database service
    var database = firebase.database();

    var userInput = ""
    
    //hide gif section on document load
    $("#gif-section").hide()
// On click
$(".btn").on("click", function(event) {
    event.preventDefault();
    userInput = $("#search").val().trim();
    $("#news").show()
    $("#articles").show()
    database.ref().push({
        actor: userInput,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,

    //calls the function from the giphy js page
    })

    //clear the search bar after the button is clicked
    

   
   displayGifs(userInput)
   displayArticles(userInput)
   videos(userInput)

    //show gif section on button click
    $("#gif-section").show()




  actor = [];
  $("#actor-name").text(userInput);
  
  
   
})

database.ref().limitToLast(3)
.on("child_added", function(childSnapshot) {
    
    var newHist = childSnapshot.val().actor
    var history = $("<p>").text(newHist)
    $("#history").append(history)

}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
});