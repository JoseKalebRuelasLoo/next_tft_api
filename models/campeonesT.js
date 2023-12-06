//Crear una tabla o utilizar una si es que ya se encuentra una con el mismo nombre

import { Schema, model, models } from "mongoose";

const champions_Schema = new Schema({
  id: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  synergies: {
    origin: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    second_class: {
      type: String,
      required: false,
    },
  },
  gallery: {
    splashart: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  stats: {
    cost: {
      type: Number,
      required: true,
    },
    health: {
      level_1: {
        type: Number,
        required: true,
      },
      level_2: {
        type: Number,
        required: true,
      },
      level_3: {
        type: Number,
        required: true,
      },
      level_4: {
        type: Number,
        required: false,
      },
    },
    mana: {
      max_mana: {
        type: Number,
        required: true,
      },
      starting_mana: {
        type: Number,
        required: true,
      },
    },
    armor: {
      type: Number,
      required: true,
    },
    magic_resistance: {
      type: Number,
      required: true,
    },
    ability_power: {
      type: Number,
      required: true,
    },
    atk_damage: {
      level_1: {
        type: Number,
        required: true,
      },
      level_2: {
        type: Number,
        required: true,
      },
      level_3: {
        type: Number,
        required: true,
      },
      level_4: {
        type: Number,
        required: false,
      },
    },
    atk_spd: {
      type: Number,
      required: true,
    },
    crit_rate: {
      type: Number,
      required: true,
    },
    crit_damage: {
      type: Number,
      required: true,
    },
    range: {
      type: Number,
      required: true,
    },
  },
  ability: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  recommended_items: {
    item_1: {
      type: String,
      required: true,
    },
    item_2: {
      type: String,
      required: true,
    },
    item_3: {
      type: String,
      required: true,
    },
    item_4: {
      type: String,
      required: true,
    },
    item_5: {
      type: String,
      required: true,
    },
    item_6: {
      type: String,
      required: true,
    },
    item_7: {
      type: String,
      required: true,
    },
    item_8: {
      type: String,
      required: true,
    },
  },
});

module.exports = models.Champions || model("Champions", champions_Schema);
