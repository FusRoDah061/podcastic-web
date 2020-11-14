import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { darken } from 'polished';
import { colors } from '../../styles/variables';

interface AddPodcastPopupProps {
  isOpen: boolean;
}

export const Container = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 2.5rem 3rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 1.8rem;
      margin-left: 1.6rem;
      font-family: Nunito;

      strong {
        font-weight: bold;
      }
    }
  }
`;

export const AddPodcastButton = styled.button`
  display: flex;
  background: ${colors.white};
  color: ${colors.textDark};
  font-family: Nunito;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 0.9rem;
  padding-right: 2rem;
  border-radius: 1rem;
  border: 0.2rem solid ${colors.greenDark};
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, colors.white)};
  }

  img {
    display: inline-block;
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 2rem;
  }
`;

export const SearchContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 60rem;
  background: ${colors.white};
  margin: 4rem auto 0 auto;
  align-items: center;
  padding: 1rem;
  border-radius: 1.4rem;
  border: 0.2rem solid ${colors.greenDark};

  input {
    border: none;
    color: ${colors.textDark};
    flex: 1;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.2rem;
    height: 4.2rem;
    background: ${colors.greenLight};
    border: 0.2rem solid ${colors.greenDark};
    border-radius: 1rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, colors.greenLight)};
    }
  }
`;

export const PodcastsContainer = styled.section`
  display: grid;
  flex: 1;
  margin-top: 8rem;
  height: calc(100% - 28rem);
  grid-template-columns: 400px auto;
  grid-template-rows: 100%;

  h2 {
    font-size: 1.8rem;
  }

  li {
    list-style: none;
  }
`;

export const RecentlyAddedPodcastsContainer = styled.aside`
  width: 400px;
  min-width: 350px;
  height: 100%;
  background: ${colors.white};
  border-radius: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 3px 20px -2px rgba(0, 0, 0, 0.25);
  color: ${colors.black};

  h2 {
    margin-bottom: 2.4rem;
  }
`;

export const PodcastListContainer = styled.div`
  position: relative;
  overflow: auto;
  height: calc(100% - 4.8rem);
  flex: 1;

  li + li {
    margin-top: 2.4rem;
  }
`;

export const AllPodcastsContainer = styled.article`
  margin-left: 1.5rem;
  padding: 1.5rem;

  h2 {
    margin-bottom: 2.4rem;
  }
`;

export const PodcastGridContainer = styled.div`
  position: relative;
  overflow: auto;
  height: calc(100% - 4.8rem);
  flex: 1;
  scrollbar-color: ${colors.white} transparent;

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.white};
  }

  a {
    color: ${colors.textLight} !important;
  }

  div {
    p::after {
      background: linear-gradient(
        to right,
        transparent,
        ${colors.greenDark} 50%
      ) !important;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
    grid-row-gap: 2.4rem;
  }
`;

export const PodcastCard = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${colors.black};
    padding-right: 0.5rem;
  }

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 1rem;
  }

  div {
    margin-left: 1.3rem;

    p,
    h3 {
      margin: 0;
    }

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
  }
`;

export const AddPodcastPopup = styled(motion.div)<AddPodcastPopupProps>`
  position: absolute;
  right: 0;
  top: 6rem;
  background: ${colors.white};
  padding: 1.8rem 2rem;
  border-radius: 1.5rem;
  color: ${colors.textDark};
  flex-direction: column;

  ${props =>
    props.isOpen &&
    css`
      box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.25);
    `}

  &[data-isOpen='true'] {
  }

  p,
  label {
    width: 100%;
    text-align: start;
    font-size: 1.8rem;
  }

  p {
    font-family: Nunito;
    font-weight: bold;
    margin-bottom: 1.2rem;
  }

  label {
    margin-bottom: 1.5rem;

    input {
      display: block;
      width: 40rem;
      margin-top: 1.2rem;
      border: 0.2rem solid ${colors.greenDark};
      border-radius: 1rem;
      padding: 1.4rem 1.8rem;
      font-size: 1.6rem;
      color: ${colors.textDark};
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
  }

  &::before {
    content: '';
    position: absolute;
    top: -1.5rem;
    right: 2rem;
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1.5rem solid ${colors.white};
  }
`;

export const AddPodcastCloseButton = styled.button`
  display: flex;
  background: ${colors.white};
  color: ${colors.textDark};
  font-family: Nunito;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 0.9rem 2rem;
  border-radius: 1rem;
  border: 0.2rem solid ${colors.greenDark};
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, colors.white)};
  }
`;

export const AddPodcastConfirmButton = styled.button`
  display: flex;
  color: ${colors.textLight};
  background: ${colors.greenLight};
  font-family: Nunito;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 0.9rem 2rem;
  border-radius: 1rem;
  border: 0.2rem solid ${colors.greenDark};
  align-items: center;
  transition: background 0.2s;
  margin-left: 1.6rem;

  &:hover {
    background: ${darken(0.05, colors.greenLight)};
  }
`;
