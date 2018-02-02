// Initialize Firebase
var config = {
  apiKey: "AIzaSyA6hUmQZtZ8RpHgowWWTkHMfFdRYoeGRiI",
  authDomain: "rps-game-ba2be.firebaseapp.com",
  databaseURL: "https://rps-game-ba2be.firebaseio.com",
  projectId: "rps-game-ba2be",
  storageBucket: "rps-game-ba2be.appspot.com",
  messagingSenderId: "157355804340"
};
firebase.initializeApp(config);

// Create an reference for the database
var database = firebase.database();

var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time
// the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {
  console.log(snap.val());
  
});

// When first loaded or when the connections list changes...
database.ref("/players").on("value", function(snap) {

});

function startGame() {

}