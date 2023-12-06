import dbConnect from "../../utils/dbConnect";

const Champion = require("../../models/campeonesT");

export default async function handler(req, res) {
  await dbConnect();
  /*
  // Getting One
  router.get("/:id", getChampion, (req, res) => {
    res.json(res.champion);
  });
*/

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
  /*
  // Updating One
  router.patch("/:id", getChampion, async (req, res) => {
    //Cambio en nombre
    if (req.body.name != null) {
      res.champion.name = req.body.name;
      res.champion.id = "tftSet10_" + req.body.name;
    }
    //Cambio en sinergias
    if (req.body.synergies.origin != null) {
      res.champion.synergies.origin = req.body.synergies.origin;
    }
    if (req.body.synergies.class != null) {
      res.champion.synergies.class = req.body.synergies.class;
    }
    if (req.body.synergies.second_class != null) {
      res.champion.synergies.second_class = req.body.synergies.second_class;
    }
    //Cambio de imagenes
    if (req.body.gallery.splashart != null) {
      res.champion.gallery.splashart = req.body.gallery.splashart;
    }
    if (req.body.gallery.icono != null) {
      res.champion.gallery.icono = req.body.gallery.icono;
    }
    //Cambio en stats
    //Combio en coste
    if (req.body.stats.cost != null) {
      res.champion.stats.cost = req.body.stats.cost;
    }
    //Cambio en vida
    if (req.body.stats.health.level_1 != null) {
      res.champion.stats.health.level_1 = req.body.stats.health.level_1;
    }
    if (req.body.stats.health.level_2 != null) {
      res.champion.stats.health.level_2 = req.body.stats.health.level_2;
    }
    if (req.body.stats.health.level_3 != null) {
      res.champion.stats.health.level_3 = req.body.stats.health.level_3;
    }
    if (req.body.stats.health.level_4 != null) {
      res.champion.stats.health.level_4 = req.body.stats.health.level_4;
    }
    //Cambio en mana
    if (req.body.stats.mana.max_mana != null) {
      res.champion.stats.mana.max_mana = req.body.stats.mana.max_mana;
    }
    if (req.body.stats.mana.starting_mana != null) {
      res.champion.stats.mana.starting_mana = req.body.stats.mana.starting_mana;
    }
    //Cambio en Armadura
    if (req.body.stats.armor != null) {
      res.champion.stats.armor = req.body.stats.armor;
    }
    //Cambio en Resistencia Magica
    if (req.body.stats.magic_resistance != null) {
      res.champion.stats.magic_resistance = req.body.stats.magic_resistance;
    }
    //Cambio en Poder de Habilidad
    if (req.body.stats.ability_power != null) {
      res.champion.stats.ability_power = req.body.stats.ability_power;
    }
    //Cambio en Ataque
    if (req.body.stats.atk_damage.level_1 != null) {
      res.champion.stats.atk_damage.level_1 = req.body.stats.atk_damage.level_1;
    }
    if (req.body.stats.atk_damage.level_2 != null) {
      res.champion.stats.atk_damage.level_2 = req.body.stats.atk_damage.level_2;
    }
    if (req.body.stats.atk_damage.level_3 != null) {
      res.champion.stats.atk_damage.level_3 = req.body.stats.atk_damage.level_3;
    }
    if (req.body.stats.atk_damage.level_4 != null) {
      res.champion.stats.atk_damage.level_4 = req.body.stats.atk_damage.level_4;
    }
    //Cambio en Velocidad de Ataque
    if (req.body.stats.atk_spd != null) {
      res.champion.stats.atk_spd = req.body.stats.atk_spd;
    }
    //Cambio en Probabilidad de Critico
    if (req.body.stats.crit_rate != null) {
      res.champion.stats.crit_rate = req.body.stats.crit_rate;
    }
    //Cambio en Daño Critico
    if (req.body.stats.crit_damage != null) {
      res.champion.stats.crit_damage = req.body.stats.crit_damage;
    }
    //Cambio en Rango
    if (req.body.stats.range != null) {
      res.champion.stats.range = req.body.stats.range;
    }

    //Cambio en Habilidad
    if (req.body.ability.name != null) {
      res.champion.ability.name = req.body.ability.name;
    }
    //Cambio en Armadura
    if (req.body.ability.description != null) {
      res.champion.ability.description = req.body.ability.description;
    }

    //Cambio en Items
    if (req.body.recommended_items.item_1 != null) {
      res.champion.recommended_items.item_1 = req.body.recommended_items.item_1;
    }
    if (req.body.recommended_items.item_2 != null) {
      res.champion.recommended_items.item_2 = req.body.recommended_items.item_2;
    }
    if (req.body.recommended_items.item_3 != null) {
      res.champion.recommended_items.item_3 = req.body.recommended_items.item_3;
    }
    if (req.body.recommended_items.item_4 != null) {
      res.champion.recommended_items.item_4 = req.body.recommended_items.item_4;
    }
    if (req.body.recommended_items.item_5 != null) {
      res.champion.recommended_items.item_5 = req.body.recommended_items.item_5;
    }
    if (req.body.recommended_items.item_6 != null) {
      res.champion.recommended_items.item_6 = req.body.recommended_items.item_6;
    }
    if (req.body.recommended_items.item_7 != null) {
      res.champion.recommended_items.item_7 = req.body.recommended_items.item_7;
    }
    if (req.body.recommended_items.item_8 != null) {
      res.champion.recommended_items.item_8 = req.body.recommended_items.item_8;
    }

    try {
      const updatedChampion = await res.champion.save();
      res.json(updatedChampion);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Deleting One
  router.delete("/:id", getChampion, async (req, res) => {
    try {
      await res.champion.deleteOne();
      res.json({ message: "Deleted Champion" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  async function getChampion(req, res, next) {
    let champion;
    try {
      champion = await Champion.findOne({ id: req.params.id }).exec();
      if (champion == null) {
        return res.status(404).json({ message: "Cannot find champion" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.champion = champion;
    next();
  }*/
}
