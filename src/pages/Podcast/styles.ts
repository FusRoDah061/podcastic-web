import { motion } from 'framer-motion';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { EpisodesListStyled } from '../../components/EpisodesList/styles';
import { ImageOrLetterStyled } from '../../components/ImageOrLetter/styles';
import { RandomEpisodeStyled } from '../../components/RandomEpisode/styles';
import { SpinnerStyled } from '../../components/Spinner/styles';
import { colors, dims } from '../../styles/variables';

interface RandomEpisodePopupContainerProps {
  visible: boolean;
}

export const Container = styled(motion.main)`
  height: 100%;
`;

export const HeaderContainer = styled.header`
  height: 14rem;
  padding: 2rem 1.7rem;
  background: linear-gradient(
    180deg,
    ${colors.greenDark} 0%,
    ${colors.greenLight} 55%
  );

  button:first-child {
    display: none;
  }

  @media (min-width: ${dims.tabletBreak}) {
    padding: 3rem;
    background: ${colors.white};
    height: auto;

    button:first-child {
      display: block;
      background: none;
      border: 0;
    }
  }
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  font-family: Nunito;
  font-weight: bold;
  font-size: 1.8rem;
  border: none;
  background: transparent;

  img {
    margin-right: 1.5rem;
  }

  @media (min-width: ${dims.tabletBreak}) {
    display: none;
  }
`;

export const PageContent = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 6rem);
  padding: 0rem 1.7rem;

  & > ${SpinnerStyled} {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: ${dims.tabletBreak}) {
    height: calc(100% - 10rem);
    padding: 0rem 3rem;
    align-items: center;
  }
`;

export const HasPodcastPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -8rem;
  max-height: 100%;
  width: 100%;

  @media (min-width: ${dims.tabletBreak}) {
    display: grid;
    grid-template-columns: 300px auto;
    grid-column-gap: 4rem;
    margin-top: 0;
    flex-direction: row;
    height: 100%;
  }
`;

export const PodcastInfo = styled.aside``;

export const PodcastInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2rem;

  ${ImageOrLetterStyled} {
    display: block;

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

  @media (min-width: ${dims.tabletBreak}) {
    flex-direction: column;
    margin-bottom: 1.5rem;

    ${ImageOrLetterStyled} {
      img {
        width: auto;
        height: auto;
        max-width: 100%;
      }

      span {
        width: 300px;
        height: 300px;
        line-height: 300px;
        font-size: 12rem;
      }
    }
  }
`;

export const PodcastNameDescription = styled.div`
  h1 {
    display: none;
  }

  p {
    max-height: 7rem;
    padding-top: 0.6rem;
    color: ${colors.textLight};
    margin-left: 1.4rem;
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: normal;
    font-family: Roboto;
    overflow: hidden;
  }

  @media (min-width: ${dims.tabletBreak}) {
    h1 {
      display: block;
      color: ${colors.textDark};
      font-family: Nunito;
      font-weight: bold;
      font-size: 2.4rem;
      margin-top: 1rem;
    }

    p {
      color: ${colors.textDark};
      padding-top: 0;
      margin-left: 0;
      max-height: 9.6rem;
      margin-top: 1rem;
    }
  }
`;

export const PodcastLinks = styled.div`
  display: none;

  @media (min-width: ${dims.tabletBreak}) {
    display: flex;
    align-items: center;

    a {
      display: flex;
      font-size: 1.5rem;
      color: ${colors.textPlaceholder};
      align-items: center;
      margin-right: 1rem;

      img {
        width: 1.5rem;
        margin-right: 0.3rem;
      }
    }
  }
`;

export const RandomEpisodeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.2rem;
  background: ${colors.greenLight};
  border: 2px solid ${colors.greenDark};
  border-radius: 1rem;
  transition: background 0.2s;
  font-size: 1.5rem;
  font-family: Nunito;
  font-weight: bold;

  &:hover {
    background: ${darken(0.03, colors.greenLight)};
  }
`;

// eslint-disable-next-line prettier/prettier
export const RandomEpisodePopupContainer = styled(motion.div)<RandomEpisodePopupContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 10;

  ${props =>
    props.visible
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  @media (min-width: ${dims.tabletBreak}) {
    display: flex !important;
    position: relative;
    top: unset;
    left: unset;
    width: 100%;
    height: auto;
  }
`;

export const RandomEpisodePopup = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 310px;
  background: ${colors.white};
  box-shadow: 0px 2px 40px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  color: ${colors.textDark};
  padding: 0rem 2.5rem;

  @media (min-width: ${dims.tabletBreak}) {
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    margin-top: 3rem;
  }
`;

export const RandomEpisodePopupHeader = styled.div`
  padding: 2.4rem 0rem;

  p {
    font-family: Nunito;
    font-weight: bold;
    font-size: 1.8rem;
  }

  @media (min-width: ${dims.tabletBreak}) {
    display: none;
  }
`;

export const RandomEpisodePopupBody = styled.div`
  padding: 0;

  & > p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: ${dims.tabletBreak}) {
    & > p {
      display: none;
    }
  }
`;

export const RandomEpisodePopupEpisode = styled.div`
  display: flex;
  justify-content: center;

  ${RandomEpisodeStyled} {
    button {
      width: 10rem;
      height: 10rem;

      img {
        width: 3rem;
        height: 3rem;
        margin-right: -0.6rem;
      }
    }
  }

  @media (min-width: ${dims.tabletBreak}) {
    ${RandomEpisodeStyled} {
      button {
        width: 7rem;
        height: 7rem;

        img {
          width: 2.5rem;
          height: 2.5rem;
          margin-right: -0.6rem;
        }
      }
    }
  }
`;

export const RandomEpisodePopupFooter = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;
  padding: 2.4rem 0rem;

  button {
    padding: 1.1rem 2rem;
    background: ${colors.white};
    border: 2px solid ${colors.greenDark};
    color: ${colors.textDark};
    border-radius: 1rem;
    transition: background 0.2s;
    font-size: 1.5rem;

    &:hover {
      background: ${darken(0.05, colors.white)};
    }
  }

  @media (min-width: ${dims.tabletBreak}) {
    display: none;
  }
`;

export const EpisodesContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  overflow: hidden;

  @media (min-width: ${dims.tabletBreak}) {
    margin-top: 0;
  }
`;

export const EpisodesContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    color: ${colors.textDark};
    font-size: 1.6rem;
  }

  @media (min-width: ${dims.tabletBreak}) {
    align-items: normal;

    & > p {
      font-size: 1.8rem;
    }
  }
`;

export const EpisodesFiltersForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  ${SpinnerStyled} {
    margin-right: 1.2rem;
  }
`;

export const EpisodeSearchInputContainer = styled.div`
  display: none;

  @media (min-width: ${dims.tabletBreak}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 1rem;
    border: 2px solid ${colors.greenDark};
    padding-left: 1.5rem;
    width: 50%;
    max-width: 500px;

    input {
      display: block;
      flex: 1;
      font-size: 1.6rem;
      color: ${colors.textDark};
      border: none;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.2rem;
      height: 4.2rem;
      background: ${colors.white};
      border: 0;
      border-radius: 1rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, colors.white)};
      }
    }
  }
`;

export const EpisodesSortSelectContainer = styled.div`
  display: block;
  position: relative;
  height: 100%;

  select {
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
    padding-right: 3rem;
    color: ${colors.textDark};
    border: 2px solid ${colors.greenDark};
    border-radius: 1rem;

    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }

  select::-ms-expand {
    display: none;
  }

  option {
    display: block;
  }

  img {
    position: absolute;
    top: 0;
    right: 1rem;
    display: block;
    width: 1.2rem;
    height: 100%;
    border-radius: 1rem;
    pointer-events: none;
  }

  @media (min-width: ${dims.tabletBreak}) {
    margin-left: 1.2rem;

    select {
      height: 100%;
    }
  }
`;

export const MobileEpisodeSearchLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  background: ${colors.white};
  border: 2px solid ${colors.greenDark};
  border-radius: 1rem;
  transition: background 0.2s;
  margin-left: 1.2rem;

  &:hover {
    background: ${darken(0.05, colors.white)};
  }

  @media (min-width: ${dims.tabletBreak}) {
    display: none;
  }
`;

export const EpisodesListContainer = styled.div`
  flex: 1;
  margin-top: 1.2rem;
  overflow: auto;
  height: calc(100% - 5.2rem);

  ${EpisodesListStyled} {
    height: 100%;
  }

  @media (min-width: ${dims.tabletBreak}) {
    margin-top: 1.5rem;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      li {
        width: 48%;
        margin-right: 2%;
      }
    }
  }
`;
