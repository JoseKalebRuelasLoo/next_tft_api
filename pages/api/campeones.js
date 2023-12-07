import dbConnect from "../../utils/dbConnect";

const Champion = require("../../models/campeonesT");

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    // Creating one
    const champion = new Champion({
      id: "tftSet10_" + req.body.name,
      name: req.body.name,
      synergies: {
        origin: req.body.synergies.origin,
        class: req.body.synergies.class,
        second_class: req.body.synergies.second_class,
      },
      gallery: {
        splashart: req.body.gallery.splashart,
        icon: req.body.gallery.icon,
      },
      stats: {
        cost: req.body.stats.cost,
        health: {
          level_1: req.body.stats.health.level_1,
          level_2: req.body.stats.health.level_2,
          level_3: req.body.stats.health.level_3,
          level_4: req.body.stats.health.level_4,
        },
        mana: {
          max_mana: req.body.stats.mana.max_mana,
          starting_mana: req.body.stats.mana.starting_mana,
        },
        armor: req.body.stats.armor,
        magic_resistance: req.body.stats.magic_resistance,
        ability_power: req.body.stats.ability_power,
        atk_damage: {
          level_1: req.body.stats.atk_damage.level_1,
          level_2: req.body.stats.atk_damage.level_2,
          level_3: req.body.stats.atk_damage.level_3,
          level_4: req.body.stats.atk_damage.level_4,
        },
        atk_spd: req.body.stats.atk_spd,
        crit_rate: req.body.stats.crit_rate,
        crit_damage: req.body.stats.crit_damage,
        range: req.body.stats.range,
      },
      ability: {
        name: req.body.ability.name,
        description: req.body.ability.description,
      },
      recommended_items: {
        item_1: req.body.recommended_items.item_1,
        item_2: req.body.recommended_items.item_2,
        item_3: req.body.recommended_items.item_3,
        item_4: req.body.recommended_items.item_4,
        item_5: req.body.recommended_items.item_5,
        item_6: req.body.recommended_items.item_6,
        item_7: req.body.recommended_items.item_7,
        item_8: req.body.recommended_items.item_8,
      },
    });
    try {
      const newChampion = await champion.save();
      res.status(201).json(newChampion);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else if (req.method === "GET") {
    // Getting all
    try {
      const resChampions = await Champion.find();
      res.json(resChampions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
  }
}
