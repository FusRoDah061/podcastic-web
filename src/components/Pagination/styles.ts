import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageButton = styled.button`
  border: 0;
  background: none;
  width: 3.6rem;
  height: 3.6rem;
  font-size: 1.4rem;
  color: ${colors.textDark};
  font-weight: bold;
  margin: 0 0.3rem;
`;

export const CurrentPage = styled.span`
  display: flex;
  width: 3.6rem;
  height: 3.6rem;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  background: ${colors.greenDark};
  color: ${colors.textLight};
  border-radius: 5px;
  font-weight: bold;
  margin: 0 0.3rem;
`;

export const Ellipsis = styled.span`
  align-self: center;
  color: ${colors.textDark};
`;
