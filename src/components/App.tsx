import React from "react";
import Container from "./styles.app";
import Header from "./Header/index";
import SearchList from "./SearchList/index";
import Preview from "./Preview/index";

export default class App extends React.Component<object, object> {
  render() {
    return (
      <Container>
        <Header />
        <div className="main">
          <SearchList />
          <Preview />
        </div>
      </Container>
    );
  }
}
