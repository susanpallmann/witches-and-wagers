# Witches & Wagers
A backstabbing dungeon-themed party game.

[View Live Web Build](https://susanpallmann.github.io/witches-and-wagers/)

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
- [ ] Finish creating database read/display functions
   - [X] Populate monster & player names and scores
   - [ ] Show bets and distribution, both anonymous and named
- [ ] Rewrite player display to exclude player slots not in use
- [ ] Create database write function(s)
- [ ] Create player-side database read/display functions
- [ ] Address all current code debt (TODOs)
- [ ] Design prototypes for host and client screens using logic flow diagram
- [ ] Create show/hide functionality based on design (stitch it all together)
- [ ] Draw some new avatars in the new style
   - [ ] Wisp
   - [ ] Treant
   - [ ] Black Cat
- [ ] Create final card deck array

## Dev Diary

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
