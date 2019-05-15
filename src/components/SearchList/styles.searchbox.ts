import styled, {
  StyledFunction,
  ThemedStyledFunction
} from "styled-components";
import { flexCenter, boxShadowBotTight } from "../shared-styles/styles.global";
import { color, fWeight, fSize } from "../shared-styles/styles.guide";
import { fadeIn } from "../shared-styles/styles.animation";

export default styled.div`
  ${flexCenter};
  width: 100%;

  .search {
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    border-radius: 5px;
    ${boxShadowBotTight(color.gray)};

    &_input {
      padding: 0.75rem 1rem;
      border: none;
      border-radius: 5px;
      outline: none;
      color: ${color.superdarkgray};
      font-size: ${fSize.t1};
      font-weight: ${fWeight.light};
      background-color: none;
      width: 100%;

      :focus {
        font-style: italic;
      }

      ::placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: ${fWeight.lighter};
        color: ${color.gray};
      }
    }

    &_suggestions {
      width: 100%;

      li {
        ${fadeIn};
        ${flexCenter};
        justify-content: space-between;
        padding: 0.5rem 2rem;
        list-style: none;
        color: ${color.darkgray};
        cursor: pointer;

        :last-child {
          border-radius: 0 0 5px 5px;
          border-top: 1px dashed ${color.lightgray};
          justify-content: center;
          padding: 0.75rem 0;
        }

        :hover {
          background-color: ${color.lightgray};
          text-decoration: underline;
          font-weight: bold;
          color: ${color.superdarkgray};

          img {
            opacity: 1;
          }

          div {
            p {
              font-weight: ${fWeight.light};
            }
          }
        }

        div {
          ${flexCenter};

          img {
            opacity: 0.5;
            height: 3rem;
            margin-right: 1rem;
            padding: 0px;
          }
        }

        div {
          p {
            font-weight: ${fWeight.lighter};
          }
        }
      }
    }
  }
`;
