import React from "react";
import Container from "./styles.preview";
import { TPokemon } from "../App";

interface Props {
  pokemon: TPokemon | null;
}

export default function Preview(props: Props): JSX.Element {
  const { pokemon } = props;
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
