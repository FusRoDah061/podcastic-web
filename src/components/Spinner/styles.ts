import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerStyled = styled.div`
  position: relative;
  display: block;
`;

export const SpinnerRing = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  border-style: solid;
  border-radius: 50%;

  animation: ${rotate} 1s linear infinite;
`;
