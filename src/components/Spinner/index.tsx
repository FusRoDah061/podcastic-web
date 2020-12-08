import React from 'react';
import { SpinnerRing, SpinnerStyled } from './styles';

interface SpinnerProps {
  color?: string;
  size?: number;
  thickness?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
  color = 'white',
  size = 20,
  thickness = 2,
}) => {
  return (
    <SpinnerStyled style={{ width: size, height: size }}>
      <SpinnerRing
        style={{
          borderWidth: thickness,
          borderColor: color,
          borderRightColor: 'transparent',
        }}
      />
    </SpinnerStyled>
  );
};

export default Spinner;
