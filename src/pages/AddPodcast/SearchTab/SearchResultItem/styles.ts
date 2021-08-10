import styled from 'styled-components';
import { colors } from '../../../../styles/variables';

export const SearchResultItemContainer = styled.li`
  display: grid;
  list-style: none;
  grid-template-columns: 5rem 1fr 4rem;
  align-items: center;
  margin-bottom: 1.6rem;

  img {
    display: block;
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
  }

  p {
    font-family: Nunito;
    font-size: 1.6rem;
    font-weight: bold;
    color: ${colors.textDark};
    margin-left: 1.2rem;
  }
`;

export const SearchResultButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;

  button {
    display: flex;
    background: none;
    border: 0;
    align-items: center;
    justify-content: center;

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
