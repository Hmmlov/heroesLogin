import React, { useMemo } from "react";
import { HeroeCard } from "./index";

import { getHeroesByPublisher } from "../helpers/index";

export const HeroesList = ({ publisher }) => {
  /* Dependencias finales publisher, podrías tambien colocar un arreglo de las dependencias si tendría el id más el publisher */
  const heroes = useMemo (() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroeCard key={hero.id}
          {...hero}
        />
      ))}
    </div>
  );
};
