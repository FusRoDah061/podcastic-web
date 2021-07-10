import styled from 'styled-components';
import { motion } from 'framer-motion';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import { colors, device, size } from '../../styles/variables';
import { PodcastItemInfo } from '../../components/PodcastItem/styles';

export const Container = styled(motion.main)`
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  padding: 2rem 1.7rem;
  padding-top: 21rem;
  background: linear-gradient(
    180deg,
    ${colors.greenDark} 15%,
    ${colors.greenLight} 100%
  );

  @media ${device.tablet} {
    padding: 2.5rem 3rem;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 2rem;
  left: 1.7rem;
  right: 1.7rem;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media ${device.tablet} {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 1.4rem;
      font-family: Nunito;
      max-width: 16rem;
      margin-top: 0.5rem;

      strong {
        font-weight: bold;
      }
    }
  }

  @media ${device.tablet} {
    div:first-child {
      flex-direction: row;
      align-items: center;

      h1 {
        max-width: 100%;
        font-size: 1.8rem;
        margin-left: 1.6rem;
        margin-top: 0;
      }
    }
  }
`;

export const AddPodcastButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  font-size: 0;
  border: none;
  text-decoration: none;

  svg {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: 1.6rem;
  }

  @media ${device.tablet} {
    background: ${colors.white};
    color: ${colors.textDark};
    font-family: Nunito;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 0.9rem;
    padding-right: 2rem;
    border-radius: 1rem;
    border: 0.2rem solid ${colors.greenDark};
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, colors.white)};
    }

    svg {
      width: 1.7rem;
      height: 1.7rem;

      rect {
        fill: ${colors.greenDark};
      }
    }
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;
  background: ${colors.white};
  align-items: center;
  padding: 0.6rem;
  padding-left: 1rem;
  border-radius: 1.4rem;
  border: 2px solid ${colors.greenDark};
  margin-top: 1.4rem;

  input {
    border: none;
    color: ${colors.textDark};
    flex: 1;
  }

  @media ${device.tablet} {
    width: 60rem;
    padding: 1rem;
    margin: 4rem auto 0 auto;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  background: ${colors.greenLight};
  border: 2px solid ${colors.greenDark};
  border-radius: 1rem;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, colors.greenLight)};
  }
`;

export const PodcastsContainer = styled.section`
  flex: 1;

  h2 {
    font-size: 1.6rem;
  }

  li {
    list-style: none;
  }

  @media ${device.tablet} {
    display: grid;
    margin-top: 8rem;
    height: calc(100% - 28rem);
    grid-template-columns: 400px auto;
    grid-template-rows: 100%;

    h2 {
      font-size: 1.8rem;
    }

    button {
      display: none !important;
    }
  }
`;

export const RecentlyAddedPodcastsContainer = styled.aside`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1.7rem;
    height: 100%;
    width: 9rem;
    background: linear-gradient(90deg, transparent, ${colors.greenDark} 70%);
  }

  button {
    position: absolute;
    top: calc(50% - 1.3rem);
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    background: ${colors.white};
    border-radius: 50%;
    border: none;
    z-index: 1;

    img {
      margin-right: -0.3rem;
    }
  }

  @media ${device.tablet} {
    width: 400px;
    min-width: 350px;
    height: 100%;
    background: ${colors.white};
    border-radius: 2rem;
    padding: 1.5rem;
    box-shadow: 0px 3px 20px -2px rgba(0, 0, 0, 0.25);
    color: ${colors.black};

    &::after {
      content: none;
    }

    h2 {
      margin-bottom: 2.4rem;
    }
  }
`;

export const PodcastListContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0.8rem 0;

  ul {
    display: flex;
    flex-direction: row;

    li:nth-child(n + 4) {
      /* Displays only the first 3 items */
      display: none;
    }

    li {
      ${PodcastItemInfo} {
        display: none;
      }
    }
  }

  li + li {
    margin-left: 3rem;
  }

  @media (min-width: 450px) {
    ul {
      li:nth-child(n + 4) {
        display: block;
      }

      li:nth-child(n + 5) {
        display: none;
      }
    }
  }

  @media (min-width: 600px) {
    ul {
      li:nth-child(n + 5) {
        display: block;
      }

      li:nth-child(n + 6) {
        display: none;
      }
    }
  }

  @media (min-width: 700px) {
    ul {
      li:nth-child(n + 6) {
        display: block;
      }

      li:nth-child(n + 7) {
        display: none;
      }
    }
  }

  @media ${device.tablet} {
    overflow: auto;
    height: calc(100% - 4.8rem);
    flex: 1;
    padding: 0;
    grid-template-columns: 100%;

    ul {
      flex-direction: column;

      li {
        display: block !important;

        ${PodcastItemInfo} {
          display: block;
        }
      }
    }

    li + li {
      margin-top: 2.4rem;
      margin-left: 0;
    }
  }

  /* @media (max-width: ${size.tablet}) {
    ul {
      li {
        a > div {
          display: none;
        }
      }
    }
  } */
`;

export const AllPodcastsContainer = styled.article`
  position: relative;
  margin-top: 4.2rem;

  @media ${device.tablet} {
    margin-left: 1.5rem;
    margin-top: 0;
    padding: 1.5rem;

    h2 {
      margin-bottom: 2.4rem;
    }
  }
`;

export const ViewAllPodcastsLink = styled(Link)`
  display: flex;
  width: 9rem;
  height: 9rem;
  border: none;
  background: none;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: ${colors.textLight};
  text-decoration: none;

  img {
    max-height: 1.6rem;
    margin-left: 0.9rem;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const PodcastGridContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0.8rem 0;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 9rem);
    grid-template-rows: repeat(2, 9rem);
    grid-column-gap: 3rem;
    grid-row-gap: 2.4rem;

    li:nth-child(n + 6) {
      /* Displays only the first 5 items */
      display: none;
    }

    li {
      ${PodcastItemInfo} {
        display: none;
      }
    }
  }

  @media (min-width: 450px) {
    ul {
      grid-template-columns: repeat(4, 9rem);

      li:nth-child(n + 6) {
        display: block;
      }

      li:nth-child(n + 8) {
        display: none;
      }
    }
  }

  @media (min-width: 600px) {
    ul {
      grid-template-columns: repeat(5, 9rem);

      li:nth-child(n + 8) {
        display: block;
      }

      li:nth-child(n + 10) {
        display: none;
      }
    }
  }

  @media (min-width: 700px) {
    ul {
      grid-template-columns: repeat(6, 9rem);

      li:nth-child(n + 10) {
        display: block;
      }

      li:nth-child(n + 12) {
        display: none;
      }
    }
  }

  @media ${device.tablet} {
    overflow: auto;
    height: calc(100% - 4.8rem);
    flex: 1;
    padding: 0;
    scrollbar-color: ${colors.white} transparent;
    grid-template-columns: 100%;

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

      li {
        display: block !important;

        ${PodcastItemInfo} {
          display: block;
        }
      }
    }
  }

  /* @media (max-width: ${size.tablet}) {
    ul {
      li {
        a > div {
          display: none;
        }
      }
    }
  } */
`;

export const AllRecentPodcastsContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  height: calc(100% - 11rem);
  width: 100%;
  flex-direction: column;
  background: ${colors.white};
  padding: 0.6rem 1.6rem 0;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  z-index: 2;

  & > button {
    background: ${colors.white};
    margin: auto;
    margin-top: 0;
    margin-bottom: 1.2rem;
    border: none;

    img {
      max-width: 5rem;
    }
  }

  h2 {
    margin-bottom: 2rem;
    color: ${colors.textDark};
    font-size: 1.8rem;
  }
`;

export const AllRecentListContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: auto;
  padding: 0.8rem 0;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 9rem);
    grid-column-gap: 3rem;

    li {
      margin-bottom: 2.4rem;
      list-style: none;

      ${PodcastItemInfo} {
        display: none;
      }
    }
  }

  @media (min-width: 450px) {
    ul {
      grid-template-columns: repeat(4, 9rem);
    }
  }

  @media (min-width: 600px) {
    ul {
      grid-template-columns: repeat(5, 9rem);
    }
  }

  @media (min-width: 700px) {
    ul {
      grid-template-columns: repeat(6, 9rem);
    }
  }
`;
