import React, { useState, useEffect } from "react";
import Container from "./styles.searchlist";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import API from "../../services/api";

export type TPokemon = {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
};

// type TFormElem = React.FormEvent<HTMLFormElement>;

export default function SearchList(): JSX.Element {
  const [list, setList] = useState<TPokemon[]>([]);
  const [results, setResults] = useState<TPokemon[]>([]);
  const [suggestions, setSuggestions] = useState<TPokemon[]>([]);

  useEffect(() => {
    if (list.length === 0) {
      const getPokemons = async () => {
        const pokemonList = (await API.getPokemonList(20)) as TPokemon[];
        setList(pokemonList);
      };
      getPokemons();
    }
    // return () => {
    //   effect;
    // };value
  }, [list]);

  const onSelectSuggestion = (value: any) => {};

  const onTextChanged = (e: any) => {
    const value = e.target.value;
    let newSuggestions: TPokemon[] = [];
    if (value.length > 0 && /^[a-zA-Z]+$/.test(value)) {
      const regex = new RegExp(`^${value}`, `i`);
      newSuggestions = list
        .filter((p: TPokemon) => regex.test(p.name))
        .sort(
          (p1: TPokemon, p2: TPokemon) => (p1.name as any) - (p2.name as any)
        );
    }
    setSuggestions(newSuggestions);
  };

  return (
    <Container>
      <h1>SearchList</h1>
      <SearchBox
        onTextChanged={onTextChanged}
        suggestions={suggestions}
        active={suggestions.length > 0}
      />
      <SearchResults />
    </Container>
  );
}
