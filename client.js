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
// bluh
