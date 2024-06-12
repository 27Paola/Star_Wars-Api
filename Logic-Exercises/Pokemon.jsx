import React from "react";
const pokemonNames = [
  "audino",
  "bagon",
  "baltoy",
  "banette",
  "bidoof",
  "braviary",
  "bronzor",
  "carracosta",
  "charmeleon",
  "cresselia",
  "croagunk",
  "darmanitan",
  "deino",
  "emboar",
  "emolga",
  "exeggcute",
  "gabite",
  "girafarig",
  "gulpin",
  "haxorus",
  "heatmor",
  "heatran",
  "ivysaur",
  "jellicent",
  "jumpluff",
  "kangaskhan",
  "kricketune",
  "landorus",
  "ledyba",
  "loudred",
  "lumineon",
  "lunatone",
  "machamp",
  "magnezone",
  "mamoswine",
  "nosepass",
  "petilil",
  "pidgeotto",
  "pikachu",
  "pinsir",
  "poliwrath",
  "poochyena",
  "porygon2",
  "porygonz",
  "registeel",
  "relicanth",
  "remoraid",
  "rufflet",
  "sableye",
  "scolipede",
  "scrafty",
  "seaking",
  "sealeo",
  "silcoon",
  "simisear",
  "snivy",
  "snorlax",
  "spoink",
  "starly",
  "tirtouga",
  "trapinch",
  "treecko",
  "tyrogue",
  "vigoroth",
  "vulpix",
  "wailord",
  "wartortle",
  "whismur",
  "wingull",
  "yamask",
];

const PokemonSequence = () => {
  const findLongestSequence = () => {
    console.log("Calculo iniciado espera...");
    let bestSequence = [];

    const nameMap = {};
    pokemonNames.forEach((name) => {
      const firstLetter = name[0];
      if (!nameMap[firstLetter]) {
        nameMap[firstLetter] = [];
      }
      nameMap[firstLetter].push(name);
    });

    const stack = pokemonNames.map((name) => ({
      sequence: [name],
      used: new Set([name]),
    }));

    while (stack.length > 0) {
      const { sequence, used } = stack.pop();
      const lastLetter = sequence[sequence.length - 1].slice(-1);

      if (nameMap[lastLetter]) {
        nameMap[lastLetter].forEach((nextName) => {
          if (!used.has(nextName)) {
            const newSequence = [...sequence, nextName];
            const newUsed = new Set(used).add(nextName);
            stack.push({ sequence: newSequence, used: newUsed });

            if (newSequence.length > bestSequence.length) {
              bestSequence = newSequence;
            }
          }
        });
      }
    }

    console.log("La secuencia más larga es:", bestSequence);
  };

  return (
    <div>
      <button onClick={findLongestSequence}>Encontrar Secuencia</button>
    </div>
  );
};

export default PokemonSequence;
