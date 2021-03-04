import styled from 'styled-components';
import { dims } from '../../styles/variables';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0px;
  overflow: hidden;
  z-index: 10;

  @media (min-width: ${dims.tabletBreak}) {
    padding: 30px;
    padding-right: 0px;
  }
`;
