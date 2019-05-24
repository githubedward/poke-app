import styled from "styled-components";
import {
  flexCenter,
  boxShadowBotTight
} from "../../shared-styles/styles.global";
import { shake, bgChange } from "../../shared-styles/styles.animation";
import { color, fWeight, fSize } from "../../shared-styles/styles.guide";
import { fadeIn } from "../../shared-styles/styles.animation";

export default styled.div`
  ${flexCenter};
  ${shake};

  width: 100%;

  .search {
    ${flexCenter};
    position: relative;
    flex-direction: column;
    width: 100%;
    border-radius: 5px;
    ${boxShadowBotTight(color.gray)};

    &-button {
      ${flexCenter};
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 0 5px 5px 0;
      border: none;
      background: none;
      outline: none;

      &-icon {
        height: 3rem;
        padding: 0.5rem;
        fill: ${color.theme2};
        border-radius: 0 5px 5px 0;

        :hover {
          height: 3.15rem;
        }
        :active {
          height: 3.25rem;
        }
      }
    }

    &-input {
      ${bgChange(color.theme2)};
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

        ::placeholder {
          color: ${color.superdarkgray};
          font-weight: ${fWeight.light};
        }
      }

      ::placeholder {
        font-family: "Roboto", sans-serif;
        font-weight: ${fWeight.lighter};
        color: ${color.darkgray};
      }
    }

    &-suggestions {
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
