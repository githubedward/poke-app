import styled from "styled-components";
import { flexCenter, boxShadowAll } from "../shared-styles/styles.global";
import { color } from "../shared-styles/styles.guide";

export default styled.div`
  ${flexCenter}
  flex-direction: column;
  margin: 3rem 0rem;
  padding: 2rem;
  width: 100%;
  ${boxShadowAll(color.extralightgray)}
`;
