/* ----------------------------------------------------------------------------------------------*/
/*                     THE BELOW IS EXTREMELY BORING DUMMY DATABASE ENTRY                        */
/* ----------------------------------------------------------------------------------------------*/

// Dummy database entry to simulate an in-progress game in case I mess up something
// I guess I'll comment it just for posterity, but it won't be fun to read
// This is alphabetized because that's how Firebase displays the information; this was
// exported directly from Firebase - it would normally be structured more intuitively.
let TEST = {
    
    // Stores which avatars are available
    "avatars" : {
        "7" : 7,
        "8" : 8,
        "9" : 9,
        "10" : 10
    },
    
    // Stores which cards are not in any player's hand, lists cards by ID
    "deck" : {
        "45" : 45
    },
    
    // Shows current game phase, this controls what is visible on all screens
    "phase" : "showAll",
    
    // Lists current players and certain statuses; I'll comment the first entry
    "players" : {
        
        // Stored by username
        "Clumpy" : {
            
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
                "pessimist" : 2,
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
            },
            
            // Current comment
            "comment" : "I've got this!"
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
            },
            "comment" : "I've got this!"
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
            },
            "comment" : "I've got this!"
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
            },
            "comment" : "I've got this!"
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
            },
            "comment" : "I've got this!"
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
            },
            "comment" : "I've got this!"
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
                "Tangerine" : {
                    "7" : 7
                }
            },
            
            // Items used on player, by ID
            "player" : {
                "Clumpy" : {
                    "5" : 5
                },
                "UH82CIT" : {
                    "6" : 6
                }
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
                "Clumpy" : 5,
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
            "player" : "Clumpy"
        }
    },
    
    // Warning, or message to the current player following the betting phase of the round
    "warning" : "Most of your friends believe in you!",
    
    // Winner, if one exists
    "winner" : "UH82CIT"
};

/* ----------------------------------------------------------------------------------------------*/
/*                    GLOBAL VARIABLES FOR GLOBAL INFORMATION IN THE FRONT-END                   */
/* ----------------------------------------------------------------------------------------------*/

let players = {};
let currentPlayer;
let roomCode;
let winningAmount = 30;

/* ----------------------------------------------------------------------------------------------*/
/*                      THE BELOW DEALS WITH UPDATING/EDITING THE DATABASE                       */
/* ----------------------------------------------------------------------------------------------*/

// Function to update scores on the scene
function updateActorScore(code, actor, amount) {
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/' + actor + '/score');
    
    // Takes ongoing snapshot
    location.once('value', function(snapshot) {
        
        // If snapshot does not exist and amount is less than 0
        if (!snapshot.val() && amount < 0) {

            // Sets that location 0
            location.set(0);

        // If snapshot does not exist and amount is 0 or more
        } else if (!snapshot.val()) {

            // Set location to amount
            location.set(amount);
            
        // If this addition is less than 0
        } else if (snapshot.val() + amount < 0) {

            // Sets that location 0
            location.set(0);

        // Otherwise
        } else {

            // Adjusts the score
            location.set(snapshot.val() + amount);
        }
    });
}

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

// Function to get current gold amount at specified path and add the provided value
function adjustGold(code, player, amount) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/players/' + player + '/gold');
    
    // If amount is set to null
    if (amount === null) {
        
        // Delete everything at this path
        location.set(amount);
        
    // Otherwise
    } else {
        
        // Takes a snapshot
        location.once('value', function(snapshot) {
            
            // If snapshot does not exist and amount is less than 0
            if (!snapshot.val() && amount < 0) {
                
                // Sets that location 0
                location.set(0);
                
            // If snapshot does not exist and amount is 0 or more
            } else if (!snapshot.val()) {
                
                // Set location to amount
                location.set(amount);
            
            // If this addition is less than 0
            } else if (snapshot.val() + amount < 0) {
                
                // Sets that location 0
                location.set(0);
            
            // If this addition is less than the amount of gold to win the game
            } else if (snapshot.val() + amount < winningAmount) {
                
                // Sets that location to the provided values added
                location.set(snapshot.val() + amount);
                
            // If someone has won    
            } else {
                
                // Declare them the winner
                databaseWrite(code, '', {'winner' : player});
                
                // Update game phase
                databaseWrite('TEST', '', {'phase':'won'});
            }
        });
    }
}

// Function to send card from one position to another in the game
function sendCard(code, card, from, to) {
    let values = {};
    values[card] = parseInt(card);
    
    let deleteValues = {};
    deleteValues[card] = null;
    
    // Adds card to new location
    databaseWrite(code, to, values);
    
    // Removes card from previous location
    databaseWrite(code, from, deleteValues);
}

// Takes player's inventory and adds back to deck
function returnPlayerInventory(code, playerName) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/players/' + playerName + '/inventory');

    // Takes a snapshot
    location.once('value', function(snapshot) {
        let inventory = snapshot.val();

        // For each card in player's inventory
        for (let card in inventory) {

            // Send card back to the deck
            sendCard(code, card, `/players/${playerName}/inventory`, '/deck');
        }
    });
}

// If player was VIP, reassign VIP
function reassignVIP(code, playerName) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/players/' + playerName + '/VIP');

    // Takes a snapshot
    location.once('value', function(snapshot) {

        // If player was VIP
        if (snapshot.val() == "yes") {

            // Get position of current player in players
            let position = Object.keys(players).indexOf(playerName);

            // Get length of players
            let length = Object.keys(players).length;

            // If player is last in players
            if (position == length) {

                // Choose the first player in players, make them VIP
                databaseWrite(code, '/players/' + Object.keys(players)[0], {'VIP' : 'yes'});

            // Otherwise
            } else {

                // Choose the next player in players, make them VIP
                databaseWrite(code, '/players/' + Object.keys(players)[position + 1], {'VIP' : 'yes'});
            }
        }
    });
}

// If player had bid items, return their items to the deck or the player
function returnBidItems(code, playerName, to) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/audienceItems');

    // Takes a snapshot
    location.once('value', function(snapshot) {
        let audienceItems = snapshot.val();
        
        // If the player has any cards in the game, sends them back to the location specified
        for (let actor in audienceItems) {
            for (let player in audienceItems[actor]) {
                if (player == playerName) {
                    for (let card in audienceItems[actor][player]) {
                        sendCard(code, card, '/round/audienceItems/' + actor + '/' + playerName, to);
                    }
                }
            }
        }
    });
}

// If player had items in play for a round, return their items to the deck
function returnPlayItems(code, playerName) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/round');
    
    // Takes a snapshot
    location.once('value', function(snapshot) {
        let round = snapshot.val();
        let currentPlayer = round.currentPlayer;
        let playerItems = round.playerItems;
        let player = currentPlayer.player;
        if (player === playerName) {
            for (let actor in playerItems) {
                for (let card in playerItems[actor]) {
                    sendCard(code, card, '/round/playerItems/' + actor, '/deck');
                }
            }
        }
        
        // If player was current player, we want to return the other players' items to them
        let playersArray = Object.keys(players);
        currentPlayer = playersArray.indexOf(playerName);
        playersArray.splice(currentPlayer, 1);
        let thisPlayer;
        for (let i = 0; i < playersArray.length; i++) {
            thisPlayer = playersArray[i];
            returnBidItems(code, thisPlayer, `/players/${thisPlayer}/inventory`);
        }
        // Find next player, start their turn
        updateCurrentPlayer(code);
    });
}

// If player had wagers, remove those
function removeWagers(code, playerName) {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/bets');

    // Takes a snapshot
    location.once('value', function(snapshot) {
        let outcomes = snapshot.val()
        let values = {};
        values[playerName] = null;
        
        // If the player has any bets, remove them
        for (let outcome in outcomes) {
            for (let player in outcomes[outcome]) {
                if (player == playerName) {
                    databaseWrite(code, `/round/bets/${outcome}`, values);
                }
            }
        }
    });
}

// Return avatar to available avatars
function returnAvatar(code, playerName)  {
    
    // Grabs directory location
    let location = firebase.database().ref(code + '/players/' + playerName + '/avatar');

    // Takes a snapshot
    location.once('value', function(snapshot) {
        let avatar = snapshot.val();
        let values = {};
        values[avatar] = avatar;
        
        let deleteValues = {};
        deleteValues['avatar'] = null;
        
        // Deletes avatar in original location, adds it to the new
        databaseWrite(code, '/avatars', values);
        databaseWrite(code, '/players/' + playerName, deleteValues);
    });
}
                  
// Function to remove a player from the game and database
function removePlayer(code, playerName) {
    
    // Takes player's inventory and adds back to deck
    returnPlayerInventory(code, playerName);
    
    // If player was VIP, reassign VIP
    reassignVIP(code, playerName);
    
    // If player had bid items, return their items to the deck
    returnBidItems(code, playerName, '/deck');
        
    // If player had items in play for a round, return their items to the deck
    // If so, give people their items back
    returnPlayItems(code, playerName);
    
    // If player had wagers, remove those
    removeWagers(code, playerName);
    
    // Return avatar to available avatars
    returnAvatar(code, playerName);
    
    // Deletes player under "players" in database
    // Anticipating an issue where other functions are slower than this one and this removes the information they need
    let values = {};
    values[playerName] = null;
    databaseWrite(code, '/players/', values);
}

function updateCurrentPlayer(code) {
    // Grabs directory location
    let location = firebase.database().ref(code + '/round/currentPlayer');
        
    // Takes a snapshot
    location.once('value', function(snapshot) {
        
        // If snapshot exists (if there exists a current player)
        if (snapshot.val()) {
            
            // Get position of current player in players
            let position = Object.keys(players).indexOf(snapshot.val().player);
            
            // Get length of players
            let length = Object.keys(players).length;
            
            // If player is last in players
            if (position == length) {
                
                // Start from beginning of players
                location.set({'player' : Object.keys(players)[0]});
                
            // Otherwise
            } else {
                
                // Choose the next player in players
                location.set({'player' : Object.keys(players)[position + 1]});
            }
            
        // If no current player exists
        } else {
            
            // Start from beginning of players
            location.set({'player' : Object.keys(players)[0]});
        }
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
