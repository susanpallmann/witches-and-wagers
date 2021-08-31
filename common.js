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
            "gold" : 2,
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
