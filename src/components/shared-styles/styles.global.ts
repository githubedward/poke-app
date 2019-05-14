import { createGlobalStyle, css } from "styled-components";
import { color, fSize } from "./styles.guide";

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

export const boxShadowAll = (color: string) => css`
  -webkit-box-shadow: 0px 0px 6px 2px ${color};
  -moz-box-shadow: 0px 0px 6px 2px ${color};
  box-shadow: 0px 0px 6px 2px ${color};
`;

export const boxShadowBotTight = (color: string) => css`
  -webkit-box-shadow: 0px 1px 2px 1px ${color};
  -moz-box-shadow: 0px 1px 2px 1px ${color};
  box-shadow: 0px 1px 2px 1px ${color};
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const font_luckyGuy = css`
  font-family: "Luckiest Guy", cursive;
`;

export const cta_button = css`
  ${flexCenter};
  width: auto;
  height: (40 / 16) + "rem";
  border-radius: 2px;
  background-color: ${color.theme2};
  border: 1px solid ${color.theme2};
  font-size: ${fSize.t4};
  padding: 0.5rem 1rem;
  outline: none;
  color: white;

  :hover {
    border: 1px solid ${color.theme1};
  }

  :active {
    border: 1px solid ${color.theme2};
  }
`;
