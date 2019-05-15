import styled, {
  StyledFunction,
  ThemedStyledFunction
} from "styled-components";
import {
  flexCenter,
  boxShadowBotTight,
  borderBox
} from "../shared-styles/styles.global";
import { color, fWeight, fSize } from "../shared-styles/styles.guide";
// import SearchBox from "./SearchBox"

// const withProps = <U>() => <P, T, O>(fn: ThemedStyledFunction<P, T, O>) =>
//   fn as ThemedStyledFunction<P & U, T, O & U>;

/* const Container =  */

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
      padding: 0.5rem 1rem;
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
        /* border-bottom: 1px dashed ${color.lightgray}; */
        /* border-radius: 5px 5px 0 0; */
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
        ${flexCenter};
        justify-content: space-between;
        padding: 0.5rem 1rem;
        list-style: none;
        cursor: pointer;

        /* :first-child {
          padding-top: 0.5rem;
        } */

        :last-child {
          border-radius: 0 0 5px 5px;
          border-top: 1px dashed ${color.lightgray};
          justify-content: center;
          padding: .75rem 0;
        }

        :hover {
          background-color: ${color.lightgray};
          text-decoration: underline;
          font-weight: bold;
        }

        div {
          ${flexCenter};

          img {
            height: 3rem;
            margin-right: 1rem;
            padding: 0px;
          }
        }

        div {
          p {
            font-weight: ${fWeight.lighter};
            color: ${color.darkgray};
          }
        }
      }
    }
  }
`;

// export default Container;
