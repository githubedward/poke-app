import { createGlobalStyle, css } from "styled-components";
import { color } from "./styles.guide";

export default createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    color: ${color.superdarkgray};
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
  }

  button, a {
    cursor: pointer;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
