/* ----------------------------------------------------------------------------------------------*/
/*             THE BELOW DEALS WITH UPDATING THE GAME DISPLAY & READING THE DATABASE             */
/* ----------------------------------------------------------------------------------------------*/

// Function to determine if a username is valid, returns true or returns error message
function validateUsername(code, username) {
  
  // Grabs directory location
    let location = firebase.database().ref(code + '/players/');
    
  // Take an ongoing snapshot to allow for continuous updates
  location.once('value', function(snapshot) {
    let allPlayers = snapshot.val();
    
    for (let player in allPlayers) {
      if (player == username) {
        return 'Username is already taken.';
      }
    }
    
    if (username.length > 20 || username.length < 3) {
      return 'Username must be between 3 and 20 characters.';
    }
    
    let regex = /^[0-9a-z]+$/;
    if (!username.match(regex)) {
      return 'Username can only contain alphanumeric characters.';
    }

  });
  
}

firebase.auth().signInAnonymously()
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log('test');
    let location = firebase.database().ref('TEST' + '/players/authorized');
    let user = user.uid;
    let values = {};
    values[user] = true;
    location.update(values);
    console.log('test');
    // ...
  } else {
    // User is signed out
    // ...
  }
});
