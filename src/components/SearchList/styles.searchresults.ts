import styled from "styled-components";
import {
  flexCenter,
  button,
  boxShadowBotTight
} from "../shared-styles/styles.global";
import { color, fWeight } from "../shared-styles/styles.guide";
import { fadeIn } from "../shared-styles/styles.animation";

export default styled.div`
  ${flexCenter};
  width: 100%;
  margin: 2rem 0;

  ul {
    ${flexCenter};
    flex-direction: column;
    border-radius: 5px;
    ${boxShadowBotTight(color.gray)};
    width: 100%;

    .result {
      ${fadeIn};
      ${flexCenter};
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      padding: 0 2rem;
      border-bottom: 1px dashed ${color.lightgray};

      :last-child {
        border-bottom: none;
      }

      &-left {
        ${flexCenter};

        img {
          margin-right: 1rem;
        }

        div {
          div {
            margin: 0.5rem 0;
          }
        }
      }

      &-right {
        ${button("white", color.theme3, color.theme3)};
      }

      span {
        font-weight: ${fWeight.lighter};
      }
    }
  }
`;
