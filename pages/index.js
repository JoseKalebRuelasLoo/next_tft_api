import { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import { createElement } from "react";
import * as ReactDOM from "react-dom";
import Link from "next/link";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  getChampions();

  return (
    <>
      <BaseLayout>
        <div className="contenedorCat" id="contenedor"></div>
      </BaseLayout>
    </>
  );
}

const getChampions = async () => {
  try {
    const respuesta = await fetch("/api/campeones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await respuesta.json();
    const elementos = [];
    for (let index = 0; index < data.length; index++) {
      const imageProps = {
        src: "/" + data[index].gallery.splashart,
        alt: "Descripción de la imagen",
        width: 238,
        height: 175,
        className: "splashart",
      };
      const linkProps = {
        href: "/[id]/",
        as: `/${data[index].id}/`,
      };

      if (data[index].synergies.second_class != "") {
        const elementoCat = createElement(
          Link,
          linkProps,
          createElement(
            "div",
            { className: "elementoCat" },
            createElement(Image, imageProps),
            createElement(
              "div",
              { className: "terceraSinergiaCat" },
              data[index].synergies.origin
            ),
            createElement(
              "div",
              { className: "segundaSinergiaCat" },
              data[index].synergies.class
            ),
            createElement(
              "div",
              { className: "primeraSinergiaCat" },
              data[index].synergies.second_class
            ),
            createElement(
              "div",
              { className: "detallesCat" },
              createElement(
                "p",
                { className: "nombreCat" },
                data[index].name.charAt(0).toUpperCase() +
                  data[index].name.slice(1)
              ),
              createElement(
                "p",
                { className: "costoCat" },
                data[index].stats.cost
              )
            )
          )
        );
        elementos.push(elementoCat);
      } else {
        const elementoCat = createElement(
          Link,
          linkProps,
          createElement(
            "div",
            { className: "elementoCat" },
            createElement(Image, imageProps),
            createElement("div", { className: "sinergiainv" }, "a"),
            createElement(
              "div",
              { className: "segundaSinergiaCat" },
              data[index].synergies.origin
            ),
            createElement(
              "div",
              { className: "primeraSinergiaCat" },
              data[index].synergies.class
            ),
            createElement(
              "div",
              { className: "detallesCat" },
              createElement(
                "p",
                { className: "nombreCat" },
                data[index].name.charAt(0).toUpperCase() +
                  data[index].name.slice(1)
              ),
              createElement(
                "p",
                { className: "costoCat" },
                data[index].stats.cost
              )
            )
          )
        );
        elementos.push(elementoCat);
      }
    }
    ReactDOM.render(elementos, document.getElementById("contenedor"));
  } catch (error) {
    console.error("Error al llamar a la API:", error);
  }
};

const crearElemetos = async () => {};

/*
          <div className="elementoCat">
            <Image
              className="splashart"
              width={238}
              height={175}
              src="/ahri.jpg"
              alt="logo"
            />
            <div className="terceraSinergiaCat">K/DA</div>
            <div className="segundaSinergiaCat">Spellweaver</div>
            <div className="primeraSinergiaCat">3</div>
            <div className="detallesCat">
              <p className="nombreCat">Ahri</p>
              <p className="costoCat">4</p>
            </div>
          </div>
*/
