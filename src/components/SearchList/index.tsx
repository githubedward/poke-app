import React, { useState } from "react";
import Container from "./styles.searchlist";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import { TPokemon } from "../App";

interface IProps {
  list: TPokemon[];
  onSetPreview: any;
}

export default function SearchList(props: IProps): JSX.Element {
  const { list, onSetPreview } = props;
  const [results, setResults] = useState<TPokemon[]>([]);
  const [suggestions, setSuggestions] = useState<TPokemon[]>([]);
  const [input, setInput] = useState<string>("");

  const onTextChanged = (e: any) => {
    const value = e.target.value;
    let newSuggestions: TPokemon[] = [];
    if (value.length > 0 && /^[a-zA-Z]+$/.test(value)) {
      const regex = new RegExp(`^${value}`, `i`);
      newSuggestions = list.filter((p: TPokemon) => regex.test(p.name));
    }
    setSuggestions(newSuggestions);
    setInput(value);
  };

  const onSelectSuggestion = (value: number | undefined) => {
    if (value) {
      onSetPreview(value);
    }
    setResults(suggestions);
    setSuggestions([]);
    setInput("");
  };

  const onPreview = (value: TPokemon) => {
    onSetPreview(value);
    setSuggestions([]);
    setInput("");
  };

  return (
    <Container>
      <h1>SearchList</h1>
      <SearchBox
        onTextChanged={onTextChanged}
        suggestions={suggestions}
        onSelectSuggestion={onSelectSuggestion}
        input={input}
      />
      <SearchResults results={results} onPreview={onPreview} />
    </Container>
  );
}
