import styled from "styled-components";
import {
  flexCenter,
  font_luckyGuy,
  cta_button
} from "../shared-styles/styles.global";
import { color, fWeight } from "../shared-styles/styles.guide";

export default styled.div`
  ${flexCenter};
  justify-content: space-between;
  width: 100%;
  background-color: ${color.theme1};

  .header_title {
    ${flexCenter};
    padding-left: 2rem;
    span {
      ${font_luckyGuy};
      color: black;
      font-size: 2.5rem;
      padding-top: 0.75rem;
    }
    h1 {
      margin-left: 0.75rem;
      font-weight: ${fWeight.light};
    }
  }

  .header_button {
    margin-right: 2rem;
    ${cta_button};
  }
`;
