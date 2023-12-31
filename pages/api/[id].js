import dbConnect from "../../utils/dbConnect";

const Champion = require("../../models/campeonesT");

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  const abuscar = id;

  if (req.method === "GET") {
    res.status(200).json(await getChampion(abuscar));
  } else if (req.method === "PATCH") {
    const champion = await getChampion(abuscar);

    if (req.body.name != null) {
      champion.name = req.body.name;
      champion.id = "tftSet10_" + req.body.name;
    }
    //Cambio en sinergias
    if (req.body.synergies.origin != null) {
      champion.synergies.origin = req.body.synergies.origin;
    }
    if (req.body.synergies.class != null) {
      champion.synergies.class = req.body.synergies.class;
    }
    if (req.body.synergies.second_class != null) {
      champion.synergies.second_class = req.body.synergies.second_class;
    }
    //Cambio de imagenes
    if (req.body.gallery.splashart != null) {
      champion.gallery.splashart = req.body.gallery.splashart;
    }
    if (req.body.gallery.icono != null) {
      champion.gallery.icono = req.body.gallery.icono;
    }
    //Cambio en stats
    //Combio en coste
    if (req.body.stats.cost != null) {
      champion.stats.cost = req.body.stats.cost;
    }
    //Cambio en vida
    if (req.body.stats.health.level_1 != null) {
      champion.stats.health.level_1 = req.body.stats.health.level_1;
    }
    if (req.body.stats.health.level_2 != null) {
      champion.stats.health.level_2 = req.body.stats.health.level_2;
    }
    if (req.body.stats.health.level_3 != null) {
      champion.stats.health.level_3 = req.body.stats.health.level_3;
    }
    if (req.body.stats.health.level_4 != null) {
      champion.stats.health.level_4 = req.body.stats.health.level_4;
    }
    //Cambio en mana
    if (req.body.stats.mana.max_mana != null) {
      champion.stats.mana.max_mana = req.body.stats.mana.max_mana;
    }
    if (req.body.stats.mana.starting_mana != null) {
      champion.stats.mana.starting_mana = req.body.stats.mana.starting_mana;
    }
    //Cambio en Armadura
    if (req.body.stats.armor != null) {
      champion.stats.armor = req.body.stats.armor;
    }
    //Cambio en Resistencia Magica
    if (req.body.stats.magic_resistance != null) {
      champion.stats.magic_resistance = req.body.stats.magic_resistance;
    }
    //Cambio en Poder de Habilidad
    if (req.body.stats.ability_power != null) {
      champion.stats.ability_power = req.body.stats.ability_power;
    }
    //Cambio en Ataque
    if (req.body.stats.atk_damage.level_1 != null) {
      champion.stats.atk_damage.level_1 = req.body.stats.atk_damage.level_1;
    }
    if (req.body.stats.atk_damage.level_2 != null) {
      champion.stats.atk_damage.level_2 = req.body.stats.atk_damage.level_2;
    }
    if (req.body.stats.atk_damage.level_3 != null) {
      champion.stats.atk_damage.level_3 = req.body.stats.atk_damage.level_3;
    }
    if (req.body.stats.atk_damage.level_4 != null) {
      champion.stats.atk_damage.level_4 = req.body.stats.atk_damage.level_4;
    }
    //Cambio en Velocidad de Ataque
    if (req.body.stats.atk_spd != null) {
      champion.stats.atk_spd = req.body.stats.atk_spd;
    }
    //Cambio en Probabilidad de Critico
    if (req.body.stats.crit_rate != null) {
      champion.stats.crit_rate = req.body.stats.crit_rate;
    }
    //Cambio en Daño Critico
    if (req.body.stats.crit_damage != null) {
      champion.stats.crit_damage = req.body.stats.crit_damage;
    }
    //Cambio en Rango
    if (req.body.stats.range != null) {
      champion.stats.range = req.body.stats.range;
    }

    //Cambio en Habilidad
    if (req.body.ability.name != null) {
      champion.ability.name = req.body.ability.name;
    }
    //Cambio en Armadura
    if (req.body.ability.description != null) {
      champion.ability.description = req.body.ability.description;
    }

    //Cambio en Items
    if (req.body.recommended_items.item_1 != null) {
      champion.recommended_items.item_1 = req.body.recommended_items.item_1;
    }
    if (req.body.recommended_items.item_2 != null) {
      champion.recommended_items.item_2 = req.body.recommended_items.item_2;
    }
    if (req.body.recommended_items.item_3 != null) {
      champion.recommended_items.item_3 = req.body.recommended_items.item_3;
    }
    if (req.body.recommended_items.item_4 != null) {
      champion.recommended_items.item_4 = req.body.recommended_items.item_4;
    }
    if (req.body.recommended_items.item_5 != null) {
      champion.recommended_items.item_5 = req.body.recommended_items.item_5;
    }
    if (req.body.recommended_items.item_6 != null) {
      champion.recommended_items.item_6 = req.body.recommended_items.item_6;
    }
    if (req.body.recommended_items.item_7 != null) {
      champion.recommended_items.item_7 = req.body.recommended_items.item_7;
    }
    if (req.body.recommended_items.item_8 != null) {
      champion.recommended_items.item_8 = req.body.recommended_items.item_8;
    }

    try {
      const updatedChampion = await champion.save();
      res.json(updatedChampion);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const champion = await getChampion(abuscar);
      await champion.deleteOne();
      res.json({ message: "Deleted Champion" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async function getChampion(abuscar) {
    let champion;
    try {
      champion = await Champion.findOne({ id: abuscar }).exec();
      if (champion == null) {
        return res.status(404).json({ message: "Cannot find champion" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    return champion;
  }
}
