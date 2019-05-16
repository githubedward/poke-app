import React from "react";
import Container from "./styles.header";

const Header: React.FC = (props: object) => (
  <Container>
    <div className="header_title">
      <span>Pokemon Search</span>
    </div>
    <button className="header_button" type="button">
      Set Pokemon Count
    </button>
  </Container>
);

export default Header;
