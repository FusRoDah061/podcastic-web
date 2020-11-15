import styled from 'styled-components';
import { colors, dims } from '../../styles/variables';

export const Container = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${colors.black};

    div {
      display: block;
      margin-left: 1.3rem;

      h3 {
        font-family: Nunito;
        font-weight: bold;
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
      }

      p {
        display: block;
        position: relative;
        font-size: 1.3rem;
        line-height: 1.6rem;
        height: 4.8rem;
        overflow: hidden;
      }
    }
  }

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 1rem;
  }

  @media (min-width: ${dims.tabletBreak}) {
    a {
      color: ${colors.black};
      padding-right: 0.5rem;

      div {
        p,
        h3 {
          margin: 0;
        }
      }
    }
  }
`;
