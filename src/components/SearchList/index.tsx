import React from "react";
import Container from "./styles.searchlist";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import API from "../../services/api";

interface Props {}

interface State {
  pokemonList: any[];
  results: any[];
  suggestions: any[];
}

export default class SearchList extends React.Component<Props, State> {
  state: State = {
    pokemonList: [],
    results: [],
    suggestions: []
  };

  async componentDidMount() {
    const list = await API.getPokemonList(10);
    this.setState(state => ({
      pokemonList: state.pokemonList.concat(list)
    }));
  }

  render() {
    return (
      <Container>
        <h1>SearchList</h1>
        <SearchBox />
        <SearchResults />
      </Container>
    );
  }
}
