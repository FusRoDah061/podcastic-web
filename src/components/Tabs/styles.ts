import styled, { css } from 'styled-components';
import { colors } from '../../styles/variables';

interface TabContainerProps {
  active: boolean;
}

export const TabsStyled = styled.div``;

export const TabsContentStyled = styled.div``;

export const TabsNavigationStyled = styled.nav`
  display: flex;
  height: 5.2rem;
  width: 100%;
`;

export const TabButtonContainer = styled.div<TabContainerProps>`
  flex: 1;
  height: 100%;

  &:first-child {
    button {
      border-top-left-radius: 1rem;
    }
  }

  &:last-child {
    button {
      border-top-right-radius: 1rem;
    }
  }

  button {
    display: block;
    width: 100%;
    height: 100%;
    background: ${colors.white};
    border: 1px solid ${colors.greenDark};
    border-bottom: 0;
    color: ${colors.textDark};
    font-size: 1.6rem;
  }

  ${props =>
    props.active &&
    css`
      button {
        background: ${colors.greenDark};
        color: ${colors.textLight};
        font-size: 1.8rem;
        font-weight: bold;
      }
    `}
`;
