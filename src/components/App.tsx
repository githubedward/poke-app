import React, { useState, useEffect } from "react";
import GlobalStyles from "./shared-styles/styles.global";
import Container from "./styles.app";
import Header from "./Header/index";
import SearchList from "./SearchList/index";
import Preview from "./Preview/index";
import API, { IPokemonDetails, IPokemonGen } from "../services/api";

export default function App(): JSX.Element {
  const [list, setList] = useState<IPokemonGen[]>([]);
  const [preview, setPreview] = useState<IPokemonGen | null>(null);

  useEffect(() => {
    if (list.length === 0) {
      const getPokemons = async () => {
        const pokemonList = (await API.getPokemonList(150)) as IPokemonGen[];
        setList(pokemonList);
      };
      getPokemons();
    }
    // return () => {
    //   effect;
    // };value
  }, [list, preview]);

  const onSetPreview = async (id: number) => {
    if (id) {
      const pokemonObj = (await API.getPokemon(id)) as IPokemonDetails;
      setPreview(pokemonObj);
    }
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
