/* ----------------------------------------------------------------------------------------------*/
/*            PSEUDOCODE I'M NOT SURE IF I'LL NEED THAT I'M TOO AFRAID TO DELETE YET             */
/* ----------------------------------------------------------------------------------------------*/

// Update Display Game Phase
    // Check current phase in DB
        // If setup, show setup
        // If tutorial, show tutorial
        // If play, check round phase, update accordingly
            // inactive, not in session
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
    
    // Initializing a strength prefix variable
    let strengthPrefix;
    
    // Choosing a random monster type from monsters object (monsters.js)
    let randomMonster = Math.floor(Math.random() * Object.keys(monsters).length) + 1;
    
    // Randomly generating a strength modifier (to multiply the monster's base strength)
    let generatedStrength = Math.round((Math.random() * (2 - 0) + 0) * 10) / 10;

    // Store monster data
    let monsterData = monsters[randomMonster];
    
    // Getting monster prefix (like "a" or "the") if it exists, and adding a space if so
    let monsterPrefix = monsterData.prefix;
    
    if (monsterPrefix) {
        monsterPrefix = monsterPrefix + ' ';
        
    // If monster doesn't have a prefix, leave the variable an empty string
    } else {
        monsterPrefix = '';
    }
    
    // Depending on the strength modifier, choosing a specific prefix
    if (generatedStrength < 0.25) {
        strengthPrefix = 'pitiful ';
        
    } else if (generatedStrength < 0.75) {
        strengthPrefix = 'weak ';
        
    } else if (generatedStrength < 1.25) {
        strengthPrefix = '';
        
    } else if (generatedStrength < 1.75) {
        strengthPrefix = 'greater ';
        
    } else if (generatedStrength < 2) {
        strengthPrefix = 'enlightened ';
        
    } else {
        strengthPrefix = 'apocolyptic ';
    }
    
    let fullMonsterName = monsterPrefix + strengthPrefix + monsterData.name;
    fullMonsterName = fullMonsterName.split(" ");

    for (let i = 0; i < fullMonsterName.length; i++) {
        fullMonsterName[i] = fullMonsterName[i][0].toUpperCase() + fullMonsterName[i].substr(1);
    }
    
    fullMonsterName = fullMonsterName.join(' ');
    
    // Filling our object with our data
    monster = {
        "attributes" : {
            "appearance" : randomMonster
        },
        "monster" : fullMonsterName,
        "score" : Math.round(monsterData.baseStrength * generatedStrength)
    }
    
    // Returns values
    return monster;
}

// Recursive function to check if the room code is complete and generate random letters if not
function generateRoomCode(code, currentLocation) {
    
    // If the string isn't yet 4 characters long
    if (code.length < 4) {
        
        // Generate a random number between 0 and 25
        // Convert this new value to an ascii character (uppercase)
        let newLetter = Math.floor(Math.random() * 25);
        newLetter = String.fromCharCode(65 + newLetter);
        
        // Add the new value to the existing room code
        roomCode =  code + newLetter;

        // Run this function again to check if the code is complete now (length of 4)
        generateRoomCode(roomCode, currentLocation);
        
    // If the string is 4 characters
    } else {
        
        // Update roomCode global variable
        roomCode = code;
        
        // End recursion
        // Passes the 4-digit code into the verifyRoomCode function
        verifyRoomCode(roomCode, currentLocation);
    }
}

// Function to check if the room key passed into it (key) is already an in-session game in the database
function verifyRoomCode(code, currentLocation) {
    
    // Checks that specific location in the database and takes a snapshot
    firebase.database().ref(code).once("value", snapshot => {

        // If the snapshot exists already
        if (snapshot.exists()) {
            
            // Rerun the code generator and try again
            generateRoomCode('', currentLocation);
            
        // If the snapshot doesn't exist, we can set up the lobby
        } else {
            
            // Generate lobby
            // If no players were provided
            if (currentLocation === null) {
                
                // Create empty game with no players
                createLobby(code, currentLocation);
                
            // If players were provided
            } else {
            
                // Grabs directory location
                let location = firebase.database().ref(currentLocation + '/players');

                // Takes ongoing snapshot
                location.on('value', function(snapshot) {
                    
                    // Creates game with same players at this room code location
                    createLobby(code, snapshot.val());
                });
            }
        }
    });
}

// Creates a new lobby (set of values) with either new or existing players
function createLobby(code, existPlayers) {
    
    // Initialize some variables for storage
    let roomCode = code;
    let newGame = {};
    let newDeck = {};
    let playerData = {};
    let trackerPlaceholder = null;
    let gamePhase = null;

    // Create fresh deck from deck.js for new database entry
    for (let i = 1; i < Object.keys(deck).length + 1; i++) {
        newDeck[i] = i;
    }

    // If there are no players provided
    if (existPlayers === null) {
        
        // We want to enter the setup phase
        gamePhase = 'setup';
        
    // If there were players provided
    } else {
        // We can skip setup
        gamePhase = 'tutorial';
        
        // Assigning a random first player to the tracker variables
        trackerPlaceholder = Object.keys(existPlayers)[0];
        
        // For each player provided
        for (let player in existPlayers) {
            
            // Generate an empty data set
            let thisPlayerData = existPlayers[player];
            playerData[player] = {
                'VIP' : thisPlayerData.VIP,
                'counts' : {
                    'coward' : 0,
                    'optimist' : 0,
                    'pessimist' : 0
                },
                'gold' : 0
            };
        }
    }

    // Create new game data with variables we've determined
    newGame = {
        'deck' : newDeck,
        'trackers' : {
            'helper' : {
                'amount': 0,
                'player' : trackerPlaceholder
            },
            'hurter' : {
                'amount': 0,
                'player' : trackerPlaceholder
            }
        },
        'round' : {
            'phase' : 'inactive'
        },
        'players' : playerData,
        'phase' : gamePhase
    };

    // Send to database under room code provided
    databaseWrite(roomCode, '', newGame);
}

// Function to determine player payout upon successfully defeating a monster
// TODO Determine logic for this; never explicitly planned it
function setPlayerPay(pay) {
    return pay;
}

// Function to pay players for their bets based on the outcome of the round
// Outcomes can be "win", "loss", or "flee"
function playerBetPayout(code, outcome) {
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/bets/');
    
    // Takes ongoing snapshot
    location.on('value', function(snapshot) {
        
        // For each bet outcome
        snapshot.forEach((childSnapshot) => {
            
            // Save information to variables
            let outcomeLabel = childSnapshot.key;
            let wagers = childSnapshot.val();
            
            // If wager was on correct outcome
            if (outcomeLabel == outcome) {
                
                // Give player amount of gold wagered
                for (let wager in wagers) {
                    adjustGold(code, wager, wagers[wager]);
                }
                
            // If wager was incorrect
            } else {
                
                // Subtract amount of gold wagered from the player
                for (let wager in wagers) {
                    adjustGold(code, wager, -wagers[wager])
                }
            }
        });
        
    });
}

/* ----------------------------------------------------------------------------------------------*/
/*                      THE BELOW DEALS WITH UPDATING/EDITING THE DATABASE                       */
/* ----------------------------------------------------------------------------------------------*/

// Function to check existing bets and create a message that will be sent to the current player
function generateBetMessage(code) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/bets');
    
    // Take an ongoing snapshot to allow for continuous updates
    location.on('value', function(snapshot) {
        let bets = snapshot.val();
        let win = bets.win;
        let loss = bets.loss;
        let flee = bets.flee;
        let pass = bets.pass;
        let numberPlayers = Object.keys(players).length;
        let message;
        
        // Sets message based on number of wagers in each category
        // Number of players is reduced by one because the current player cannot bet on themselves
        if (Object.keys(pass).length === numberPlayers - 1) {
            message = "Nobody bet on this round.";
            
        } else if (Object.keys(win).length === numberPlayers - 1) {
            message = "Everyone believes in you."
            
        } else if (Object.keys(loss).length === numberPlayers - 1) {
            message = "Everyone's betting against you.";
            
        } else if (Object.keys(flee).length === numberPlayers - 1) {
            message = "Everyone thinks you're a coward."
            
        } else if (Object.keys(win).length > Object.keys(loss).length && Object.keys(win).length > Object.keys(flee).length) {
            message = "Most people believe in you."
            
        } else if (Object.keys(loss).length > Object.keys(win).length && Object.keys(loss).length > Object.keys(flee).length) {
            message = "Most people are betting against you."
            
        } else if (Object.keys(flee).length > Object.keys(win).length && Object.keys(flee).length > Object.keys(loss).length) {
            message = "Most people think you're a coward."
            
        } else {
            message = "The room's divided! Good luck!"
        }
        console.log(message);
    });
}

/* ----------------------------------------------------------------------------------------------*/
/*             THE BELOW DEALS WITH UPDATING THE GAME DISPLAY & READING THE DATABASE             */
/* ----------------------------------------------------------------------------------------------*/

// Reusable function to change the text in a provided DOM element
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
        let monsterAtt = monster.attributes;
        
        // Updating DOM accordingly
        updateDomText($('#monster .name'), monster.monster);
        updateDomText($('#player .name'), player.player);
        updateDomText($('#monster .score'), monster.score);
        updateDomText($('#player .score'), player.score);
        $('#monster .image').css('background-image', `url('monsters/${monsterAtt.appearance}.gif')`);
    });
}

// Function to update all player info containers with current usernames, avatars, and VIP status
// if applicable.
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
    
    // Saves actual user each score belongs to, starts with first player in the players array
    let randomPlayer = Object.keys(players)[0];
    let playerStats = {
        'coward' : randomPlayer,
        'optimist' : randomPlayer,
        'pessimist' : randomPlayer
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
function createCardDom(code, location, cardInfo) {
    
    // Pulling out some information from cardInfo
    let number = cardInfo.number;
    let assigned = cardInfo.assigned;
    
    // Finds the requested card in our deck object (see deck.js)
    let cardLookup = deck[number];
    console.log(number);
    
    // Looks up sprite and score modifier from deck object
    let cardSprite = cardLookup.sprite;
    let cardAmount = cardLookup.effect;
    
    // Determines direction to animate based on if the card affects the player or monster
    let fadeDirection;
    
    // Determines which directory to update in the database (ugly but oh well)
    let dataLocation;
    if (assigned === "player") {
        fadeDirection = 0;
        dataLocation = "currentPlayer";
    } else {
        fadeDirection = 80;
        dataLocation = "currentMonster";
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
    .fadeOut(0)
    .queue(function() {
        updateActorScore(code, dataLocation, cardAmount);
        $.dequeue(this);
    });
}

// Queues cards given an object containing cards and who played the card (audience or player)
// Note this does not assign the literal player who played the card because this information is
// not needed for this animation
function queueCards(code, values, creator) {
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
                createCardDom(code, $('#' + location),{'number' : thisCardsArray[i], 
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
            let senders = childSnapshot.val();
            console.log(senders);
            let cardsArray = [];
            
            // For each player who played a card towards this actor
            for (let sender in senders) {
                
                // Add to array for cards towards this actor
                cardsArray.push(Object.keys(senders[sender]));
            }
            
            // Add to values we're sending on to queueCards
            values[label] = cardsArray;
        });

        // Sends values object to queue for animation
        queueCards(code, values, creator);
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
    let testMonster = generateMonster();
    databaseWrite('TEST', '/round/currentMonster', testMonster);
    
    // Update game phase
    databaseWrite('TEST', '', {'phase':'showAll'});
    
    // Update round phase
    databaseWrite('TEST', '/round', {'phase':'showAll'});
    
    // New game, new players
    //generateRoomCode('', null);
    
    // New game, existing players
    //generateRoomCode('', 'TEST');
    
    // Update game winner
    //databaseWrite('TEST', '', {'winner':'UH82CIT'});
    
    // Player payout post-round success; 5 to test
    //currentPlayer = 'Skooz';
    //let testPay = setPlayerPay(5);
    
    //adjustGold('TEST', `${currentPlayer}`, testPay);

    //Bets payout
    //playerBetPayout('TEST', 'win');
    
    // TODO: Call during play phase when fight is introduced
    displayActorScores('TEST');
    
    // TODO: Generates message based on wagers
    generateBetMessage('TEST');
});
// what the heckkk
