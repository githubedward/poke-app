import styled from "styled-components";
import { flexCenter, borderBox } from "./shared-styles/styles.global";

export default styled.div`
  ${flexCenter}
  flex-direction: column;

  main {
    ${flexCenter};
    ${borderBox};
    flex-wrap: wrap;
    width: 100%;
    padding: 3rem;
  }
`;
