import styled from "styled-components";
import { flexCenter } from "../shared-styles/styles.global";
import { fadeIn } from "../shared-styles/styles.animation";
import { color } from "../shared-styles/styles.guide";

export default styled.div`
  ${fadeIn};
  ${flexCenter};
  flex-direction: column;
  width: 40%;
  border: 1px solid ${color.extralightgray};
  border-radius: 10px;
  margin-left: 2rem;
  padding: 2rem;

  .preview {
    ${fadeIn};
    ${flexCenter};

    img {
      height: 12rem;
    }
  }
`;
