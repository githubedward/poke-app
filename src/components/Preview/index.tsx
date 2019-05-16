import React from "react";
import Container from "./styles.preview";
import { IPokemonGen } from "../../services/api";

interface Props {
  pokemon: IPokemonGen | null;
}

export default function Preview({ pokemon }: Props): JSX.Element {
  return (
    <Container>
      <h1>Preview</h1>
      {pokemon && (
        <div className="preview">
          <img src={pokemon.sprite} alt="pokemon-sprite" />
          <div>
            <div>{pokemon.name}</div>
            <p>{`[${pokemon.types.join(", ")}]`}</p>
          </div>
          <button>I CHOOSE YOU!</button>
        </div>
      )}
    </Container>
  );
}
