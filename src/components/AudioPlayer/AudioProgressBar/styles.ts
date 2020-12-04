import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const AudioProgressBarStyled = styled(motion.div)`
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

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: ${colors.greenDark};
    cursor: pointer;
    z-index: 15;
  }

  input::-moz-range-thumb {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: ${colors.greenDark};
    cursor: pointer;
    z-index: 15;
  }
`;

export const AudioProgressBarBackground = styled.div`
  position: absolute;
  height: 0.4rem;
  background: ${colors.greenDark};
  pointer-events: none;
  z-index: 10;
`;
