import React from "react";
import Container from "./styles.index";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

interface Props {}

interface State {
  pokemonList: Array<object> | null;
  results: Array<object> | null;
  suggestions: Array<object> | null;
}

export default class SearchList extends React.Component<Props, State> {
  state: State = {
    pokemonList: null,
    results: null,
    suggestions: null
  };

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
