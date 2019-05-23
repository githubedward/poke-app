import styled from "styled-components";
import { flexCenter } from "../shared-styles/styles.global";
import { fadeIn } from "../shared-styles/styles.animation";
import { color, fWeight } from "../shared-styles/styles.guide";

export default styled.div`
  ${fadeIn};
  ${flexCenter};
  flex-direction: column;
  width: 40%;
  border: 1px solid ${color.extralightgray};
  border-radius: 10px;
  margin-left: 2rem;
  padding: 2rem;

  .preview-who {
    font-size: 15rem;
    color: ${color.lightgray};
  }

  .preview-container {
    ${fadeIn};
    ${flexCenter};

    img {
      height: 12rem;
      margin-right: 2rem;
    }

    .preview {
      &-table {
        width: 15rem;
        padding: 0.5rem;
        border: 1px dashed ${color.lightgray};

        &-head {
          background-color: ${color.superdarkgray};
          tr {
            th {
              padding: 0.25rem 0;
              color: white;
            }
          }
        }

        &-body {
          width: inherit;

          tr {
            border-bottom: 1px solid ${color.lightgray};

            td {
              :first-child {
                font-weight: ${fWeight.light};
                width: 8rem;
              }

              :last-child {
                text-align: right;
              }
            }
          }
        }
      }
    }
  }
`;
