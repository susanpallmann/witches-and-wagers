/* ----------------------------------------------------------------------------------------------*/
/*                     THE BELOW IS EXTREMELY BORING DUMMY DATABASE ENTRY                        */
/* ----------------------------------------------------------------------------------------------*/

// Dummy database entry to simulate an in-progress game in case I mess up something
// I guess I'll comment it just for posterity, but it won't be fun to read
// This is alphabetized because that's how Firebase displays the information; this was
// exported directly from Firebase - it would normally be structured more intuitively.
let TEST = {
    // Stores which cards are not in any player's hand, lists cards by ID
    "deck" : {
        "45" : 45
    },
    // Shows current game phase, this controls what is visible on all screens
    "phase" : "showAll",
    // Lists current players and certain statuses; I'll comment the first entry
    "players" : {
        // Stored by username
        "Auben" : {
            // If player was first to join or not
            "VIP" : "no",
            // Apparel currently equipped to this player, lists cards by ID
            "apparel" : {
                "34" : 34
            },
            // Avatar selected, number corresponds to an image
            "avatar" : 2,
            // Stores counts for determining player statistics at the end of the game
            "counts" : {
                // Number of successful flee attempts
                "coward" : 2,
                // Number of bets in favor of a person
                "optimist" : 1,
                // Number of bets against a person
                "pessimist" : 2
            },
            // Amount of gold
            "gold" : 13,
            // Cards currently in inventory, lists cards by ID
            "inventory" : {
                "24" : 24,
                "25" : 25,
                "26" : 26,
                "27" : 27
            },
            // Weapon currently equipped to this player, lists cards by ID
            "weapon" : {
                "35" : 35
            }
        },
        "Jules" : {
            "VIP" : "no",
            "apparel" : {
                "42" : 42
            },
            "avatar" : 6,
            "counts" : {
                  "coward" : 6,
                  "optimist" : 6,
                  "pessimist" : 6
            },
            "gold" : 2,
            "inventory" : {
                  "8" : 8,
                  "9" : 9,
                  "10" : 10,
                  "11" : 11
            },
            "weapon" : {
                "43" : 43
            }
        },
        "Magpie" : {
            "VIP" : "no",
            "apparel" : {
                "40" : 40
            },
            "avatar" : 5,
            "counts" : {
                "coward" : 7,
                "optimist" : 7,
                "pessimist" : 7
            },
            "gold" : 7,
            "inventory" : {
                "12" : 12,
                "13" : 13,
                "14" : 14,
                "15" : 15
            },
            "weapon" : {
                "41" : 41
            }
        },
        "Skooz" : {
            "VIP" : "yes",
            "apparel" : {
                  "32" : 32
            },
            "avatar" : 1,
            "counts" : {
                "coward" : 1,
                "optimist" : 3,
                "pessimist" : 4
            },
            "gold" : 15,
            "inventory" : {
                "28" : 28,
                "29" : 29,
                "30" : 30,
                "31" : 31
            },
            "weapon" : {
                "33" : 33
            }
        },
        "Tangerine" : {
            "VIP" : "no",
            "apparel" : {
                "36" : 36
            },
            "avatar" : 3,
            "counts" : {
                "coward" : 0,
                "optimist" : 0,
                "pessimist" : 0
            },
            "gold" : 0,
            "inventory" : {
                "20" : 20,
                "21" : 21,
                "22" : 22,
                "23" : 23
            },
            "weapon" : {
                "37" : 37
            }
        },
        "UH82CIT" : {
            "VIP" : "no",
            "apparel" : {
                "38" : 38
            },
            "avatar" : 4,
            "counts" : {
                "coward" : 5,
                "optimist" : 5,
                "pessimist" : 5
            },
            "gold" : 20,
            "inventory" : {
                "16" : 16,
                "17" : 17,
                "18" : 18,
                "19" : 19
            },
            "weapon" : {
                "39" : 39
            }
      }
    },
    // Once the game is in "play" state, there are rounds of play, best indicated
    // by a different active player
    // Information here is updated/replaced each round
    "round" : {
        // Stores items in play by audience members (i.e. not the active player)
        "audienceItems" : {
            // Items used on monster, by ID
            "monster" : {
                "7" : 7
            },
            // Items used on player, by ID
            "player" : {
                "5" : 5,
                "6" : 6
            }
        },
        // Wagers in play by audience members
        "bets" : {
            // Bets that the player will successfully flee the round
            "flee" : {
                // Stores player and wager amount
                "Magpie" : 4
            },
            // Etc.
            "loss" : {
                "Tangerine" : 2
            },
            "pass" : {
                "Jules" : 0
            },
            "win" : {
                "Auben" : 5,
                "UH82CIT" : 2
            }
        },
        // Stores the current monster and some attributes
        "currentMonster" : {
            "attributes" : {
                // Which monster appearance to use
                "appearance" : 1
            },
            // Generated monster name (related to appearance and strength)
            "monster" : "Example Monster Name",
            // Strength score, generated randomly on the front end, modified in the
            // front end as cards are added to play
            "score" : 15
        },
        // Stores the current player and a few attributes (but not exhaustive)
        "currentPlayer" : {
            // Player name
            "player" : "Skooz",
            // Strength score, to be calculated from items equipped, and then modified
            // in the front end as cards are added to play
            "score" : 0
        },
        // Shows round phase, this is a subphase of the game's "play" phase
        "phase" : "showAll",
        // Stores items in play by the active player
        "playerItems" : {
            // Items used on the monster, by ID
            "monster" : {
                "44" : 44
            },
            // Items used on the player, by ID
            "player" : {
                "1" : 1,
                "2" : 2,
                "3" : 3,
                "4" : 4
            }
        }
    },
    // Stores stats for end of game that aren't specifically calculated in a user's data
    // These are updated as rounds progress
    "trackers" : {
        // Player who has aided another player the most
        "helper" : {
            "amount" : 15,
            "player" : "Skooz"
        },
        // Player who has sabotaged another player the most
        "hurter" : {
            "amount" : 10,
            "player" : "Auben"
        }
    },
    // Winner, if one exists
    "winner" : "UH82CIT"
};

/* ----------------------------------------------------------------------------------------------*/
/*               GLOBAL VARIABLES FOR STORING PLAYER INFORMATION IN THE FRONT-END                */
/* ----------------------------------------------------------------------------------------------*/

let players = {};

/* ----------------------------------------------------------------------------------------------*/
/*           PSEUDO CODE I'M NOT SURE IF I'LL NEED THAT I'M TOO AFRAID TO DELETE YET             */
/* ----------------------------------------------------------------------------------------------*/

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

/* ----------------------------------------------------------------------------------------------*/
/*                               FRONT-END ONLY LOGIC, NO DATABASE                               */
/* ----------------------------------------------------------------------------------------------*/

// Nothing here yet, I'm not really sure it's fair to have this section if I'm lumping "game display"
// in with reading the database. TBD, TODO

// Still, probably would be nice to keep things like the monster generator somewhere special. Got 
// to have SOME flair if I'm building this whole thing in JavaScript, right?

/* ----------------------------------------------------------------------------------------------*/
/*                      THE BELOW DEALS WITH UPDATING/EDITING THE DATABASE                       */
/* ----------------------------------------------------------------------------------------------*/

// Function to populate database with a test data set
// Also a decent model for future database write functions
function setTestData(code) {
    let location = firebase.database().ref('TEST');
    location.update(code);
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
                $(`#${outcome} .bet-players`).append(`<div class="bet-container"><div>${wager}</div><div class="small-gold">${wagers[wager]}</div></div>`);
            }
            // Updates the dom to reflect totals
            updateDomText($(`#${outcome} .gold`), total);
        });
    });
}

// Toggles visibility of owners of each wager when called (since bets are anonymous at first)
function toggleBetNames() {
    if ($('.bet-players').is(':visible')) {
        $('.bet-players').each(function(index) {
            $(this).hide();
        });
    } else {
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
        let round = snapshot.val();
        let monster = round.currentMonster;
        let player = round.currentPlayer;
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
            
            players[username] = {
                "avatar" : $(`<div class="player-${count}-avatar" style="background-image: url('avatars/${avatar}.png')"></div>`),
                "username" : $(`<div class="player-1-name">${username}</div>`)
            }
            
            // Retrieves specific player's information
            let storedPlayerData = players[username];
            
            // Appending avatar and username to the DOM
            $('#setup-players').append(storedPlayerData.avatar);
            $('#setup-players').append(storedPlayerData.username);

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
            let position = $('#scoreboard').find('.' + username);
            let storedPlayerData = players[username];
            console.log(storedPlayerData);
            let storedAvatar = storedPlayerData["avatar"];
            let storedUsername = storedPlayerData["username"];
            $('#scoreboard').append(`
                <div>
                    ${storedAvatar}
                    ${storedUsername}
                    <div class="gold">${gold}</div>
                </div>
            `);
        });
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
    // Empties the location if it isn't already
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

// When document loads
$(document).ready(function() {
    // Initializing a variable to store player names and avatars to the front-end rather
    // than rereading the database all the time
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
    setTestData(TEST);
    // Loads all bet information
    displayBets('TEST');
    // Hides names and personal bet amounts
    toggleBetNames();
    $(document).delay(800).queue(function() {
        // Reveals names and personal bet amounts
        toggleBetNames();
        $.dequeue(this);
    });
    //$('#setup').append(test);
});
