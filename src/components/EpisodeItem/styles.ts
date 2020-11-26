import { darken } from 'polished';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

/* Exposes root container so other can easily override styles */
export const EpisodeItemStyled = styled.div`
  display: grid;
  grid-template-columns: 4.8rem auto;
  grid-column-gap: 1.5rem;
  align-items: center;

  button {
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    align-items: center;
    justify-content: center;
    font-size: 0;
    background: ${colors.white};
    border-radius: 50%;
    border: 2px solid ${colors.greenDark};
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, colors.white)};
    }

    img {
      margin-right: -0.3rem;
    }
  }
`;

export const EpisodeContent = styled.div`
  display: block;
  width: 100%;
  color: ${colors.textDark};
  overflow: hidden;

  & > p {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const EpisodeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.textPlaceholder};
  font-size: 1.2rem;
  margin-top: 0.5rem;

  span {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: ${colors.textPlaceholder};
    margin: 0 0.8rem;
  }
`;
