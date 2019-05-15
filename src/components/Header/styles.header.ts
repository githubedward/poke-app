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
  background-color: ${color.superdarkgray};

  .header {
    &_title {
      ${flexCenter};
      padding-left: 3rem;

      span {
        ${font_luckyGuy};
        color: ${color.theme1};
        font-size: 2.5rem;
        padding-top: 0.75rem;
      }
      h1 {
        margin-left: 0.75rem;
        font-weight: ${fWeight.light};
        color: white;
      }
    }

    &_button {
      margin-right: 3rem;
      ${cta_button};
    }
  }
`;
