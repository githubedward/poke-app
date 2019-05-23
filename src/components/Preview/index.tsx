import React from "react";
import Container from "./styles.preview";
import { IPokemonDetails } from "../../services/api";

interface Props {
  pokemon: IPokemonDetails | null;
}

export default function Preview({ pokemon }: Props): JSX.Element {
  return (
    <Container>
      {(pokemon && (
        <div className="preview-container">
          <img src={pokemon.sprite} alt="pokemon-sprite" />
          <div className="preview">
            <table className="preview-table">
              <thead className="preview-table-head">
                <tr>
                  <th colSpan={2}>{pokemon.name}</th>
                </tr>
              </thead>
              <tbody className="preview-table-body">
                <tr>
                  <td>id</td>
                  <td>{pokemon.id}</td>
                </tr>
                <tr>
                  <td>height</td>
                  <td>{pokemon.height}</td>
                </tr>
                <tr>
                  <td>types</td>
                  <td>{`[${pokemon.types.join(", ")}]`}</td>
                </tr>
              </tbody>
            </table>
            <table className="preview-table">
              <thead className="preview-table-head">
                <tr>
                  <th colSpan={2}>stats</th>
                </tr>
              </thead>
              <tbody className="preview-table-body">
                {Object.keys(pokemon.stats).map(
                  (stat: string, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{stat}</td>
                        <td>{Object.values(pokemon.stats)[index]}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
          {/* <button>I CHOOSE YOU!</button> */}
        </div>
      )) || <h1 className="preview-who">?</h1>}
    </Container>
  );
}
