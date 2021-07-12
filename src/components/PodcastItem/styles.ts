import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, device } from '../../styles/variables';
import { ImageOrLetterStyled } from '../ImageOrLetter/styles';

/* Exposes root container so other can easily override styles */
export const PodcastItemStyled = styled.div``;

export const PodcastItemLink = styled(Link)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: ${colors.black};

  ${ImageOrLetterStyled} {
    display: block;
    width: 9rem;
    height: 9rem;

    img {
      width: 9rem;
      height: 9rem;
      border-radius: 1rem;
    }

    span {
      display: block;
      width: 9rem;
      height: 9rem;
      border-radius: 1rem;
      background: ${colors.greenDark};
      color: ${colors.textLight};
      text-align: center;
      line-height: 9rem;
      font-size: 4rem;
      font-weight: bold;
      font-family: Nunito;
    }
  }

  @media ${device.tablet} {
    color: ${colors.black};
    padding-right: 0.5rem;
  }
`;

export const PodcastItemInfo = styled.div`
  display: block;
  margin-left: 1.3rem;

  h3 {
    font-family: Nunito;
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  p {
    display: block;
    position: relative;
    font-size: 1.3rem;
    line-height: 1.6rem;
    height: 4.8rem;
    overflow: hidden;
  }

  @media ${device.tablet} {
    p,
    h3 {
      margin: 0;
    }
  }
`;

export const PodcastItemPlaceholderContainer = styled.div`
  svg {
    display: block;
  }
`;
