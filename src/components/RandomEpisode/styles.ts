import { darken } from 'polished';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

/* Exposes root container so other can easily override styles */
export const RandomEpisodeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
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
    border: 2px solid ${props => props.theme.themeColor ?? colors.greenDark};
    transition: background 0.2s;
    margin: 1.7rem 0;

    &:hover {
      background: ${darken(0.05, colors.white)};
    }

    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const EpisodeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.textPlaceholder};

  span {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: ${colors.textPlaceholder};
    margin: 0 0.8rem;
  }
`;
