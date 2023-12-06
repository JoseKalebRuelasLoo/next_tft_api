import BaseLayout from "../../components/BaseLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const router = useRouter();
  const { id } = router.query;

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [classs, setClass] = useState("");
  const [second_class, setSecond_class] = useState("");
  const [splashart, setSplashart] = useState("");
  const [icon, setIcon] = useState("");
  const [cost, setCost] = useState("");
  const [health_level_1, setHealth_level_1] = useState("");
  const [health_level_2, setHealth_level_2] = useState("");
  const [health_level_3, setHealth_level_3] = useState("");
  const [health_level_4, setHealth_level_4] = useState("");
  const [max_mana, setMax_mana] = useState("");
  const [starting_mana, setStarting_mana] = useState("");
  const [atk_damage_level_1, setAtk_damage_level_1] = useState("");
  const [atk_damage_level_2, setAtk_damage_level_2] = useState("");
  const [atk_damage_level_3, setAtk_damage_level_3] = useState("");
  const [atk_damage_level_4, setAtk_damage_level_4] = useState("");
  const [armor, setArmor] = useState("");
  const [magic_resistance, setMagic_resistance] = useState("");
  const [ability_power, setAbility_power] = useState("");
  const [atk_spd, setAtk_spd] = useState("");
  const [crit_rate, setCrit_rate] = useState("");
  const [crit_damage, setCrit_damage] = useState("");
  const [range, setRange] = useState("");
  const [ability_name, setAbility_name] = useState("");
  const [ability_description, setAbility_description] = useState("");
  const [item_1, setItem_1] = useState("");
  const [item_2, setItem_2] = useState("");
  const [item_3, setItem_3] = useState("");
  const [item_4, setItem_4] = useState("");
  const [item_5, setItem_5] = useState("");
  const [item_6, setItem_6] = useState("");
  const [item_7, setItem_7] = useState("");
  const [item_8, setItem_8] = useState("");

  const getChampion = async () => {
    try {
      const respuesta = await fetch("/api/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await respuesta.json();
      setName(data.name.charAt(0).toUpperCase() + data.name.slice(1));
      setOrigin(data.synergies.origin);
      setClass(data.synergies.class);
      setSecond_class(data.synergies.second_class);
      setSplashart(data.gallery.splashart);
      setIcon(data.gallery.icon);
      setCost(data.stats.cost);
      setHealth_level_1(data.stats.health.level_1);
      setHealth_level_2(data.stats.health.level_2);
      setHealth_level_3(data.stats.health.level_3);
      setHealth_level_4(data.stats.health.level_4);
      setMax_mana(data.stats.mana.max_mana);
      setStarting_mana(data.stats.mana.starting_mana);
      setAtk_damage_level_1(data.stats.atk_damage.level_1);
      setAtk_damage_level_2(data.stats.atk_damage.level_2);
      setAtk_damage_level_3(data.stats.atk_damage.level_3);
      setAtk_damage_level_4(data.stats.atk_damage.level_4);

      setArmor(data.stats.armor);
      setMagic_resistance(data.stats.magic_resistance);
      setAbility_power(data.stats.ability_power);
      setAtk_spd(data.stats.atk_spd);
      setCrit_rate(data.stats.crit_rate);
      setCrit_damage(data.stats.crit_damage);
      setRange(data.stats.range);

      setAbility_name(data.ability.name);
      setAbility_description(data.ability.description);
      setItem_1(data.recommended_items.item_1);
      setItem_2(data.recommended_items.item_2);
      setItem_3(data.recommended_items.item_3);
      setItem_4(data.recommended_items.item_4);
      setItem_5(data.recommended_items.item_5);
      setItem_6(data.recommended_items.item_6);
      setItem_7(data.recommended_items.item_7);
      setItem_8(data.recommended_items.item_8);
    } catch (error) {
      console.error("Error al llamar a la API:", error);
    }
  };

  getChampion();

  const updateChampion = async () => {
    axios
      .patch(
        "/api/" + id,
        {
          name: name,
          synergies: {
            origin: origin,
            class: classs,
            second_class: second_class,
          },
          gallery: {
            splashart: splashart,
            icon: icon,
          },
          stats: {
            cost: cost,
            health: {
              level_1: health_level_1,
              level_2: health_level_2,
              level_3: health_level_3,
              level_4: health_level_4,
            },
            mana: {
              max_mana: max_mana,
              starting_mana: starting_mana,
            },
            armor: armor,
            magic_resistance: magic_resistance,
            ability_power: ability_power,
            atk_damage: {
              level_1: atk_damage_level_1,
              level_2: atk_damage_level_2,
              level_3: atk_damage_level_3,
              level_4: atk_damage_level_4,
            },
            atk_spd: atk_spd,
            crit_rate: crit_rate,
            crit_damage: crit_damage,
            range: range,
          },
          ability: {
            name: ability_name,
            description: ability_description,
          },
          recommended_items: {
            item_1: item_1,
            item_2: item_2,
            item_3: item_3,
            item_4: item_4,
            item_5: item_5,
            item_6: item_6,
            item_7: item_7,
            item_8: item_8,
          },
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        // success http code
        if (res.data.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.data.message);
          console.log(res.data.message);
        }
      });
  };

  const deleteChampion = async () => {
    axios
      .delete("/api/" + id, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        // success http code
        if (res.data.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.data.message);
          console.log(res.data.message);
        }
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    router.push("../");
  }

  return (
    <>
      <BaseLayout>
        <form className="formulario">
          <label className="tituloPrincipal">Informacion del campeon:</label>

          <div className="grid">
            <div className="general">
              <div>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <label className="titulo">Recursos:</label>

              <div>
                <label htmlFor="splashart">Splashart:</label>
                <input
                  type="text"
                  required
                  value={splashart}
                  onChange={(e) => setSplashart(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="icono">Icono:</label>
                <input
                  type="text"
                  required
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                />
              </div>

              <label className="titulo">Sinergias:</label>

              <div>
                <label htmlFor="origin">Origen:</label>
                <input
                  type="text"
                  required
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>

              <div className="">
                <label htmlFor="class">Clase:</label>
                <input
                  type="text"
                  required
                  value={classs}
                  onChange={(e) => setClass(e.target.value)}
                />
              </div>

              <div className="">
                <label htmlFor="class2">Clase Secundaria:</label>
                <input
                  type="text"
                  value={second_class}
                  onChange={(e) => setSecond_class(e.target.value)}
                />
              </div>

              <label className="titulo">Habilidad:</label>
              <div>
                <label htmlFor="ability_name">Nombre de la habilidad:</label>
                <input
                  type="text"
                  value={ability_name}
                  onChange={(e) => setAbility_name(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="ability_description">
                  Descripción de la habilidad:
                </label>
                <br></br>
                <textarea
                  onChange={(e) => setAbility_description(e.target.value)}
                  required
                  value={ability_description}
                ></textarea>
              </div>

              <label className="titulo">Items Recomendados:</label>
              <div className="item-container">
                <div>
                  <label htmlFor="item_1" className="label-item">
                    Ítem 1:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setItem_1(e.target.value)}
                    required
                    value={item_1}
                  ></input>
                </div>
                <div>
                  <label htmlFor="item_2" className="label-item">
                    Ítem 2:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setIitem_2(e.target.value)}
                    required
                    value={item_2}
                  ></input>
                </div>
                <div>
                  <label htmlFor="item_3" className="label-item">
                    Ítem 3:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setItem_3(e.target.value)}
                    required
                    value={item_3}
                  ></input>
                </div>
                <div>
                  <label htmlFor="item_4" className="label-item">
                    Ítem 4:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setItem_4(e.target.value)}
                    required
                    value={item_4}
                  ></input>
                </div>
                <div>
                  <label htmlFor="item_5" className="label-item">
                    Ítem 5:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setItem_5(e.target.value)}
                    required
                    value={item_5}
                  ></input>
                </div>
                <div>
                  <label htmlFor="item_6" className="label-item">
                    Ítem 6:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setItem_6(e.target.value)}
                    required
                    value={item_6}
                  ></input>
                </div>
                <div>
                  <label htmlFor="item_7" className="label-item">
                    Ítem 7:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setItem_7(e.target.value)}
                    required
                    value={item_7}
                  ></input>
                </div>
                <div>
                  <label htmlFor="item_8" className="label-item">
                    Ítem 8:
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setItem_8(e.target.value)}
                    required
                    value={item_8}
                  ></input>
                </div>
              </div>
            </div>
            <div className="stats">
              <label className="titulo">Stats:</label>

              <div>
                <label htmlFor="cost">Costo:</label>
                <input
                  type="text"
                  required
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </div>

              <div>
                <label className="subTitulo">Salud base:</label>
                <div>
                  <label htmlFor="health_level_1">Salud (Nivel 1):</label>
                  <input
                    type="text"
                    onChange={(e) => setHealth_level_1(e.target.value)}
                    required
                    value={health_level_1}
                  />
                </div>
                <div>
                  <label htmlFor="health_level_2">Salud (Nivel 2):</label>
                  <input
                    type="text"
                    onChange={(e) => setHealth_level_2(e.target.value)}
                    required
                    value={health_level_2}
                  />
                </div>
                <div>
                  <label htmlFor="health_level_3">Salud (Nivel 3):</label>
                  <input
                    type="text"
                    onChange={(e) => setHealth_level_3(e.target.value)}
                    required
                    value={health_level_3}
                  />
                </div>
                <div>
                  <label htmlFor="health_level_4">Salud (Nivel 4):</label>
                  <input
                    type="text"
                    onChange={(e) => setHealth_level_4(e.target.value)}
                    value={health_level_4}
                  />
                </div>
              </div>

              <div>
                <label className="subTitulo">Ataque base:</label>
                <div>
                  <label htmlFor="atk_damage_level_1">Ataque (Nivel 1):</label>
                  <input
                    type="text"
                    onChange={(e) => setAtk_damage_level_1(e.target.value)}
                    required
                    value={atk_damage_level_1}
                  />
                </div>
                <div>
                  <label htmlFor="atk_damage_level_2">Ataque (Nivel 2):</label>
                  <input
                    type="text"
                    onChange={(e) => setAtk_damage_level_2(e.target.value)}
                    required
                    value={atk_damage_level_2}
                  />
                </div>
                <div>
                  <label htmlFor="atk_damage_level_3">Ataque (Nivel 3):</label>
                  <input
                    type="text"
                    onChange={(e) => setAtk_damage_level_3(e.target.value)}
                    required
                    value={atk_damage_level_3}
                  />
                </div>
                <div>
                  <label htmlFor="atk_damage_level_4">Ataque (Nivel 4):</label>
                  <input
                    type="text"
                    onChange={(e) => setAtk_damage_level_4(e.target.value)}
                    value={atk_damage_level_4}
                  />
                </div>
              </div>

              <label className="subTitulo">Mana:</label>

              <div>
                <label htmlFor="max_mana">Mana maximo:</label>
                <input
                  type="text"
                  onChange={(e) => setMax_mana(e.target.value)}
                  required
                  value={max_mana}
                />
              </div>

              <div>
                <label htmlFor="starting_mana">Mana inicial:</label>
                <input
                  type="text"
                  onChange={(e) => setStarting_mana(e.target.value)}
                  required
                  value={starting_mana}
                />
              </div>

              <div>
                <label htmlFor="armor">Armadura:</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setArmor(e.target.value)}
                  value={armor}
                />
              </div>

              <div>
                <label htmlFor="magic_resistance">Resistencia Magica:</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setMagic_resistance(e.target.value)}
                  value={magic_resistance}
                />
              </div>

              <div>
                <label htmlFor="ability_power">Poder de Habilidad:</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setAbility_power(e.target.value)}
                  value={ability_power}
                />
              </div>

              <div>
                <label htmlFor="atk_spd">Velocidad de Ataque:</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setAtk_spd(e.target.value)}
                  value={atk_spd}
                />
              </div>

              <div>
                <label htmlFor="crit_rate">Probabilidad Critica:</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setCrit_rate(e.target.value)}
                  value={crit_rate}
                />
              </div>

              <div>
                <label htmlFor="crit_damage">Daño Critico:</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setCrit_damage(e.target.value)}
                  value={crit_damage}
                />
              </div>
              <div>
                <label htmlFor="range">Rango:</label>
                <input
                  type="text"
                  required
                  onChange={(e) => setRange(e.target.value)}
                  value={range}
                />
              </div>
            </div>
          </div>
          <button type="button" onClick={updateChampion}>
            Editar
          </button>
          <button type="button" onClick={deleteChampion}>
            Eliminar
          </button>
        </form>
      </BaseLayout>
    </>
  );
}
