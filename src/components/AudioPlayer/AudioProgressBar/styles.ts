import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors, device } from '../../../styles/variables';

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
    cursor: pointer;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    background: ${colors.greenDark};
    cursor: pointer;
    transition: 0.2s;
    z-index: 15;
    width: 1.8rem;
    height: 1.8rem;
  }

  input::-moz-range-thumb {
    border-radius: 50%;
    background: ${colors.greenDark};
    cursor: pointer;
    transition: 0.2s;
    z-index: 15;
    width: 1.8rem;
    height: 1.8rem;
  }

  @media ${device.tablet} {
    input::-webkit-slider-thumb {
      width: 4px;
      height: 4px;
    }

    input::-moz-range-thumb {
      width: 4px;
      height: 4px;
    }

    input::-webkit-slider-thumb:hover {
      width: 1.8rem;
      height: 1.8rem;
    }

    input::-moz-range-thumb:hover {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

export const AudioProgressBarBackground = styled.div`
  position: absolute;
  height: 0.4rem;
  background: ${colors.greenDark};
  pointer-events: none;
  z-index: 10;
`;
