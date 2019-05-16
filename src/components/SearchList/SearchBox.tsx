import React from "react";
import Container from "./styles.searchbox";
import { IPokemonGen } from "../../services/api";

interface IProps {
  onTextChanged: any;
  onSelectSuggestion: any;
  suggestions: Array<IPokemonGen>;
  input: string;
}

export default function SearchBox({
  suggestions,
  onSelectSuggestion,
  onTextChanged,
  input
}: IProps): JSX.Element {
  const isSuggestions = suggestions.length > 0;
  return (
    <Container>
      <form className="search">
        <input
          className="search_input"
          onChange={onTextChanged}
          placeholder="Search for your pokemon"
          value={input}
        />
        <ul className="search_suggestions">
          {isSuggestions &&
            suggestions.map((pokemon: IPokemonGen, index: number) => (
              <Suggestion
                pokemon={pokemon}
                onSelectSuggestion={onSelectSuggestion}
                key={index}
              />
            ))}
          {isSuggestions && (
            <li onClick={onSelectSuggestion}>See all results</li>
          )}
        </ul>
      </form>
    </Container>
  );
}

// Sub component
type TSubProps = {
  pokemon: IPokemonGen;
  onSelectSuggestion: any;
};

const Suggestion = ({ pokemon, onSelectSuggestion }: TSubProps) => (
  <li key={pokemon.id} onClick={() => onSelectSuggestion(pokemon.id)}>
    <div>
      <img src={pokemon.sprite} alt="pokemon-sprite" />
      <div>{pokemon.name}</div>
    </div>
    <div>
      <p>{`[${pokemon.types.join(", ")}]`}</p>
    </div>
  </li>
);
