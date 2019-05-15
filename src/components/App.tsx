import React, { useState, useEffect } from "react";
import GlobalStyles from "./shared-styles/styles.global";
import Container from "./styles.app";
import Header from "./Header/index";
import SearchList from "./SearchList/index";
import Preview from "./Preview/index";
import API from "../services/api";

export type TPokemon = {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
};

export default function App(): JSX.Element {
  const [list, setList] = useState<TPokemon[]>([]);
  const [preview, setPreview] = useState<TPokemon | null>(null);

  useEffect(() => {
    if (list.length === 0) {
      const getPokemons = async () => {
        const pokemonList = (await API.getPokemonList(150)) as TPokemon[];
        setList(pokemonList);
      };
      getPokemons();
    }
    // return () => {
    //   effect;
    // };value
  }, [list, preview]);

  const onSetPreview = (value: TPokemon) => {
    if (value.id) setPreview(value);
  };

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <main>
        <SearchList list={list} onSetPreview={onSetPreview} />
        <Preview pokemon={preview} />
      </main>
    </Container>
  );
}
