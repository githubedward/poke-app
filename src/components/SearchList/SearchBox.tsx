import React from "react";
import Container from "./styles.searchbox";
import { TPokemon } from "./index";

interface IProps {
  onTextChanged: any;
  suggestions: Array<TPokemon>;
  active: boolean;
}

export default function SearchBox(props: IProps): JSX.Element {
  const { suggestions } = props;
  const isSuggestions = suggestions.length > 0;
  return (
    <Container>
      <form className="search" /* active={props.active} */ /* onSubmit={} */>
        <input
          className="search_input"
          onChange={props.onTextChanged}
          placeholder="Choose your pokemon"
        />
        <ul className="search_suggestions">
          {isSuggestions &&
            suggestions.map((sugg: TPokemon) => (
              <li key={sugg.id}>
                <div>
                  <img src={sugg.sprite} />
                  <div>{sugg.name}</div>
                </div>
                <div>
                  <p>{`[${sugg.types.join(",")}]`}</p>
                </div>
              </li>
            ))}
          {isSuggestions && <li>See all results</li>}
        </ul>
      </form>
    </Container>
  );
}
