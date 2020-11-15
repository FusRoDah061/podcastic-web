import { motion } from 'framer-motion';
import { darken, transparentize } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, dims } from '../../styles/variables';

export const Container = styled(motion.main)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${colors.greenDark};
  padding: 1.5rem 0;

  @media (min-width: ${dims.tabletBreak}) {
    padding: 3rem 0;
  }
`;

export const HeaderContent = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  input {
    flex: 1;
    margin: 0 1.5rem;
    text-align: center;
    border: none;
    background: transparent;
    padding: 0.5rem;
    border-bottom: 2px solid ${colors.greenDark};
    transition: border 0.2s;

    &:focus {
      border-color: ${colors.greenLight};
    }

    &::placeholder {
      color: ${transparentize(0.3, colors.textLight)};
    }
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
    width: 900px;
    margin: auto;
  }
`;

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
`;

export const PageContentContainer = styled.section`
  height: calc(100% - 7.2rem);
  padding: 1.6rem;
  padding-bottom: 0;

  @media (min-width: ${dims.tabletBreak}) {
    height: calc(100% - 10.2rem);
  }
`;

export const PageContent = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;

  h2 {
    color: ${colors.textDark};
    font-size: 1.6rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: ${dims.tabletBreak}) {
    width: 900px;
    margin: auto;
  }
`;

export const PodcastsList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-bottom: 1.6rem;

  ul {
    li + li {
      margin-top: 1.5rem;
    }
  }
`;
