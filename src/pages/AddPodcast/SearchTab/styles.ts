import { darken } from 'polished';
import styled from 'styled-components';
import { SpinnerStyled } from '../../../components/Spinner/styles';
import { colors, device } from '../../../styles/variables';

export const SearchTabStyled = styled.div`
  padding: 0rem 2rem;

  & > ${SpinnerStyled} {
    margin-top: 2.4rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${device.tablet} {
    padding: 0;
  }
`;

export const SearchPodcastForm = styled.form`
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

    span {
      margin-top: 1.5rem;
      color: ${colors.textMuted};
      font-size: 1.6rem;
    }
  }

  & > span {
    width: 100%;
    margin-top: 1.2rem;
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
  }
`;

export const PodcastSearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1rem;
  border: 2px solid ${colors.greenDark};
  padding-left: 1.5rem;
  margin-top: 1.2rem;

  input {
    display: block;
    flex: 1;
    font-size: 1.6rem;
    color: ${colors.textDark};
    border: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.6rem;
    height: 4.6rem;
    background: ${colors.white};
    border: 0;
    border-radius: 1rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, colors.white)};
    }
  }
`;

export const SearchResultList = styled.ul`
  width: 100%;
  padding: 0;
  margin-top: 2.4rem;
`;
