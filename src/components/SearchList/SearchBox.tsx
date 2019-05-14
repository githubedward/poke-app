import React from "react";
import Container from "./styles.searchbox";

interface SearchBoxProps {
  onTextChanged: () => void;
}

const SearchBox: React.FC = (props: SearchBoxProps) => (
  <Container>
    <form>
      <input className="search_input" onChange={props.onTextChanged} />
    </form>
  </Container>
);

export default SearchBox;
