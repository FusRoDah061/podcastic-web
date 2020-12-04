import { motion } from 'framer-motion';
import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { colors, dims } from '../../styles/variables';
import { AudioProgressBarStyled } from './AudioProgressBar/styles';

interface AudioPlayerProps {
  isMinimized: boolean;
}

interface PlayPauseButtonProps {
  isPlaying?: boolean;
}

export const AudioPlayerStyled = styled(motion.div)<AudioPlayerProps>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  background: ${colors.white};
  color: ${colors.textDark};

  ${props =>
    props.isMinimized &&
    css`
      ${AudioPlayerContent} {
        padding: 1rem 2rem;
        padding-bottom: 0.5rem;

        ${PlayerControls} {
          grid-template-columns: 3.5rem 1fr 3.5rem;
          grid-column-gap: 0;
          margin-bottom: 0;

          ${DismissButton} {
            width: 3.5rem;
            height: 3.5rem;
          }

          ${PlayerButtons} {
            ${RewindButton}, ${ForwardButton}, ${PlayPauseButton} {
              width: 3.5rem;
              height: 3.5rem;
            }

            ${PlayPauseButton} {
              border-width: 3px;

              img {
                width: 1.2rem;
                height: 1.2rem;
              }
            }
          }
        }

        ${AudioInfoContainer} {
          position: absolute;
          top: -7px;

          & > P {
            display: none;
          }

          ${AudioProgressInfo} {
            ${AudioProgressBarStyled} {
              input::-webkit-slider-thumb {
                width: 0.4rem;
                height: 0.4rem;
              }

              input::-moz-range-thumb {
                width: 0.4rem;
                height: 0.4rem;
              }
            }

            span {
              display: none;
            }
          }
        }
      }
    `}
`;

export const AudioPlayerContent = styled(motion.div)`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  background: ${colors.white};

  @media (min-width: ${dims.tabletBreak}) {
    flex-direction: row;
  }
`;

export const PlayerControls = styled(motion.div)`
  display: grid;
  width: 100%;
  grid-template-columns: 4rem 1fr 4rem;
  grid-column-gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: ${dims.tabletBreak}) {
    grid-template-columns: 4rem 1fr;
    width: auto;
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

export const DismissButton = styled(motion.button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: ${colors.white};
  border-radius: 50%;
  border: 0;
  transition: background 0.2s;
  font-size: 0;

  &:hover {
    background: ${darken(0.05, colors.white)};
  }

  img {
    width: 40%;
    height: 40%;
  }
`;

export const PlayerButtons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RewindButton = styled(motion.button)`
  position: relative;
  width: 4rem;
  height: 4rem;
  background: ${colors.white};
  color: ${colors.greenDark};
  border-radius: 50%;
  border: 0;
  transition: background 0.2s;
  font-size: 0.9rem;
  padding-top: 0.3rem;

  &:hover {
    background: ${darken(0.05, colors.white)};
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const PlayPauseButton = styled(motion.button)<PlayPauseButtonProps>`
  display: flex;
  width: 4.8rem;
  height: 4.8rem;
  align-items: center;
  justify-content: center;
  font-size: 0;
  background: ${colors.white};
  margin: 0rem 1rem;
  border-radius: 50%;
  border: 3px solid ${colors.greenDark};
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, colors.white)};
  }

  ${props =>
    !props.isPlaying &&
    css`
      img {
        margin-right: -0.3rem;
      }
    `}
`;

export const ForwardButton = styled(motion.button)`
  position: relative;
  width: 4rem;
  height: 4rem;
  background: ${colors.white};
  color: ${colors.greenDark};
  border-radius: 50%;
  border: 0;
  transition: background 0.2s;
  font-size: 0.9rem;
  padding-top: 0.3rem;

  &:hover {
    background: ${darken(0.05, colors.white)};
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const MinimizeButton = styled(motion.button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: ${colors.white};
  border-radius: 50%;
  border: 0;
  transition: background 0.2s;
  font-size: 0;

  &:hover {
    background: ${darken(0.05, colors.white)};
  }

  img {
    width: 40%;
    height: 40%;
  }

  @media (min-width: ${dims.tabletBreak}) {
    display: none;
  }
`;

export const AudioInfoContainer = styled(motion.div)`
  flex: 1;
  width: 100%;

  p {
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
  }

  @media (min-width: ${dims.tabletBreak}) {
    p {
      font-size: 1.6rem;
    }
  }
`;

export const AudioProgressInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    color: ${colors.textPlaceholder};
    font-size: 1.2rem;
    text-align: center;
    margin-top: 0.6rem;
  }

  div.js-react-player {
    display: none;
  }

  @media (min-width: ${dims.tabletBreak}) {
    flex-direction: row;
    justify-content: center;

    ${AudioProgressBarStyled} {
      flex: 1;
    }

    span {
      width: 130px;
      margin-left: 1rem;
      font-size: 1.4rem;
      text-align: right;
      margin-top: 0;
    }
  }
`;
