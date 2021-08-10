import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, device } from '../../styles/variables';
import {
  TabsStyled,
  TabsContentStyled,
  TabsNavigationStyled,
} from '../../components/Tabs/styles';
import { SearchTabStyled } from './SearchTab/styles';

export const Container = styled(motion.main)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: ${colors.white};
  z-index: 3;

  @media ${device.tablet} {
    width: 900px;
    margin: auto;
  }
`;

export const AddPodcastPopupHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.8rem 2rem 0rem 2rem;

  @media ${device.tablet} {
    padding: 0;
    padding-top: 1.8rem;
  }
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
  padding-top: 2.6rem;
  height: 100%;

  ${TabsStyled} {
    display: grid;
    height: 100%;
    grid-template-rows: 1fr 5.2rem;

    ${TabsContentStyled} {
      overflow: auto;
      margin-bottom: 4rem;
    }

    ${TabsNavigationStyled} {
      position: fixed;
      bottom: 0;
    }
  }
`;

export const FlattenTabsContainer = styled.div`
  display: grid;
  grid-template-columns: 425px 425px;
  column-gap: 50px;

  label input[type='text'] {
    width: 100%;
  }

  ${SearchTabStyled} {
    padding: 0;
  }
`;
