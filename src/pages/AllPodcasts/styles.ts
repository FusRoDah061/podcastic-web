import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, device } from '../../styles/variables';
import { PaginationStyled } from '../../components/Pagination/styles';

export const Container = styled(motion.main)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: ${colors.white};
  padding: 1.8rem 2rem;
  padding-bottom: 0;
  z-index: 3;

  ${PaginationStyled} {
    margin-bottom: 1.5rem;
  }

  @media ${device.tablet} {
    width: 900px;
    margin: auto;
  }
`;

export const AllPodcastsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2.3rem;
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
  flex: 1;
  color: ${colors.textDark};
  overflow: auto;
  padding-bottom: 1.8rem;

  ul {
    width: 100%;

    li {
      color: ${colors.black};
      list-style: none;
    }

    li + li {
      margin-top: 1.5rem;
    }
  }
`;
