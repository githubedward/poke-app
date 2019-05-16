import React, { useState } from "react";
import Container from "./styles.searchlist";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import { IPokemonGen } from "../../services/api";

interface IProps {
  list: IPokemonGen[];
  onSetPreview: any;
}

export default function SearchList(props: IProps): JSX.Element {
  const { list, onSetPreview } = props;
  const [results, setResults] = useState<IPokemonGen[]>([]);
  const [suggestions, setSuggestions] = useState<IPokemonGen[]>([]);
  const [input, setInput] = useState<string>("");

  const onTextChanged = (e: any) => {
    const value = e.target.value;
    let newSuggestions: IPokemonGen[] = [];
    if (value.length > 0 && /^[a-zA-Z]+$/.test(value)) {
      const regex = new RegExp(`^${value}`, `i`);
      newSuggestions = list.filter((p: IPokemonGen) => regex.test(p.name));
    }
    setSuggestions(newSuggestions);
    setInput(value);
  };

  const onSelectSuggestion = (id: number) => {
    if (typeof id === "number") {
      onSetPreview(id);
    }
    setResults(suggestions);
    setSuggestions([]);
    setInput("");
  };

  const onPreview = (id: number) => {
    onSetPreview(id);
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
