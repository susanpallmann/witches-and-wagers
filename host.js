/* ----------------------------------------------------------------------------------------------*/
/*                    GLOBAL VARIABLES FOR GLOBAL INFORMATION IN THE FRONT-END                   */
/* ----------------------------------------------------------------------------------------------*/

let players = {};
let roomCode;

/* ----------------------------------------------------------------------------------------------*/
/*           PSEUDO CODE I'M NOT SURE IF I'LL NEED THAT I'M TOO AFRAID TO DELETE YET             */
/* ----------------------------------------------------------------------------------------------*/

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
        // If won, show sequence
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

/* ----------------------------------------------------------------------------------------------*/
/*                           FRONT-END ONLY LOGIC, NO/LITTLE DATABASE                            */
/* ----------------------------------------------------------------------------------------------*/

// Generate a random monster for the round, returns monster information as an object
function generateMonster() {
    
    // Initialize variable
    let monster = {};
    
    // Choosing a random monster type from monsters object (monsters.js)
    let randomMonster = Math.floor(Math.random() * Object.keys(monsters).length) + 1;
    let monsterData = monsters[randomMonster];

    // Listing monster attributes as additional variables
    let monsterName = monsterData.name;
    let monsterStrength = monsterData.baseStrength;
    let monsterPrefix = monsterData.prefix;
    
    // If monster has a prefix (like "a" or "the"), add a space after it
    if (monsterPrefix) {
        monsterPrefix = monsterPrefix + ' ';
        
    // If monster doesn't have a prefix, leave the variable an empty string
    } else {
        monsterPrefix = '';
    }
    
    // Randomly generating a strength modifier (to multiply the monster's base strength)
    let generatedStrength = Math.round((Math.random() * (2 - 0) + 0) * 10) / 10;
    monsterStrength = Math.round(monsterStrength * generatedStrength);
    
    // Initializing a strength prefix variable
    let strengthPrefix;
    
    // Depending on the strength modifier, choosing a specific prefix
    if (generatedStrength == 0) {
        strengthPrefix = 'pitiful ';
        
    } else if (generatedStrength < 0.5) {
        strengthPrefix = 'weak ';
        
    } else if (generatedStrength < 1) {
        strengthPrefix = 'lesser ';
        
    } else if (generatedStrength == 1) {
        strengthPrefix = '';
        
    } else if (generatedStrength < 1.5) {
        strengthPrefix = 'greater ';
        
    } else if (generatedStrength < 2) {
        strengthPrefix = 'enlightened ';
        
    } else {
        strengthPrefix = 'apocolyptic ';
    }
    
    // Assembling a final form of the monster's name
    let finalMonsterName = monsterPrefix + strengthPrefix + monsterName;
    
    // Filling our object with our data
    monster = {
        "attributes" : {
            "appearance" : randomMonster
        },
        "monster" : finalMonsterName,
        "score" : monsterStrength
    }
    
    // Returns values
    return monster;
}

// Recursive function to check if the room code is complete and generate random letters if not
// Sorry for commenting inconsistencies; this code is from one of my previous attempts at this game
function generateRoomCode(code) {
    
    // If the string isn't yet 4 characters long
    if (code.length < 4) {
        
        // Generate a random number between 0 and 25
        // Convert this new value to an ascii character (uppercase)
        let newLetter = Math.floor(Math.random() * 25);
        newLetter = String.fromCharCode(65 + newLetter);
        
        // Add the new value to the existing room code
        roomCode =  code + newLetter;

        // Run this function again to check if the code is complete now (length of 4)
        generateRoomCode(roomCode);
        
    // If the string is 4 characters
    } else {
        
        // Update roomCode global variable
        roomCode = code;
        
        // End recursion
        // Passes the 4-digit code into the verifyRoomCode function
        verifyRoomCode(roomCode);
    }
}

// Function to check if the room key passed into it (key) is already an in-session game in the database
// Sorry for commenting inconsistencies; this code is from one of my previous attempts at this game
// I realize this reads the database but I want to keep it near generateRoomCode function
function verifyRoomCode(code) {
    
    // Checks that specific location in the database and takes a snapshot
    firebase.database().ref(code).once("value", snapshot => {
        
        // If the snapshot exists already
        if (snapshot.exists()) {
            
            // Rerun the code generator and try again
            generateRoomCode('');
            
        // If the snapshot doesn't exist, we can set up the lobby
        } else {
            
            // TODO generate lobby here; keeping console log until I need this to actually work
            console.log(code + ' does not exist in DB, make lobby');
        }
    });
}

/* ----------------------------------------------------------------------------------------------*/
/*                      THE BELOW DEALS WITH UPDATING/EDITING THE DATABASE                       */
/* ----------------------------------------------------------------------------------------------*/

// Writes to a provided location under the room code a value or set of values
function databaseWrite(code, path, values) {
    
    // Creates database location from parameters
    let location = firebase.database().ref(code + path);
    
    // If values is set to null
    if (values === null) {
        
        // Delete everything at this path
        location.set(values);
        
    // Otherwise
    } else {
    
        // Sets that location to the provided value or values
        location.update(values);
    }
}

/* ----------------------------------------------------------------------------------------------*/
/*             THE BELOW DEALS WITH UPDATING THE GAME DISPLAY & READING THE DATABASE             */
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

// Retrieves wagers on each outcome from database and adds them together, then updates the correct
// field with the total.
// This also loads names and amounts from specific players; I wanted to have them separate but I'm
// merging them to avoid rewriting 90% of the same code
function displayBets(code) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/bets/');
    
    // Takes ongoing snapshot
    location.on('value', function(snapshot) {
        
        // For each bet outcome
        snapshot.forEach((childSnapshot) => {
            
            // Save information to variables
            let outcome = childSnapshot.key;
            let wagers = childSnapshot.val();
            
            // Initializing a total variable outside of the loop
            let total = 0;
            
            // Clear container of any previous information if it exists
            $(`#${outcome} .bet-players`).empty();
            
            // For each wager listed
            for (let wager in wagers) {
                
                // Add to total
                total = total + wagers[wager];
                
                // Show individual bets and avatars
                let storedPlayerData = players[wager];
                $(`#${outcome} .bet-players`).append(`<div class="bet-container ${wager}"></div>`);
                $(`#${outcome} .bet-players .bet-container.${wager}`).append(storedPlayerData.avatar.clone());
                $(`#${outcome} .bet-players .bet-container.${wager}`).append(`<div class="small-gold">${wagers[wager]}</div>`);
            }
            
            // Updates the dom to reflect totals
            updateDomText($(`#${outcome} .gold`), total);
        });
    });
}

// Toggles visibility of owners of each wager when called (since bets are anonymous at first)
// Difference in animation is intentional - fade in when appearing, vanish immediately when 
// disappearing
function toggleBetNames() {
    
    // If individual bets are already visible
    if ($('.bet-players').is(':visible')) {
        
        // Hide them
        $('.bet-players').each(function(index) {
            $(this).hide();
        });
        
    // Otherwise
    } else {
        
        // Make them visible again
        $('.bet-players').each(function(index) {
            $(this).fadeIn();
        });
    }
}

// Function to display player and monster's current scores in the game's fight scene
// TODO: consider making this a "once" if we figure out how to reuse a snapshot function
function displayActorScores(code) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/');
    
    // Takes ongoing snapshot
    location.on('value', function(snapshot) {
        
        // Stores information about the current round
        let round = snapshot.val();
        
        // Retrieving information about monster and current player from snapshot
        let monster = round.currentMonster;
        let player = round.currentPlayer;
        
        // Updating DOM accordingly (hope to make this a single call in the future TODO)
        updateDomText($('#monster .name'), monster.monster);
        updateDomText($('#player .name'), player.player);
        updateDomText($('#monster .score'), monster.score);
        updateDomText($('#player .score'), player.score);
    });
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
        
        // Clearing existing data
        $('#setup-players').empty();
        
        // For each player
        snapshot.forEach((childSnapshot) => {
            
            // Save information to variables
            let username = childSnapshot.key;
            let userData = childSnapshot.val();
            let vip = userData.VIP;
            let avatar = userData.avatar;
            
            // Creating a base DOM object based on the player data to update the players global variable
            // TODO: need a function to remove a player from this if they leave the game
            players[username] = {
                "avatar" : $(`<div class="player-${count}-avatar" style="background-image: url('avatars/${avatar}.png')"></div>`),
                "username" : $(`<div class="player-1-name">${username}</div>`)
            }
            
            // Retrieves specific player's information
            let storedPlayerData = players[username];
            
            // Appending avatar and username to the DOM
            $('#setup-players').append(storedPlayerData.avatar.clone());
            $('#setup-players').append(storedPlayerData.username.clone());

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
function rearrangeScoreboard(values) {
    
    // For each record passed in
    for (let record in values) {
        
        // Create some variables
        let username = record;
        let score = values[record];
        
        // Apply the amount of gold as CSS order property, since parent is row-reverse, high
        // values will show first
        $('#scoreboard').find('.' + username).css('order', score);
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
        $('#scoreboard').empty();
        
        // For each player
        snapshot.forEach((childSnapshot) => {
            
            // Save some information to variables
            let username = childSnapshot.key;
            let userData = childSnapshot.val();
            let gold = userData.gold;
            
            // Add gold amount and username to "values" object
            values[username] = gold;
            
            // Visually update scoreboard in the DOM
            let position = $('#scoreboard').find('.' + username);
            let storedPlayerData = players[username];
            $('#scoreboard').append(`<div class="player-container ${username}"></div>`);
            $('#scoreboard').children('.' + username).append(storedPlayerData.avatar.clone());
            $('#scoreboard').children('.' + username).append(storedPlayerData.username.clone()); 
            $('#scoreboard').children('.' + username).append(`<div class="gold">${gold}</div>`);
        });
        
        // Call rearrangeScoreboard to update CSS order properties
        rearrangeScoreboard(values);
    });
}

// Empties a location, written specifically for the card animation
function clearCardsDom(location) {
    $(location).empty();
}

// Animates cards as they show up during specific parts of a round, queued by queueCards()
function createCardDom(location, cardInfo) {
    
    // Pulling out some information from cardInfo
    let number = cardInfo.number;
    let assigned = cardInfo.assigned;
    
    // Finds the requested card in our deck object (see deck.js)
    let cardLookup = deck[number];
    
    // Looks up sprite from deck object
    let cardSprite = cardLookup.sprite;
    
    // Determines direction to animate based on if the card affects the player or monster
    let fadeDirection;
    if (assigned === "player") {
        fadeDirection = 0;
    } else {
        fadeDirection = 80;
    }
    
    // Appends card and animates effect
    // TODO: May want to consider having animation of movement be a set distance and use
    // absolute pixel positioning since CSS percentages can be weird in some viewports
    $(`<div id="card-${number}" class="card ${assigned}" style="background-image: url('cards/${cardSprite}.png')"><div class="card-number">${number}</div></div>`)
        .css('opacity', 0)
        .appendTo($(location))
        .animate({
            opacity: 1
        }, 200)
        .delay(500)
        .animate({
            opacity: 0,
            left: fadeDirection + '%',
        }, 200)
    .fadeOut(0);
}

// Queues cards given an object containing cards and who played the card (audience or player)
// Note this does not assign the literal player who played the card because this information is
// not needed for this animation
function queueCards(values, creator) {
    let monster = values.monster;
    let player = values.player;
    let location;
    
    // Depending on who played the card, changes location the card is appended to
    if (creator === 'playerItems') {
        location = 'cards-in-play-2';
    } else if (creator === 'audienceItems') {
        location = 'cards-in-play-1';
    }
    
    // Empties the location of cards
    clearCardsDom(location);
    
    // For each actor (player or monster), note this deals with assignment rather than the group
    // that played the card - this function is only called for one specific group at a time
    for (let actor in values) {
        let thisActor = actor;
        let thisCardsArray = values[actor];
        
        // For each card assigned to this actor
        for (let i = 0; i < thisCardsArray.length; i++) {
            
            // Delay 1.2 seconds
            $('#' + location).delay(1200).queue(function() {
                
                // Create a card in the determined location with a number and actor
                createCardDom($('#' + location),{'number' : thisCardsArray[i], 
                                                 'assigned' : thisActor});
                $.dequeue(this);
            });
        }
    }
}
      
// Loads all cards in play by either audience or player (indicated by creator parameter) for
// the round, sends thse cards on to queue for animation
function loadCardDisplay(code, creator) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/' + creator + '/');
    
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
        
        // Sends values object to queue for animation
        queueCards(values, creator);
    });
}

/* ----------------------------------------------------------------------------------------------*/
/*                                 GAME CONTROLLER FUNCTIONS                                     */
/* ----------------------------------------------------------------------------------------------*/

// Update Display Game Phase
// TODO: more in depth commenting on what this shows on each screen/user segment per phase
function updateGamePhase(newPhase) {
    switch (newPhase) {
            
        // If title, show title sequence until CTA
        case 'title':
            break;
            
        // If setup, show setup screen (lobby join)
        case 'setup':
            break;
            
        // If tutorial, run tutorial sequence
        case 'tutorial':
            break;
            
        // If play, initiate play sequence (play has its own phase controller)
        case 'play':
            break;
            
        // If won, run victory sequence
        case 'won':
            break;
            
        // If outro, show credits and options to play again
        case 'outro':
            break;
            
        // Only for testing purposes, shows all at the same time
        case 'showAll':
            break;
            
        // Errors or if all else fails
        case 'error':
        default:
            break;
    }
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
    
    //loadCardDisplay('TEST', 'audienceItems');
    loadCardDisplay('TEST', 'playerItems');
    
    // TODO: Call during play phase when fight is introduced
    displayActorScores('TEST');
    
    // Loads test data set to database in case anything changed
    databaseWrite('TEST', '', TEST);
    
    // Loads all bet information
    displayBets('TEST');
    
    // Hides names and personal bet amounts
    toggleBetNames();
    $(document).delay(800).queue(function() {
        
        // Reveals names and personal bet amounts
        toggleBetNames();
        $.dequeue(this);
    });
    
    // Generate a test monster (TODO)
    console.log(generateMonster());
    console.log(generateMonster());
    
    // Test room code generator
    //generateRoomCode('');
    generateRoomCode('TEST');
    
    // Update game phase
    databaseWrite('TEST', '', {'phase':'test'});
    databaseWrite('TEST', '', {'phase':'showAll'});
    
});
