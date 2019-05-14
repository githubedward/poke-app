import styled from "styled-components";
import { flexCenter } from "./shared-styles/styles.global";

export default styled.div`
  ${flexCenter}
  flex-direction: column;

  main {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    ${flexCenter};
    width: 100%;
    padding: 0 2rem;
  }
`;
