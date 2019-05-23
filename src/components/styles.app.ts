import styled from "styled-components";
import { flexCenter, borderBox } from "./shared-styles/styles.global";

export default styled.div`
  ${flexCenter}
  flex-direction: column;

  main {
    ${flexCenter};
    align-items: flex-start;
    ${borderBox};
    /* flex-wrap: wrap; */
    width: 100%;
    padding: 3rem;
  }
`;
