import React, { useState } from 'react';
import {
  AudioPlayerStyled,
  AudioPlayerContent,
  PlayerButtons,
  RewindButton,
  PlayPauseButton,
  ForwardButton,
  AudioInfoContainer,
  AudioProgressInfo,
} from './styles';

import rewindIcon from '../../assets/rewind-green-icon.svg';
import playIcon from '../../assets/play-green-icon.svg';
import pauseIcon from '../../assets/pause-green-icon.svg';
import forwardIcon from '../../assets/forward-green-icon.svg';
import AudioProgressBar from './AudioProgressBar';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AudioPlayerStyled>
      <AudioPlayerContent>
        <PlayerButtons>
          <RewindButton type="button">
            <img
              src={rewindIcon}
              alt="Rewind 15 seconds"
              aria-label="Rewind 15 seconds"
            />
            15
          </RewindButton>

          <PlayPauseButton>
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            />
          </PlayPauseButton>

          <ForwardButton type="button">
            <img
              src={forwardIcon}
              alt="Advance 15 seconds"
              aria-label="Advance 15 seconds"
            />
            15
          </ForwardButton>
        </PlayerButtons>

        <AudioInfoContainer>
          <p>VINTAGE CULTURE - Flow Podcast #248</p>
          <AudioProgressInfo>
            <AudioProgressBar />
            <span>00:47:36 / 02:30:22</span>
          </AudioProgressInfo>
        </AudioInfoContainer>
      </AudioPlayerContent>
    </AudioPlayerStyled>
  );
};

export default AudioPlayer;
