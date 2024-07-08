const cardGameData = {
  cardTypes: ["Monster", "Spell Card", "Trap Card", "Skill Card", "Token"],
  subTypes: {
    Monster: [
      "Effect",
      "Flip Effect",
      "Flip Tuner Effect",
      "Gemini",
      "Normal",
      "Normal Tuner",
      "Pendulum Effect",
      "Pendulum Effect Ritual",
      "Pendulum Flip Effect",
      "Pendulum Normal",
      "Pendulum Tuner Effect",
      "Ritual Effect",
      "Ritual",
      "Spirit",
      "Toon",
      "Tuner",
      "Union Effect",
      "Fusion",
      "Link",
      "Pendulum Effect Fusion",
      "Synchro",
      "Synchro Pendulum Effect",
      "Synchro Tuner",
      "XYZ",
      "XYZ Pendulum Effect"
    ],
    SpellCard: [
      "Normal",
      "Field",
      "Equip",
      "Continuous",
      "Quick-Play",
      "Ritual"
    ],
    TrapCard: ["Normal", "Continuous", "Counter"],
    SkillCard: [],
    Token: []
  },
  race: [
    "Aqua",
    "Beast",
    "Beast-Warrior",
    "Creator-God",
    "Cyberse",
    "Dinosaur",
    "Divine-Beast",
    "Dragon",
    "Fairy",
    "Fiend",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Psychic",
    "Pyro",
    "Reptile",
    "Rock",
    "Sea Serpent",
    "Spellcaster",
    "Thunder",
    "Warrior",
    "Winged Beast",
    "Wyrm",
    "Zombie"
  ],
  attribute: ["dark", "divine", "earth", "fire", "light", "water", "wind"]
};

const sortCard = {
  sortBy: ["Name", "ATK", "DEF", "Level"],
  sortDir: ["ASC", "DESC"]
};

const setDeckType = {
  mainDeckTypes: [
    "Effect Monster",
    "Flip Effect Monster",
    "Flip Tuner Effect Monster",
    "Gemini Monster",
    "Normal Monster",
    "Normal Tuner Monster",
    "Pendulum Effect Monster",
    "Pendulum Effect Ritual Monster",
    "Pendulum Flip Effect Monster",
    "Pendulum Normal Monster",
    "Pendulum Tuner Effect Monster",
    "Ritual Effect Monster",
    "Ritual Monster",
    "Spell Card",
    "Spirit Monster",
    "Toon Monster",
    "Trap Card",
    "Tuner Monster",
    "Union Effect Monster"
  ],

  extraDeckTypes: [
    "Fusion Monster",
    "Link Monster",
    "Pendulum Effect Fusion Monster",
    "Synchro Monster",
    "Synchro Pendulum Effect Monster",
    "Synchro Tuner Monster",
    "XYZ Monster",
    "XYZ Pendulum Effect Monster"
  ],

  otherTypes: ["Skill Card", "Token"]
};

export { cardGameData, sortCard, setDeckType };
