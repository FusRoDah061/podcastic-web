import styled from 'styled-components';
import { colors } from '../../../../styles/variables';

export const FormContainer = styled.main`
  position: absolute;
  width: 550px;
  right: 0px;
  left: 0px;
  margin: auto;
  background: ${colors.white};
  border-radius: 2rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const FormHeader = styled.div`
  padding: 3.6rem 4.6rem;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.6rem 4.6rem;
`;
