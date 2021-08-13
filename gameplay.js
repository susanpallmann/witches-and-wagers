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

function trackGamePhase(key) {
    let phase = firebase.database().ref('TEST/round/currentPlayer/' + key);
    phase.on('value', function(snapshot) {
        updatePhase(snapshot.val());
    });
}

//var loc = firebase.database().ref('TEST/round/' + key);
//    loc.update({'player': 'Skooz'});

function updateDomText(element, text) {
    $(element).text(text);
}

function displayRoomCode(code) {
    updateDomText($('#room-code'), code);
}

function displayPlayers(code) {
    let location = firebase.database().ref(code + '/players/');
    location.on('value', function(snapshot) {
        let count = 1;
        snapshot.forEach((childSnapshot) => {
            let username = childSnapshot.key;
            let userData = childSnapshot.val();
            let vip = userData.VIP;
            let avatar = userData.avatar;
            $('.player-' + count + '-avatar').each(function() {
                $(this).parent().addClass(username);
                updateDomText($(this), avatar);
            });
            $('.player-' + count + '-name').each(function() {
                $(this).parent().addClass(username);
                updateDomText($(this), username);
            });
            count++;
        });
    });
}

function displayPlayerStats(code) {
    let location = firebase.database().ref(code + '/players/');
    let maxCounts = {
        'coward' : 0,
        'optimist' : 0,
        'pessimist' : 0
    };
    let playerStats = {
        'coward' : '',
        'optimist' : '',
        'pessimist' : ''
    };
    location.once('value', function(snapshot) {
        snapshot.forEach((childSnapshot) => {
            let username = childSnapshot.key;
            let userData = childSnapshot.val();
            let counts = userData.counts;
            for (let stat in counts) {
                if (counts[stat] > maxCounts[`${stat}`]) {
                    maxCounts[`${stat}`] = counts[stat];
                    playerStats[`${stat}`] = username;
                }
            }
        });
        updateDomText($('#stat-coward'), playerStats.coward);
        updateDomText($('#stat-optimist'), playerStats.optimist);
        updateDomText($('#stat-pessimist'), playerStats.pessimist);
    });
}

function displayGameStats(code) {
    let location = firebase.database().ref(code + '/trackers/');
    location.once("value", function(snapshot) {
        let trackers = snapshot.val();
        let helper = trackers.helper;
        helper = helper.player;
        let hurter = trackers.hurter;
        hurter = hurter.player;
        updateDomText($('#stat-helper'), helper);
        updateDomText($('#stat-saboteur'), hurter);
    });
}

function displayAllStats(code) {
    displayPlayerStats(code);
    displayGameStats(code);
}

function rearrangeScoreboard(values) {
}

function displayScoreboard(code) {
    let location = firebase.database().ref(code + '/players/');
    let values = {};
    location.on('value', function(snapshot) {
        snapshot.forEach((childSnapshot) => {
            let username = childSnapshot.key;
            let userData = childSnapshot.val();
            let gold = userData.gold;
            console.log(gold);
            values[username] = gold;
            let position = $('#scoreboard').find('.player-container');
            let goldUpdate = position.child('.gold');
            updateDomText(goldUpdate, gold);
            position = position.parent();
        });
    });
    
    //rearrangeScoreboard(values);
}
// Get player stats
// Compare player stats
// Update relevant stats


$(document).ready(function() {
    displayRoomCode('TEST');
    displayPlayers('TEST');
    displayAllStats('TEST');
    displayScoreboard('TEST');
});
