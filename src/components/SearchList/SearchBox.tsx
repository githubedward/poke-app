import React from "react";
import Container from "./styles.searchbox";
import { TPokemon } from "./index";

interface IProps {
  onTextChanged: any;
  suggestions: Array<TPokemon>;
}

export default function SearchBox(props: IProps): JSX.Element {
  const { suggestions } = props;
  return (
    <Container>
      <form className="search" /* onSubmit={} */>
        <input className="search_input" onChange={props.onTextChanged} />
      </form>
      <ul>
        {suggestions.length > 0 &&
          suggestions.map((sugg: TPokemon) => <li>{sugg.name}</li>)}
      </ul>
    </Container>
  );
}
