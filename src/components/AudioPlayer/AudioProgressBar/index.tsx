import React, { ChangeEvent, useCallback, useState } from 'react';
import { AudioProgressBarStyled, AudioProgressBarBackground } from './styles';

interface AudioProgressBarProps {
  min?: number;
  max?: number;
  value?: number;
  onBeginSeek?: () => void;
  onProgressChange?: (value: number) => void;
  onEndSeek?: (value: number) => void;
}

const AudioProgressBar: React.FC<AudioProgressBarProps> = ({
  min = 0,
  max = 100,
  value = 0,
  onBeginSeek,
  onProgressChange,
  onEndSeek,
}) => {
  const [valueState, setValueState] = useState(value);

  const handleMouseDown = useCallback(() => {
    if (onBeginSeek) onBeginSeek();
  }, [onBeginSeek]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValueState(Number(e.target.value));
      if (onProgressChange) onProgressChange(Number(e.target.value));
    },
    [onProgressChange],
  );

  const handleMouseUp = useCallback(() => {
    if (onEndSeek) onEndSeek(valueState);
  }, [onEndSeek, valueState]);

  return (
    <AudioProgressBarStyled>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onMouseDown={handleMouseDown}
        onChange={handleChange}
        onMouseUp={handleMouseUp}
      />

      <AudioProgressBarBackground
        style={{ width: `${(value * 100) / max}%` }}
      />
    </AudioProgressBarStyled>
  );
};

export default AudioProgressBar;
