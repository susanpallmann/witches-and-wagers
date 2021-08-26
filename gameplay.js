// Dummy Database Information to Imitate a Game
let TEST = {
    "deck" : {
        "45" : 45
    },
    "phase" : "showAll",
    "players" : {
        "Auben" : {
            "VIP" : "no",
            "apparel" : {
                "34" : 34
            },
            "avatar" : 2,
            "counts" : {
                "coward" : 2,
                "optimist" : 1,
                "pessimist" : 2
            },
            "gold" : 13,
            "inventory" : {
                "24" : 24,
                "25" : 25,
                "26" : 26,
                "27" : 27
            },
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
    "round" : {
        "audienceItems" : {
            "monster" : {
                "7" : 7
            },
            "player" : {
                "5" : 5,
                "6" : 6
            }
        },
        "bets" : {
            "flee" : {
                "Magpie" : 4
            },
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
        "currentMonster" : {
            "attributes" : {
                "appearance" : 1
            },
            "monster" : "Example Monster Name",
            "score" : 15
        },
        "currentPlayer" : {
            "player" : "Skooz",
            "score" : 0
        },
        "phase" : "showAll",
        "playerItems" : {
            "monster" : {
                "44" : 44
            },
            "player" : [ null, 1, 2, 3, 4 ]
        }
    },
    "trackers" : {
        "helper" : {
            "amount" : 15,
            "player" : "Skooz"
        },
        "hurter" : {
            "amount" : 10,
            "player" : "Auben"
        }
    },
    "winner" : "UH82CIT"
};

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
                $(this).css('background-image', `url('avatars/${avatar}.png')`);
                //updateDomText($(this), avatar);
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
    let cardSprite = cardLookup.sprite;
    let fadeDirection;
    if (assigned === "player") {
        fadeDirection = 0;
    } else {
        fadeDirection = 80;
    }
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

function queueCards(values, creator) {
    let monster = values.monster;
    let player = values.player;
    let location;
    if (creator === 'playerItems') {
        location = 'cards-in-play-2';
    } else if (creator === 'audienceItems') {
        location = 'cards-in-play-1';
    }
    clearCardsDom(location);
    for (let actor in values) {
        let thisActor = actor;
        let thisCardsArray = values[actor];
        for (let i = 0; i < thisCardsArray.length; i++) {
            $('#' + location).delay(1200).queue(function() {
                createCardDom($('#' + location),{'number' : thisCardsArray[i], 
                                                 'assigned' : thisActor});
                $.dequeue( this );
            });
        }
    }
}
                       
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
        queueCards(values, creator);
    });
}

function setTestData(code) {
    let location = firebase.database().ref(code);
    location.set(TEST);
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
    setTestData(TEST);
});
