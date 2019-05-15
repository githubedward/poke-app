import React from "react";
import Container from "./styles.searchbox";
import { TPokemon } from "../App";

interface IProps {
  onTextChanged: any;
  onSelectSuggestion: any;
  suggestions: Array<TPokemon>;
  input: string;
}

export default function SearchBox(props: IProps): JSX.Element {
  const { suggestions, onSelectSuggestion, onTextChanged, input } = props;
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
            suggestions.map((pokemon: TPokemon) => (
              <Suggestion
                pokemon={pokemon}
                onSelectSuggestion={onSelectSuggestion}
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
  pokemon: TPokemon;
  onSelectSuggestion: any;
};

const Suggestion = ({ pokemon, onSelectSuggestion }: TSubProps) => (
  <li key={pokemon.id} onClick={() => onSelectSuggestion(pokemon)}>
    <div>
      <img src={pokemon.sprite} alt="pokemon-sprite" />
      <div>{pokemon.name}</div>
    </div>
    <div>
      <p>{`[${pokemon.types.join(", ")}]`}</p>
    </div>
  </li>
);
