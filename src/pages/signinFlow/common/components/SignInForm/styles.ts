import styled from 'styled-components';
import { colors, device } from '../../../../../styles/variables';

export const FormContainer = styled.main`
  background: ${colors.white};

  @media ${device.tablet} {
    position: absolute;
    width: 550px;
    right: 0px;
    left: 0px;
    margin: auto;
    border-radius: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const FormHeader = styled.div`
  padding: 3.6rem 4.6rem;
  color: ${colors.textDark};

  img {
    width: 100%;
  }

  h1 {
    font-size: 2.1rem;
    font-family: Nunito;

    strong {
      font-weight: bold;
    }
  }

  @media ${device.tablet} {
    img {
      width: auto;
    }
  }
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.6rem 4.6rem;
`;
