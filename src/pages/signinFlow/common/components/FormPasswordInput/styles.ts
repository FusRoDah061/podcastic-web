import styled from 'styled-components';
import { colors } from '../../../../../styles/variables';

export const FormPasswordInputContainer = styled.div`
  display: flex;
  border: 2px solid ${colors.greenDark};
  border-radius: 1rem;
  margin-bottom: 1.6rem;
  padding: 1.2rem 1.4rem;
`;

export const FormPasswordInputStyled = styled.input`
  flex: 1;
  font-size: 1.6rem;
  color: ${colors.textDark};
  border: 0;
`;

export const ToggleVisibileButton = styled.button`
  border: 0;
  background: none;

  img {
    display: block;
    height: 1.8rem;
  }
`;
