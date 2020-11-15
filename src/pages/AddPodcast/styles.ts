import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, dims } from '../../styles/variables';

export const Container = styled(motion.main)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: ${colors.white};
  padding: 1.8rem 2rem;
  z-index: 3;

  @media (min-width: ${dims.tabletBreak}) {
    width: 900px;
    margin: auto;
  }
`;

export const AddPodcastPopupHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  font-size: 1.8rem;
  font-family: Nunito;
  font-weight: bold;
  text-align: start;
  text-decoration: none;
  color: ${colors.textDark};
  background: none;
  border: none;

  img {
    max-height: 1.5rem;
    margin-right: 1.6rem;
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${colors.textDark};

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    flex: 1;
    text-align: start;
    font-size: 1.8rem;
    margin-bottom: 1.8rem;

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
    label {
      width: auto;
      flex: 0;

      input {
        border-width: 0.2rem;
        width: 40rem;
      }
    }
  }
`;

export const AddPodcastConfirmButton = styled.button`
  display: block;
  width: 13rem;
  color: ${colors.textLight};
  background: ${colors.greenLight};
  font-family: Nunito;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 0.9rem 2rem;
  border-radius: 1rem;
  border: 2px solid ${colors.greenDark};
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, colors.greenLight)};
  }

  @media (min-width: ${dims.tabletBreak}) {
    border-width: 0.2rem;
  }
`;
