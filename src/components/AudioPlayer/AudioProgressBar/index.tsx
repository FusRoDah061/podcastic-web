import React, { useState } from 'react';
import { AudioProgressBarStyled } from './styles';

const AudioProgressBar: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <AudioProgressBarStyled value={value}>
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={e => setValue(Number(e.target.value))}
      />
    </AudioProgressBarStyled>
  );
};

export default AudioProgressBar;
