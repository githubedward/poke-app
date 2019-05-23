import React from "react";
import Container from "./styles/styles.searchresults";
import { IPokemonGen } from "../../services/api";

interface IProps {
  results: IPokemonGen[];
  onPreview: any;
}

export default function Results(props: IProps): JSX.Element {
  const { results, onPreview } = props;
  return (
    <Container>
      {results.length > 0 && (
        <ul>
          {results.map((result: IPokemonGen) => (
            <li key={result.id} className="result">
              <div className="result-left">
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
                className="result-right"
                type="button"
                onClick={() => onPreview(result.id)}
              >
                See stats
              </button>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
