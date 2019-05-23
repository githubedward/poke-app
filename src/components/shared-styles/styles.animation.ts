import { css, keyframes } from "styled-components";

const shakeFrame = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-3px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(3px, 0, 0);
  }
`;

export const shake = css`
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: ${shakeFrame};
`;

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeIn = css`
  animation: ${fade} 0.5s ease-out;
`;

export const bgChange = (pColor: string) => {
  const colorChange = keyframes`
  from {
    background-color: ${pColor};
    color: white;
  }
  to {
    background-color: none;
  }
`;

  return css`
    animation: ${colorChange} 1s ease;
  `;
};
