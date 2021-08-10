import styled from 'styled-components';
import { darken } from 'polished';
import { colors, device } from '../../../styles/variables';
import { SpinnerStyled } from '../../../components/Spinner/styles';

export const AddFeedTabStyled = styled.div`
  padding: 0rem 2rem;

  @media ${device.tablet} {
    padding: 0;
  }
`;

export const AddPodcastForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: ${colors.textDark};

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    flex: 1;
    text-align: start;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;

    span {
      margin-top: 1.5rem;
      color: ${colors.textMuted};
      font-size: 1.6rem;
    }

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

  & > span {
    width: 100%;
    color: ${colors.error};
    text-align: left;
  }

  @media ${device.tablet} {
    label {
      width: 100%;
      flex: 0;

      input {
        border-width: 0.2rem;
      }
    }

    button {
      margin-top: 4rem;
      align-self: flex-start;
    }
  }
`;

export const AddPodcastConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colors.textLight};
  background: ${colors.greenLight};
  font-family: Nunito;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 1rem 4rem;
  border-radius: 1rem;
  border: 2px solid ${colors.greenDark};
  transition: 0.2s;
  margin-top: 8rem;

  &:hover {
    background: ${darken(0.05, colors.greenLight)};
  }

  ${SpinnerStyled} {
    margin-right: 0.9rem;
  }

  @media ${device.tablet} {
    border-width: 0.2rem;
  }
`;
