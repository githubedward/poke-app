import React from "react";
import Container from "./styles.preview";
import { IPokemonDetails } from "../../services/api";

interface Props {
  pokemon: IPokemonDetails | null;
}

export default function Preview({ pokemon }: Props): JSX.Element {
  return (
    <Container>
      <h1>Preview</h1>
      {pokemon && (
        <div className="preview">
          <img src={pokemon.sprite} alt="pokemon-sprite" />
          <div>
            <div>id: {pokemon.id}</div>
            <div>name: {pokemon.name}</div>
            <div>height: {pokemon.height}</div>
            <div>types: {`[${pokemon.types.join(", ")}]`}</div>
            {Object.keys(pokemon.stats).map((stat: string, index: number) => {
              return (
                <div key={index}>{`${stat}: ${
                  Object.values(pokemon.stats)[index]
                }`}</div>
              );
            })}
          </div>
          {/* <button>I CHOOSE YOU!</button> */}
        </div>
      )}
    </Container>
  );
}
