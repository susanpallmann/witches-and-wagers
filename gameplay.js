// Generate Room Code
    // Create random sequence of letters
    // Check if that sequence is already in play
    // That is, check if sequence exists, and then check game status for not in use
        // If not, use it, create game in DB
            // Empty the DB directory at this location
            // Set phase to "setup"
            // Start Update Display Game Phase listener
        // If so, repeat this (Generate Room Code)

// Update Display Game Phase
    // Check current phase in DB
        // If setup, show setup
        // If tutorial, show tutorial
        // If play, check round phase, update accordingly
            // intro, show monster and player, respective scores
            // bets, prompt users to place bets, timer for 60 sec
            // showBets, show bet distributions and amounts
            // playerAct1, prompt user to equip or flee, timer for 60 sec
            // showItems, show card animation to reveal items and who bet what
            // fleeCheck "player tried to flee, rolling dice..."
            // playerAct2, prompt user to equip, timer for 30 sec
            // playFight, show fight scene
            // playerVictory, show victory on screen
            // playerDefeat, show defeat on screen
            // payout, show coins going to profiles
            // scoreboard, show current point distribution
            // showAll, show everything (testing purposes)
        // If error, show error message
        // If victory, show sequence
        // If outro, show credits
        // If abandoned, show title screen (this shouldn't ever happen)
        // If showAll, show everything (testing purposes)

// Player Joins
    // Check number of players in the game
    // If number of players is 0,
        // Create player in DB, make VIP
            // Send username to DB, select random available avatar, send
            // Show avatar selection screen
    // If number of players is >8,
        // Don't create player
        // Show error message, room is full
    // If not,
        // Create player in DB, make not VIP
            // Send username to DB, select random available avatar, send
            // Show avatar selection screen

/* END PSEUDOCODE, START REAL CODE */

// Example of a database update for future reference
//var loc = firebase.database().ref('TEST/round/' + key);
//    loc.update({'player': 'Skooz'});

/* ----------------------------------------------------------------------------------------------*/
/*  THE BELOW DEALS WITH UPDATING THE GAME DISPLAY & READING THE DATABASE                        */
/* ----------------------------------------------------------------------------------------------*/

// Reusable function to change the text in a provided DOM element
// Making this more in case we switch to React or anything similar down the road
// Consider making this instead take an object as parameter and effectively "queue" DOM changes
// to avoid having to call this function 80 times in a row (TODO)
function updateDomText(element, text) {
    $(element).text(text);
}

// Simple function to show the room code in the setup screen
function displayRoomCode(code) {
    updateDomText($('#room-code'), code);
}

// Function to update all player info containers with current usernames, avatars, and VIP status
// if applicable. We may want to turn this off once the game gets going since those things will
// no longer be editable (TODO)
function displayPlayers(code) {
    // Grabs directory location
    let location = firebase.database().ref(code + '/players/');
    // Takes ongoing snapshot
    location.on('value', function(snapshot) {
        // Iteration counter
        let count = 1;
        // For each player
        snapshot.forEach((childSnapshot) => {
            // Save information to variables
            let username = childSnapshot.key;
            let userData = childSnapshot.val();
            let vip = userData.VIP;
            let avatar = userData.avatar;
            // Update each instance of player avatar elements
            $('.player-' + count + '-avatar').each(function() {
                $(this).parent().addClass(username);
                updateDomText($(this), avatar);
            });
            // Update each instance of player username elements
            $('.player-' + count + '-name').each(function() {
                $(this).parent().addClass(username);
                updateDomText($(this), username);
            });
            // Increase iteration counter
            count++;
        });
    });
}

// Function to display stats stored under the individual player in the database (slightly 
// different process to get this information, some calculation needed)
function displayPlayerStats(code) {
    // Grabs directory location
    let location = firebase.database().ref(code + '/players/');
    // Saves maximum score per category, starts at 0
    let maxCounts = {
        'coward' : 0,
        'optimist' : 0,
        'pessimist' : 0
    };
    // Saves actual user each score belongs to, starts empty
    let playerStats = {
        'coward' : '',
        'optimist' : '',
        'pessimist' : ''
    };
    // Takes a snapshot one time (this information won't update visually)
    location.once('value', function(snapshot) {
        // For each player
        snapshot.forEach((childSnapshot) => {
            // Save information to variables
            let username = childSnapshot.key;
            let userData = childSnapshot.val();
            let counts = userData.counts;
            // Iterate through user's stats (saved under "counts")
            for (let stat in counts) {
                // If the score in the given statistic is greater than what's saved in maxCounts
                if (counts[stat] > maxCounts[`${stat}`]) {
                    // Update maxCounts with new high score
                    maxCounts[`${stat}`] = counts[stat];
                    // Update playerStats with the corresponding username
                    playerStats[`${stat}`] = username;
                }
            }
        });
        // Update DOM elements accordingly
        updateDomText($('#stat-coward'), playerStats.coward);
        updateDomText($('#stat-optimist'), playerStats.optimist);
        updateDomText($('#stat-pessimist'), playerStats.pessimist);
    });
}

// Function to display stats stored by the game overall (not under specific players)
function displayGameStats(code) {
    // Grabs directory location
    let location = firebase.database().ref(code + '/trackers/');
    // Takes a snapshot one time (this information won't update visually)
    location.once("value", function(snapshot) {
        // Save information to variables
        let trackers = snapshot.val();
        let helper = trackers.helper;
        helper = helper.player;
        let hurter = trackers.hurter;
        hurter = hurter.player;
        // Update DOM elements accordingly
        updateDomText($('#stat-helper'), helper);
        updateDomText($('#stat-saboteur'), hurter);
    });
}

// Parent function to update all statistics, calls more specific functions since the two
// will always be run together
function displayAllStats(code) {
    displayPlayerStats(code);
    displayGameStats(code);
}

// Function to make sure player placement on the scoreboard corresponds with their place in
// the game, uses CSS flexbox and order to achieve result
// TODO: think through how to animate this swap
function rearrangeScoreboard(values) {
    // For each record passed in
    for (let record in values) {
        // Create some variables
        let username = record;
        let score = values[record];
        let position = $('#scoreboard').find('.' + username);
        position = position.parent();
        // Apply the amount of gold as CSS order property, since parent is row-reverse, high
        // values will show first
        position.css('order', score);
    }
}

// Function to update scoreboard with active players and their respective scores
function displayScoreboard(code) {
    // Grabs directory location
    let location = firebase.database().ref(code + '/players/');
    // Initializing values variable for use later
    let values = {};
    // Take an ongoing snapshot to allow for continuous updates
    location.on('value', function(snapshot) {
        // For each player
        snapshot.forEach((childSnapshot) => {
            // Save some information to variables
            let username = childSnapshot.key;
            let userData = childSnapshot.val();
            let gold = userData.gold;
            // Add gold amount and username to "values" object
            values[username] = gold;
            let position = $('#scoreboard').find('.' + username);
            let goldUpdate = position.find('.gold');
            // Display amount of gold in the DOM (player name/avatar is already handled by 
            // displayPlayers function)
            updateDomText(goldUpdate, gold);
        });
        // Call rearrangeScoreboard to update CSS order properties
        rearrangeScoreboard(values);
    });
}

function clearCardsDom(location) {
    $(location).empty();
}

function createCardDom(location, cardInfo) {
    let number = cardInfo.number;
    let assigned = cardInfo.assigned;
    let cardLookup = deck[number];
    let cardSprite = cardLookup[2];
    $(location).append(`<div class="card ${assigned}" style="background-image: url('cards/${cardSprite}.png')"><div class="card-number">${number}</div></div>`);
}

function sortLoadingCards(values) {
    let monster = values.monster;
    let player = values.player;
    clearCardsDom($('#cards-in-play-1'));
    for (let actor in values) {
        let thisActor = actor;
        let thisCardsArray = values[actor];
        for (let i = 0; i < thisCardsArray.length; i++) {
            createCardDom($('#cards-in-play-1'),{'number' : thisCardsArray[i], 
                                                 'assigned' : thisActor});
        }
    }
}
                       
function loadCardDisplay(code) {
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/audienceItems/');
     // Initializing values variable for use later
    let values = {};
    // Take an ongoing snapshot to allow for continuous updates
    location.on('value', function(snapshot) {
        // For each (monster and player)
        snapshot.forEach((childSnapshot) => {
            // Save some information to variables
            let label = childSnapshot.key;
            let cards = childSnapshot.val();
            let cardsArray = [];
            cardsArray = Object.keys(cards);
            values[label] = cardsArray;
        });
        sortLoadingCards(values);
    });
}

// When document loads
$(document).ready(function() {
    // For now calls all of the "starter" functions just for testing. Going to also write
    // a little about when these should be called in the end
    // TODO: Call when setup phase begins
    displayRoomCode('TEST');
    // TODO: Call when setup phase begins
    displayPlayers('TEST');
    // TODO: Call when outro phase begins
    displayAllStats('TEST');
    // TODO: Call during the scoreboard phase of the play phase
    displayScoreboard('TEST');
    loadCardDisplay('TEST');
});
