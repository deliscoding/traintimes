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