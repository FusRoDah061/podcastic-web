import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { colors, device } from '../../../styles/variables';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: ${colors.info};
  `,
  success: css`
    background: ${colors.success};
  `,
  error: css`
    background: ${colors.error};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  position: relative;
  display: flex;
  width: 100vw;
  color: ${colors.textDark};
  background: ${colors.white};
  margin-bottom: 2rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  & > span {
    display: block;
    width: 10px;
    ${props => toastTypeVariations[props.type ?? 'info']}
  }

  img {
    margin: 0px 2rem;
  }

  div {
    flex: 1;
    padding: 1.6rem 0;
    color: ${colors.black};

    strong {
      font-weight: bold;
      font-family: Nunito;
      font-size: 1.6rem;
    }

    p {
      margin-top: 8px;
      font-size: 1.4rem;
      opacity: 0.8;
    }
  }

  button {
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  @media ${device.tablet} {
    width: 400px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.25);

    & > span {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
`;
