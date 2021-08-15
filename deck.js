// Title
// User (1 = both, 2 = player only, 3 = monster only)
// Type (1 = item, 2 = weapon, 3 = armor)
// Image
// Description
// Point change
// Gold worth
let deck = {
  1 : {
    title : 'A Full Pint',
    user : 1,
    type : 1,
    sprite : 1,
    description : "Much like a potion, it grants you strong powers for a short time... and a bit of a headache.",
    effect : 2,
    gold : 4
  },
  2 : {
    title : 'Crystal of Fortitude',
    user : 1,
    type : 1,
    sprite : 2,
    description : "If nothing else, it makes for a shiny room decoration.",
    effect : 5,
    gold : 10
  },
  3 : {
    title : 'Mysterious Potion',
    user : 1,
    type : 1,
    sprite : 3,
    description : "Legally, we cannot recommend drinking this.",
    effect : 4,
    gold : 8
  },
  4 : {
    title : 'Banana Peel',
    user : 1,
    type : 1,
    sprite : 4,
    description : "How careless to just leave this lying around?",
    effect : -3,
    gold : 4
  },
  5 : {
    title : 'Emerald Feather',
    user : 1,
    type : 1,
    sprite : 5,
    description : "Perhaps you'll be luckier than the bird this once belonged to.",
    effect : 1,
    gold : 2
  },
  6 : {
    title : 'Health Potion',
    user : 1,
    type : 1,
    sprite : 6,
    description : "* side effects still unstudied",
    effect : 2,
    gold : 1
  },
  7 : {
    title : 'A Full Pint',
    user : 1,
    type : 1,
    sprite : 1,
    description : "Much like a potion, it grants you strong powers for a short time... and a bit of a headache.",
    effect : 2,
    gold : 4
  },
  8 : {
    title : 'Crystal of Fortitude',
    user : 1,
    type : 1,
    sprite : 2,
    description : "If nothing else, it makes for a shiny room decoration.",
    effect : 5,
    gold : 10
  },
  9 : {
    title : 'Mysterious Potion',
    user : 1,
    type : 1,
    sprite : 3,
    description : "Legally, we cannot recommend drinking this.",
    effect : 4,
    gold : 8
  },
  10 : {
    title : 'Banana Peel',
    user : 1,
    type : 1,
    sprite : 4,
    description : "How careless to just leave this lying around?",
    effect : -3,
    gold : 4
  },
  11 : {
    title : 'Emerald Feather',
    user : 1,
    type : 1,
    sprite : 5,
    description : "Perhaps you'll be luckier than the bird this once belonged to.",
    effect : 1,
    gold : 2
  },
  12 : {
    title : 'Health Potion',
    user : 1,
    type : 1,
    sprite : 6,
    description : "* side effects still unstudied",
    effect : 2,
    gold : 1
  },
  13 : {
    title : 'A Full Pint',
    user : 1,
    type : 1,
    sprite : 1,
    description : "Much like a potion, it grants you strong powers for a short time... and a bit of a headache.",
    effect : 2,
    gold : 4
  },
  14 : {
    title : 'Crystal of Fortitude',
    user : 1,
    type : 1,
    sprite : 2,
    description : "If nothing else, it makes for a shiny room decoration.",
    effect : 5,
    gold : 10
  },
  15 : {
    title : 'Mysterious Potion',
    user : 1,
    type : 1,
    sprite : 3,
    description : "Legally, we cannot recommend drinking this.",
    effect : 4,
    gold : 8
  },
  16 : {
    title : 'Banana Peel',
    user : 1,
    type : 1,
    sprite : 4,
    description : "How careless to just leave this lying around?",
    effect : -3,
    gold : 4
  },
  17 : {
    title : 'Emerald Feather',
    user : 1,
    type : 1,
    sprite : 5,
    description : "Perhaps you'll be luckier than the bird this once belonged to.",
    effect : 1,
    gold : 2
  },
  18 : {
    title : 'Health Potion',
    user : 1,
    type : 1,
    sprite : 6,
    description : "* side effects still unstudied",
    effect : 2,
    gold : 1
  },
  19 : {
    title : 'A Full Pint',
    user : 1,
    type : 1,
    sprite : 1,
    description : "Much like a potion, it grants you strong powers for a short time... and a bit of a headache.",
    effect : 2,
    gold : 4
  },
  20 : {
    title : 'Crystal of Fortitude',
    user : 1,
    type : 1,
    sprite : 2,
    description : "If nothing else, it makes for a shiny room decoration.",
    effect : 5,
    gold : 10
  },
  21 : {
    title : 'Mysterious Potion',
    user : 1,
    type : 1,
    sprite : 3,
    description : "Legally, we cannot recommend drinking this.",
    effect : 4,
    gold : 8
  },
  22 : {
    title : 'Banana Peel',
    user : 1,
    type : 1,
    sprite : 4,
    description : "How careless to just leave this lying around?",
    effect : -3,
    gold : 4
  },
  23 : {
    title : 'Emerald Feather',
    user : 1,
    type : 1,
    sprite : 5,
    description : "Perhaps you'll be luckier than the bird this once belonged to.",
    effect : 1,
    gold : 2
  },
  24 : {
    title : 'Health Potion',
    user : 1,
    type : 1,
    sprite : 6,
    description : "* side effects still unstudied",
    effect : 2,
    gold : 1
  },
  25 : {
    title : 'A Full Pint',
    user : 1,
    type : 1,
    sprite : 1,
    description : "Much like a potion, it grants you strong powers for a short time... and a bit of a headache.",
    effect : 2,
    gold : 4
  },
  26 : {
    title : 'Crystal of Fortitude',
    user : 1,
    type : 1,
    sprite : 2,
    description : "If nothing else, it makes for a shiny room decoration.",
    effect : 5,
    gold : 10
  },
  27 : {
    title : 'Mysterious Potion',
    user : 1,
    type : 1,
    sprite : 3,
    description : "Legally, we cannot recommend drinking this.",
    effect : 4,
    gold : 8
  },
  28 : {
    title : 'Banana Peel',
    user : 1,
    type : 1,
    sprite : 4,
    description : "How careless to just leave this lying around?",
    effect : -3,
    gold : 4
  },
  29 : {
    title : 'Emerald Feather',
    user : 1,
    type : 1,
    sprite : 5,
    description : "Perhaps you'll be luckier than the bird this once belonged to.",
    effect : 1,
    gold : 2
  },
  30 : {
    title : 'Health Potion',
    user : 1,
    type : 1,
    sprite : 6,
    description : "* side effects still unstudied",
    effect : 2,
    gold : 1
  },
  31 : {
    title : 'A Full Pint',
    user : 1,
    type : 1,
    sprite : 1,
    description : "Much like a potion, it grants you strong powers for a short time... and a bit of a headache.",
    effect : 2,
    gold : 4
  },
  32 : {
    title : 'Crystal of Fortitude',
    user : 1,
    type : 1,
    sprite : 2,
    description : "If nothing else, it makes for a shiny room decoration.",
    effect : 5,
    gold : 10
  },
  33 : {
    title : 'Mysterious Potion',
    user : 1,
    type : 1,
    sprite : 3,
    description : "Legally, we cannot recommend drinking this.",
    effect : 4,
    gold : 8
  },
  34 : {
    title : 'Banana Peel',
    user : 1,
    type : 1,
    sprite : 4,
    description : "How careless to just leave this lying around?",
    effect : -3,
    gold : 4
  },
  35 : {
    title : 'Emerald Feather',
    user : 1,
    type : 1,
    sprite : 5,
    description : "Perhaps you'll be luckier than the bird this once belonged to.",
    effect : 1,
    gold : 2
  },
  36 : {
    title : 'Health Potion',
    user : 1,
    type : 1,
    sprite : 6,
    description : "* side effects still unstudied",
    effect : 2,
    gold : 1
  },
  37 : {
    title : 'A Full Pint',
    user : 1,
    type : 1,
    sprite : 1,
    description : "Much like a potion, it grants you strong powers for a short time... and a bit of a headache.",
    effect : 2,
    gold : 4
  },
  38 : {
    title : 'Crystal of Fortitude',
    user : 1,
    type : 1,
    sprite : 2,
    description : "If nothing else, it makes for a shiny room decoration.",
    effect : 5,
    gold : 10
  },
  39 : {
    title : 'Mysterious Potion',
    user : 1,
    type : 1,
    sprite : 3,
    description : "Legally, we cannot recommend drinking this.",
    effect : 4,
    gold : 8
  },
  40 : {
    title : 'Banana Peel',
    user : 1,
    type : 1,
    sprite : 4,
    description : "How careless to just leave this lying around?",
    effect : -3,
    gold : 4
  },
  41 : {
    title : 'Emerald Feather',
    user : 1,
    type : 1,
    sprite : 5,
    description : "Perhaps you'll be luckier than the bird this once belonged to.",
    effect : 1,
    gold : 2
  },
  42 : {
    title : 'Health Potion',
    user : 1,
    type : 1,
    sprite : 6,
    description : "* side effects still unstudied",
    effect : 2,
    gold : 1
  },
  43 : {
    title : 'A Full Pint',
    user : 1,
    type : 1,
    sprite : 1,
    description : "Much like a potion, it grants you strong powers for a short time... and a bit of a headache.",
    effect : 2,
    gold : 4
  },
  44 : {
    title : 'Crystal of Fortitude',
    user : 1,
    type : 1,
    sprite : 2,
    description : "If nothing else, it makes for a shiny room decoration.",
    effect : 5,
    gold : 10
  },
  45 : {
    title : 'Mysterious Potion',
    user : 1,
    type : 1,
    sprite : 3,
    description : "Legally, we cannot recommend drinking this.",
    effect : 4,
    gold : 8
  }
};
