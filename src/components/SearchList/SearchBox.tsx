import React from "react";
import Container from "./styles.searchbox";

const SearchBox: React.FC = (props: object) => (
  <Container>
    <input className="search_input" />
  </Container>
);

export default SearchBox;
