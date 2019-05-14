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

  .header {
    &_title {
      ${flexCenter};
      span {
        ${font_luckyGuy};
        color: ${color.theme3};
        font-size: 2.5rem;
        padding-top: 0.75rem;
      }
      h1 {
        margin-left: 0.75rem;
        font-weight: ${fWeight.light};
      }
    }

    &_button {
      ${cta_button};
    }
  }
`;
