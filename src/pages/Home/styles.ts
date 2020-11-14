import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { darken } from 'polished';
import { colors, dims } from '../../styles/variables';

interface AddPodcastPopupProps {
  isOpen: boolean;
}

export const Container = styled.main`
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  padding: 2rem 1.7rem;
  padding-top: 21rem;

  @media (min-width: ${dims.tabletBreak}) {
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

  @media (min-width: ${dims.tabletBreak}) {
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

  @media (min-width: ${dims.tabletBreak}) {
    div:first-child {
      flex-direction: row;
      align-items: center;

      h1 {
        max-width: 100%;
        font-size: 1.8rem;
        margin-left: 1.6rem;
      }
    }
  }
`;

export const AddPodcastButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  font-size: 0;
  border: none;

  picture {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: 1.6rem;

    img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }

  @media (min-width: ${dims.tabletBreak}) {
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

    picture {
      width: 1.7rem;
      height: 1.7rem;
    }
  }
`;

export const AddPodcastPopup = styled(motion.div)<AddPodcastPopupProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.white};
  padding: 1.8rem 2rem;
  color: ${colors.textDark};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;

  label {
    text-align: start;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;

    input {
      display: block;
      width: 100%;
      margin-top: 1.2rem;
      border: 2px solid ${colors.greenDark};
      border-radius: 1rem;
      padding: 1.4rem 1.8rem;
      font-size: 1.6rem;
      color: ${colors.textDark};
    }
  }

  @media (min-width: ${dims.tabletBreak}) {
    position: absolute;
    right: 0;
    top: 6rem;
    left: unset;
    bottom: unset;
    border-radius: 1.5rem;
    width: auto;
    height: auto;

    ${props =>
      props.isOpen &&
      css`
        box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.25);
      `}

    label {
      width: 100%;

      input {
        border-width: 0.2rem;
        width: 40rem;
      }
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
  }
`;

export const AddPodcastPopupHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    background: none;
    border: none;

    img {
      max-height: 1.3rem;
    }
  }

  p {
    font-size: 1.8rem;
    font-family: Nunito;
    font-weight: bold;
    text-align: start;
    flex: 1;
  }

  @media (min-width: ${dims.tabletBreak}) {
    button {
      display: none;
    }

    p {
      margin-bottom: 1.2rem;
    }
  }
`;

export const AddPodcastPopupButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > button:first-child {
    display: none;
  }

  @media (min-width: ${dims.tabletBreak}) {
    justify-content: flex-end;
    margin-top: 1.5rem;

    & > button:first-child {
      display: block;
    }
  }
`;

export const AddPodcastCloseButton = styled.button`
  display: none;

  @media (min-width: ${dims.tabletBreak}) {
    display: block;
    background: ${colors.white};
    color: ${colors.textDark};
    font-family: Nunito;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 0.9rem 2rem;
    border-radius: 1rem;
    border: 0.2rem solid ${colors.greenDark};
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, colors.white)};
    }
  }
`;

export const AddPodcastConfirmButton = styled.button`
  display: block;
  color: ${colors.textLight};
  background: ${colors.greenLight};
  font-family: Nunito;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 0.9rem 2rem;
  border-radius: 1rem;
  border: 2px solid ${colors.greenDark};

  @media (min-width: ${dims.tabletBreak}) {
    transition: background 0.2s;
    margin-left: 1.6rem;
    border-width: 0.2rem;

    &:hover {
      background: ${darken(0.05, colors.greenLight)};
    }
  }
`;

export const SearchContainer = styled(motion.div)`
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

  button {
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
  }

  @media (min-width: ${dims.tabletBreak}) {
    width: 60rem;
    padding: 1rem;
    margin: 4rem auto 0 auto;
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

  @media (min-width: ${dims.tabletBreak}) {
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
    left: calc(100vw - 8.3rem);
    height: 100%;
    width: 9rem;
    background: linear-gradient(90deg, transparent, ${colors.greenDark} 70%);
  }

  button {
    position: absolute;
    top: calc(50% - 1.3rem);
    left: calc(100vw - 8.3rem);
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

  @media (min-width: ${dims.tabletBreak}) {
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

  @media (min-width: ${dims.tabletBreak}) {
    overflow: auto;
    height: calc(100% - 4.8rem);
    flex: 1;
    padding: 0;

    ul {
      flex-direction: column;

      li {
        display: block !important;
      }
    }

    li + li {
      margin-top: 2.4rem;
      margin-left: 0;
    }
  }
`;

export const PodcastCard = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 1rem;
  }

  div {
    display: none;
  }

  @media (min-width: ${dims.tabletBreak}) {
    a {
      color: ${colors.black};
      padding-right: 0.5rem;
    }

    div {
      display: block;
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
  }
`;

export const AllPodcastsContainer = styled.article`
  position: relative;
  margin-top: 4.2rem;

  button {
    display: flex;
    width: 9rem;
    height: 9rem;
    border: none;
    background: none;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    line-height: 1.6rem;

    img {
      max-height: 1.6rem;
      margin-left: 0.9rem;
    }
  }

  @media (min-width: ${dims.tabletBreak}) {
    margin-left: 1.5rem;
    margin-top: 0;
    padding: 1.5rem;

    h2 {
      margin-bottom: 2.4rem;
    }

    button {
      display: none;
    }
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

  @media (min-width: ${dims.tabletBreak}) {
    overflow: auto;
    height: calc(100% - 4.8rem);
    flex: 1;
    padding: 0;
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

      li {
        display: block !important;
      }
    }
  }
`;
