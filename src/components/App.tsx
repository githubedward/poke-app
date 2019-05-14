import React from "react";
import GlobalStyles from "./shared-styles/styles.global";
import Container from "./styles.app";
import Header from "./Header/index";
import SearchList from "./SearchList/index";
import Preview from "./Preview/index";

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <Header />
        <main>
          <SearchList />
          <Preview />
        </main>
      </Container>
    );
  }
}
