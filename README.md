# Witches & Wagers
A backstabbing dungeon-themed party game.

[View Live Web Build](https://susanpallmann.github.io/witches-and-wagers/)

**Personal Achievements**
- [X] Successfully coded for 16 days (excluding vacation) without burning out
- [X] (Do all read/do all write/selectively hide after) was definitely a good organization approach

**On Issues**

I now recognize that the "Dev Diary" would have been better served as a series of Issues. However, I do not want to
translate almost two weeks' worth of work into a bunch of Issues that can't be backdated, so for this project I
will just be using Issues to keep track of ideas/thoughts as they pop up that weren't a part of the expected road 
map, and I will note what to do better for future projects.

## Contents
1. [Project Plan](#project-plan)
1. [Dev Resources](#dev-resources)
1. [To Do](#to-do)
1. [Dev Diary](#dev-diary)

## Project Plan
- [Gameplay Logic (Google Doc)](https://docs.google.com/document/d/1f_4MNYwZ1uQ96jU5jy9jnCGe85VRp2VgsE4S7wsvh5I/edit?usp=sharing)
- [Gameplay Logic (Miro Board)](https://miro.com/app/board/o9J_l2-v3mI=/)
- [Database Structure (Google Doc)](https://docs.google.com/document/d/10EucJKtGXdxRgWEyUUHI-u_hpfNFlF82tKnT0N_PWjo/edit?usp=sharing)
- Gameplay Design Prototype (Adobe XD) - *Not Started*

## Dev Resources
- [Google Firebase Realtime Database](https://firebase.google.com/products/realtime-database)
- [jQuery](https://jquery.com/)

## To Do
**Host**
- [X] *Tentatively Complete*

**Client**
- [ ] Create player-side HTML structure with each phase
- [ ] Create player-side database read/display functions
   - [ ] Load inventory, equipment
   - [ ] Load gold amount
   - [ ] Load avatar, name
- [ ] Create player-side database update functions
- [ ] Readdress all current code debt (TODOs)

**Planning & Design**
- [ ] Design prototypes for host and client screens using logic flow diagram
- [ ] Draw some new avatars in the new style
- [ ] Create final card deck array

**Common**
- [ ] Create show/hide functionality based on design (stitch it all together)

**Uncategorized**
- [ ] Animate everything better
- [ ] Improve database security rules

## Dev Diary


- [X] 09/13/21:

  * Added to player-side HTML, minor changes (added profile/inventory containers).

- [X] 09/09/21 - 09/12/21:

  * Fell off for a little while; mostly getting situated in the new apartment.
  * Hope to resume work soon!

- [X] 09/06/21 - 09/08/21:

  * Moving!

- [X] 09/05/21:

  * Edited new game function to handle avatars in the database depending on what's being done.
  * Started a timer function using code from my last attempt at this game.
  * Added preliminary wildcard-based rules in Firebase console for safety.
  * Added more advanced rules in Firebase.
  * Completed timer function.
  * Started player-side HTML structure and lobby join form.

- [X] 09/04/21:

  * Caused and then fixed a weird error where cards kept flashing more than once.
  * Continued breaking the larger function into pieces to figure out which specifically aren't working.
     * returnPlayItems() is now working.
     * removeWagers() is now working.
     * returnAvatar() is now working, this ends individual bug-fixing.
  * Fixed bug caused by putting some code outside of an if-statement in returnPlayItems.
  * Tested all functions working together - doesn't seem to be any issues.
  * Added code to remove player from locally stored array.

- [X] 09/03/21:

  * Created basic send card function, moves card from anywhere to anywhere in the game.
  * Possibly finished removePlayer functionality. Expecting a lot of things to break since I wrote it all without testing.
  * Yep, broke a lot of things.
  * Broke the larger function into pieces to figure out which specifically aren't working.
     * returnPlayerInventory() is working.
     * sendCard() is working.
     * reassignVIP() is now working (there was a bug).
     * returnBidItems() is now working (finally).
  * Fixed issue where moving cards was converting numbers to strings.
     * Might not have caused any real issues, but I don't like looking at it.

- [X] 09/02/21:

  * Created function to advance to the next current player in play order.
  * Modified score/gold updating functions to account for the possibility that no data exists.

- [X] 09/01/21:

  * Resolved two database-specific issues.
  * Added available avatars to database.
  * Added comments to users in database.
  * Refactored card animation functions to account for new structure.
  * Expanded delete player pseudocode.
  * Added player warning message to database structure (wasn't an issue).
  * Changed actor score update function back to on from once (realized this was necessary).
  * Added functionality for card animation to update the actor's score.
  * Somehow accidentally created recursion that's breaking everything and crashing the browser.
  * Fixed the recursion issue. Cards now update actor scores in the database.
  * Created logic to write a warning to the current player based on bets.
  * Fixed issue where player cards were breaking in animation (caused by database and function restructuring).
  * Experimented with drawing avatars; not sure if final design though.

- [X] 08/31/21:

  * Refactored monster generator to be a bit smaller, removed some unneeded variables.
  * Fixed a previously unnoticed bug in generating monster's appearance.
  * Made the monster appearance pull from database, when it hadn't before.
  * Cleaned and commented all code from yesterday night (it was less bad than I thought it would be).
  * Resolved issue calling for refactoring - decided code was ok as is.
  * Created write winner functionality.
  * Created player gold modification functionality.
     * If gold modification would result in a negative number, sets gold to 0.
     * Payout can be positive or negative.
     * Checks if gold amount is the winning value or greater and changes game phase if so.
  * Created bet payout functionality.
  * This completes planned database write functions for the host screen.
  * Moved some functions from host.js to common.js to be used by both host and client. These include:
     * databaseWrite
     * adjustGold
  * Also moved global variables to common.js, just in case they are needed in both host and client functions.
  * Started remove player functionality, but it is complex and will rely on some unwritten functions (part of code debt).
     * Left as pseudocode for now.
  * Fixed a small bug with displaying on the fight scene cause by changing on to once. Resolved by calling the update function after the monster creation function.

- [X] 08/30/21 - 08/31/21:

  * Adapted old room code generator code to new program.
  * Created a function to write/delete database entries at provided location.
  * Finalized monster generator to return monster data. Doesn't update database.
  * More commenting and code maintenance.
  * Removed obsolete HTML elements from index.html.
  * Completed room code generator with database functionalty.
  * Created new/same player new game functionality.
  * Created room code emptier functionality.
  * Created game phase update functionality.
  * Created round phase update functionality.
  * Lots and lots and lots of debugging.

- [X] 08/29/21:

  * Added detail to immediate to-do list in preparation for a full-day.
  * Created "common.js" and "client.js".
  * Moved dummy data to common.js.
  * Renamed gameplay.js to "primary.js".
  * Created "monsters.js".
  * Improved some code comments, added line-breaks for ease of reading.
  * I'd kill a man to add headers to an IDE.
  * Started monster generator function (not finished).

- [X] 08/28/21:

  * Rewrote how players' avatars and names are displayed to not require existing slots in the DOM.
  * Fixed wager amounts to show avatars instead of names using the refactored avatar system.
  * It might not look like much, but refactoring and bug-fixing took a while.

- [X] 08/27/21:

  * Added wager totals by outcome (another read/display function).
  * Added wager amounts and names.
  * Added wager name hide/show toggle function.
  * This completes all database read/game display functions for the host screen.
  * Some minor CSS styling improvements.

- [X] 08/26/21:

  * Fixed a bug with the card animation caused by my database export from yesterday.
  * Caught up on commenting all code because I was lazy before.
  * Reversed the order of Dev Diary dates for less scrolling.

- [X] 08/25/21:

  * Added monster and player names to the scene.
  * Added monster and player scores to the scene.
  * Some minor CSS styling improvements.
  * Improved the readme a little.
  * Added a basic function to re-add dummy database entry in case I mess up something.
  * Commented some old code.

- [X] 08/16/21 - 08/24/21:

  * Enjoy vacation. :)

- [X] 08/15/21:

  * Created card flashing animation
  * Added in placeholder avatars, adjusted code to populate avatars correctly.
  * Wrote some early styling.

- [X] 08/14/21:

  * Updated database dummy to include "winner".
  * Restructured database to make a function simpler (from my phone, at that).
  * Created placeholder deck array.
  * Added deck to database dummy.
  * Started card flashing animation (focused on loading and DOM card assembly).
  * Restructured deck to object format rather than array (it was the right thing to do).

- [x] 08/13/21: 

  * Began project.
  * Wrote up logic flow on [Google Docs](https://docs.google.com/document/d/1f_4MNYwZ1uQ96jU5jy9jnCGe85VRp2VgsE4S7wsvh5I/edit?usp=sharing).
  * Designed database structure on [Google Docs](https://docs.google.com/document/d/10EucJKtGXdxRgWEyUUHI-u_hpfNFlF82tKnT0N_PWjo/edit?usp=sharing).
  * Created logic flow on [Miro](https://miro.com/app/board/o9J_l2-v3mI=/).
  * Set up repository (you are here).
  * Set up Firebase realtime database.
  * Initialized databse in web project.
  * Started getting all real-time updated fields set up in-project - focused on database reading and DOM updating.
  * Minor styling (for my sanity).
