import React from "react";
import Container from "./styles.searchbox";

type SearchBoxProps = {
  onTextChanged: any;
}

export default function SearchBox(props: SearchBoxProps): JSX.Element {
  return <Container>
  <form className="search" /* onSubmit={} */>
    <input className="search_input" onChange={props.onTextChanged} />
  </form>
</Container>
} 
