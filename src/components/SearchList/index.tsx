import React from "react";
import Container from "./styles.searchlist";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import API from "../../services/api";

interface SearchProps {}

type PokemonList = {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
};

interface SearchState {
  pokemonList: Array<PokemonList>;
  results: any[];
  suggestions: Array<PokemonList>;
}

export default class SearchList extends React.Component<
  SearchProps,
  SearchState
> {
  state = {
    pokemonList: [],
    results: [],
    suggestions: []
  };

  async componentDidMount() {
    const pokemonList = (await API.getPokemonList(10)) as PokemonList[];
    this.setState(() => ({
      pokemonList
    }));
  }

  onTextChanged = (e: React.FormEvent<HTMLFormElement>) => {
    const value = e.target.value;
    let suggestions: Array<PokemonList> = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = this.state.pokemonList.filter((p: PokemonList) =>
        regex.test(p.name)
      );
    }
    this.setState(() => ({
      suggestions
    }));
  };

  render() {
    return (
      <Container>
        <h1>SearchList</h1>
        <SearchBox onTextChanged={this.onTextChanged} />
        <SearchResults />
      </Container>
    );
  }
}
