import React from "react";
import Container from "./styles.searchresults";
import { TPokemon } from "../App";

interface IProps {
  results: TPokemon[];
  onPreview: any;
}

export default function Results(props: IProps): JSX.Element {
  const { results, onPreview } = props;
  return (
    <Container>
      {results.length > 0 && (
        <ul>
          {results.map((result: TPokemon) => (
            <li key={result.id} className="result">
              <div className="result_left">
                <img src={result.sprite} alt="pokemon-sprite" />
                <div>
                  <div>
                    <span>Pokemon:</span> {result.name}
                  </div>
                  <div>
                    <span>Types:</span> {`[${result.types.join(", ")}]`}
                  </div>
                </div>
              </div>
              <button
                className="result_right"
                type="button"
                onClick={() => onPreview(result)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
