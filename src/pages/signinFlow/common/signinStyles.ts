import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { darken } from 'polished';
import { colors, device } from '../../../styles/variables';

export const Container = styled(motion.div)`
  position: relative;
  height: 100%;
  background: ${colors.white};

  @media ${device.tablet} {
    background: linear-gradient(
      180deg,
      ${colors.greenDark} 15%,
      ${colors.greenLight} 100%
    );
  }
`;

export const BackgroundImage = styled.img`
  display: none;

  @media ${device.tablet} {
    position: absolute;
    display: block;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin: auto;
  }
`;

export const FormTitle = styled.h1`
  color: ${colors.textDark};
  font-weight: bold;
  font-family: Nunito;
  font-size: 2.4rem;
  margin-bottom: 1.6rem;
`;

export const FormLabel = styled.label`
  color: ${colors.textDark};
  margin-bottom: 0.8rem;
`;

export const FormTextInput = styled.input.attrs({ type: 'text' })`
  border: 2px solid ${colors.greenDark};
  border-radius: 1rem;
  font-size: 1.6rem;
  padding: 1.2rem 1.4rem;
  margin-bottom: 1.6rem;
  color: ${colors.textDark};
`;

export const FormTextMuted = styled.p`
  font-size: 1.6rem;
  color: ${colors.textMuted};
  margin-bottom: 3.2rem;
`;

export const FormMutedLink = styled(Link)`
  font-size: 1.8rem;
  color: ${colors.textMuted};
  margin-bottom: 1rem;
  font-family: Nunito;
  font-weight: bold;
  text-decoration: underline;
`;

export const FormSubmitButton = styled.button.attrs({ type: 'submit' })`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colors.textLight};
  background: ${colors.greenLight};
  font-family: Nunito;
  font-weight: bold;
  font-size: 1.8rem;
  padding: 1rem 4rem;
  border-radius: 1rem;
  border: 2px solid ${colors.greenDark};
  transition: 0.2s;
  margin-bottom: 0.6rem;

  &:hover {
    background: ${darken(0.05, colors.greenLight)};
  }

  @media ${device.tablet} {
    border-width: 0.2rem;
  }
`;

export const FormLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${colors.textDark};
  font-family: Nunito;
  font-weight: bold;
  padding: 1rem 4rem;
  text-decoration: underline;
`;
