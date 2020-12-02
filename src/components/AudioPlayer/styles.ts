import { motion } from 'framer-motion';
import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { colors, dims } from '../../styles/variables';
import { AudioProgressBarStyled } from './AudioProgressBar/styles';

interface PlayPauseButtonProps {
  isPlaying?: boolean;
}

export const AudioPlayerStyled = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  background: ${colors.white};
  color: ${colors.textDark};
`;

export const AudioPlayerContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;

  @media (min-width: ${dims.tabletBreak}) {
    flex-direction: row;
  }
`;

export const PlayerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: ${dims.tabletBreak}) {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

export const RewindButton = styled.button`
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

export const PlayPauseButton = styled.button<PlayPauseButtonProps>`
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

export const ForwardButton = styled.button`
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

export const AudioInfoContainer = styled.div`
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

export const AudioProgressInfo = styled.div`
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
