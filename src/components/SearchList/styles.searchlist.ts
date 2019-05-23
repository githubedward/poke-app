import styled from "styled-components";
import { flexCenter, boxShadowAll } from "../shared-styles/styles.global";
import { color } from "../shared-styles/styles.guide";

export default styled.div`
  ${flexCenter}
  flex-direction: column;

  padding: 2rem 3rem;
  width: 60%;
  min-width: 20rem;
  /* max-width: 30rem; */
  border: 1px solid ${color.extralightgray};
  border-radius: 10px;
`;
