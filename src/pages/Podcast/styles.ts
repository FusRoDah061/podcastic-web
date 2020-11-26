import { motion } from 'framer-motion';
import { darken } from 'polished';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

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

  & > img {
    display: none;
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
`;

export const PageContent = styled.section`
  height: calc(100% - 6rem);
  padding: 0rem 1.7rem;
`;

export const HasPodcastPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -8rem;
  max-height: 100%;
`;

export const PodcastInfo = styled.aside``;

export const PodcastInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2rem;

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 1rem;
  }

  div {
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

  &:hover {
    background: ${darken(0.03, colors.greenLight)};
  }
`;

export const EpisodesContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  overflow: hidden;
`;

export const EpisodesContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    color: ${colors.textDark};
    font-size: 1.6rem;
  }
`;

export const EpisodesFiltersForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.2rem;
    height: 4.2rem;
    background: ${colors.white};
    border: 2px solid ${colors.greenDark};
    border-radius: 1rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, colors.white)};
    }
  }
`;

export const EpisodeSearchInputContainer = styled.div`
  display: none;
  /* display: flex; */
  flex-direction: row;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid ${colors.greenDark};
  padding: 0.5rem 1.5rem;
  padding-right: 0.5rem;

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
`;

export const EpisodesList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 1.2rem;
  height: calc(100% - 5.2rem);

  ul {
    li {
      margin-bottom: 1.5rem;
    }
  }
`;
