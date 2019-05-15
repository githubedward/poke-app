import styled from "styled-components";
import { flexCenter, boxShadowBotTight } from "../shared-styles/styles.global";
import { color, fWeight, fSize } from "../shared-styles/styles.guide";

export default styled.div`
  ${flexCenter};
  flex-direction: column;
  padding: 0 2rem;

  .search {
    &_input {
      padding: 0.5rem 2rem 0.5rem 2rem;
      border-radius: 2rem;
      border: 1px solid ${color.gray};
      outline: none;
      color: ${color.superdarkgray};
      font-size: ${fSize.t1};
      font-weight: ${fWeight.light};

      :focus {
        ${boxShadowBotTight(color.gray)};
        border: 1px solid ${color.gray};
      }
    }
  }
`;
