import { gestureProps } from 'framer-motion/types/motion/features/gestures';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles/variables';

interface AudioProgressBarProps {
  value: number;
}

export const AudioProgressBarStyled = styled.div<AudioProgressBarProps>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 1.8rem;

  input {
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 0.4rem;
    background: ${colors.textPlaceholder};
    outline: none;
  }

  input::before {
    content: '';
    position: absolute;
    height: 0.4rem;
    background: ${colors.greenDark};

    ${props => css`
      width: ${props.value}%;
    `}
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: ${colors.greenDark};
    cursor: pointer;
  }

  input::-moz-range-thumb {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: ${colors.greenDark};
    cursor: pointer;
  }
`;
