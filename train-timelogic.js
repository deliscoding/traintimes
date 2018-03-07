// Steps to complete:

// 1. Create Firebase link
// 2. Create initial train data in database
// 3. Create button for adding new trains - then update the html + update the database
// 4. Create a way to retrieve trains from the trainlist.
// 5. Create a way to calculate the time way. Using difference between start and current time.
//    Then take the difference and modulus by frequency. (This step can be completed in either 3 or 4)


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPOh-Xr-0WvfaZ4IHnipakvjO0mPQOWB8",
    authDomain: "hw-with-firebase.firebaseapp.com",
    databaseURL: "https://hw-with-firebase.firebaseio.com",
    projectId: "hw-with-firebase",
    storageBucket: "hw-with-firebase.appspot.com",
    messagingSenderId: "309537837335"
  };
  firebase.initializeApp(config);
var trainData = firebase.database();

// Adding Trains Button 
$("#add-train-btn").on("click", function() {

  // The variables below get user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train's data
  var newTrain = {

    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  // Uploads train data to the database
  // trainData refers to the var above-- firebase.database();
  trainData.ref().push(newTrain);

  // Logs all of the train info to the console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

  // Alert that Train was added
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

  // Determine when the next train arrives.
  return false;
});
