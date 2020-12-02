import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/variables';

interface RandomEpisodeStyled {
  isPlaying?: boolean;
}

/* Exposes root container so other can easily override styles */
export const RandomEpisodeStyled = styled.div<RandomEpisodeStyled>`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: Nunito;
    font-weight: bold;
    font-size: 1.9rem;
    text-align: center;
    margin: 0;
  }

  button {
    display: flex;
    width: 10rem;
    height: 10rem;
    align-items: center;
    justify-content: center;
    font-size: 0;
    background: ${colors.white};
    border-radius: 50%;
    border: 2px solid ${colors.greenDark};
    transition: background 0.2s;
    margin: 1.9rem 0;

    &:hover {
      background: ${darken(0.05, colors.white)};
    }

    img {
      width: 3rem;
      height: 3rem;

      ${props =>
        !props.isPlaying &&
        css`
          margin-right: -0.6rem;
        `}
    }
  }
`;
