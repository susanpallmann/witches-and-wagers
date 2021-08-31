# Witches & Wagers
A backstabbing dungeon-themed party game.

[View Live Web Build](https://susanpallmann.github.io/witches-and-wagers/)


**Personal Achievements**
- [X] Successfully coded for 11 consecutive days (excluding vacation) without burning out

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
- [ ] Clean and comment all code from yesterday night (because it's a mess).
- [ ] Create database write function(s)
   - [X] Room code generator (doesn't create room yet)
   - [X] Room code empty
   - [X] Monster generator (doesn't update database yet)
   - [X] New Players Button (started)
   - [X] Same Players Button (started)
   - [ ] Pay Player After Round
   - [ ] Bet Payouts
   - [ ] Update Winner
   - [X] Update Game Phase
   - [ ] Update Round Phase
- [ ] Edit database structure to include missing things:
   - [ ] Comments by players in the end outro
   - [ ] Comment by current playing during play round
- [ ] Create non-database front-end functions (things like timers)
- [ ] Create player-side database read/display functions
- [ ] Address all current code debt (TODOs)
- [ ] Design prototypes for host and client screens using logic flow diagram
- [ ] Create show/hide functionality based on design (stitch it all together)
- [ ] Draw some new avatars in the new style
- [ ] Create final card deck array

## Dev Diary

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
