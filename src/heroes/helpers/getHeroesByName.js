import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '') => {
  name.toLocaleUpperCase().trim();
  if (name.length === 0) return [];

  return heroes.filter(hero =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
