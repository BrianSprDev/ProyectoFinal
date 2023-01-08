import React from "react";
import img1984 from "./imagenes/1984.jpg";
import imgEstEsc from "./imagenes/estudioEnEscarlata.jpg";
import imgOdisea from "./imagenes/Odisea.jpg";
import imgAleph from "./imagenes/elAleph.jpg";
import { useEffect } from "react";
import { getFirestore, doc } from "firebase/firestore";

export const data = [
  {
    id: "1",
    title: "Estudio en escarlata",
    description:
      "Un cadáver hallado en extrañas circunstancias pone en marcha los reflejos deductivos de Holmes, mientras la policía oficial se pierde en divagaciones equivocadas o arresta a inocentes ciudadanos. Un nuevo asesinato parece complicar la historia, pero a Holmes se la aclara.",
    price: "$" + 1000,
    pictureUrl: imgEstEsc,
    stock: 10,
    category: "novelas",
  },
  {
    id: "2",
    title: "1984",
    description:
      "Basada en la novela de Orwell, un hombre intenta conservar la esperanza en una sociedad totalitaria y represiva. Después de enamorarse de una joven, intentan mantener su amor vivo pero oculto del Gran Hermano que todo lo sabe. Este dictador oscuro y virtual pareciera conocer hasta lo que cada uno piensa en los rincones de la mente.",
    price: "$" + 1200,
    pictureUrl: img1984,
    stock: 7,
    category: "novelas",
  },
  {
    id: "3",
    title: "La Odisea",
    description:
      "La historia narra el viaje de regreso del héroe Odiseo a su patria, la isla de Ítaca, tras su participación en la guerra de Troya. Su travesía estará llena de peligros y aventuras. La Odisea es una metáfora del viaje que es la vida para todos nosotros; de ahí que sea un clásico universal.",
    price: "$" + 950,
    pictureUrl: imgOdisea,
    stock: 5,
    category: "poesia",
  },

  {
    id: "4",
    title: "El Aleph",
    description:
      "Este Borges ficcional comienza relatando el estado de la cosas tras la muerte de Beatriz Viterbo, a la que había amado sin ser correspondido. A Borges solo le quedaba mantener intacto, lo más posible, el mundo y las costumbres asociadas a su relación con Beatriz.",
    price: "$" + 120,
    pictureUrl: imgAleph,
    stock: 3,
    category: "cuentos",
  },
];
