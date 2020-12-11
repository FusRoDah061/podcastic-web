import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { AnimatePresence, Variants } from 'framer-motion';
import {
  AudioPlayerStyled,
  AudioPlayerContent,
  PlayerControls,
  DismissButton,
  PlayerButtons,
  RewindButton,
  PlayPauseButton,
  ForwardButton,
  MinimizeButton,
  AudioInfoContainer,
  AudioProgressInfo,
} from './styles';

import dismissIcon from '../../assets/close-black-icon.svg';
import rewindIcon from '../../assets/rewind-green-icon.svg';
import playIcon from '../../assets/play-green-icon.svg';
import pauseIcon from '../../assets/pause-green-icon.svg';
import forwardIcon from '../../assets/forward-green-icon.svg';
import minimizeIcon from '../../assets/chevron-down-black-icon.svg';
import maximizeIcon from '../../assets/chevron-up-black-icon.svg';
import AudioProgressBar from './AudioProgressBar';
import { AudioDTO } from '../../dtos/AudioDTO';
import formatDuration from '../../utils/formatDuration';

interface AudioPlayerProps {
  isOpen: boolean;
  audio?: AudioDTO;
  isPaused?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  onDismiss?: () => void;
}

interface PlayerProgress {
  played?: number;
  playedSeconds: number;
  loaded?: number;
  loadedSeconds?: number;
}

const containerVariants: Variants = {
  show: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
  hide: {
    y: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  isOpen,
  audio,
  isPaused,
  onPlay,
  onPause,
  onEnd,
  onDismiss,
}) => {
  const reactPlayerRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(!isPaused);
  const [isSeeking, setIsSeeking] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(audio);
  const [audioDurationMs, setAudioDurationMs] = useState(0);
  const [formattedAudioDuration, setFormattedAudioDuration] = useState(
    audioPlaying?.duration || 0,
  );
  const [audioCurrentTimeMs, setAudioCurrentTimeMs] = useState(0);
  const [formattedAudioCurrentTime, setFormattedAudioCurrentTime] = useState(
    '00:00:00',
  );
  const [isMinimized, setIsMinimized] = useState(false);

  const updateCurrentTime = useCallback((currentTimeMs: number) => {
    setAudioCurrentTimeMs(currentTimeMs);
    setFormattedAudioCurrentTime(formatDuration(currentTimeMs));
  }, []);

  useEffect(() => {
    setIsPlaying(true);
    updateCurrentTime(0);
    setAudioPlaying(audio);
  }, [audio, updateCurrentTime]);

  useEffect(() => {
    setIsPlaying(!isPaused);
  }, [isPaused]);

  const handleDismissPlayer = useCallback(() => {
    if (onDismiss) onDismiss();
    setIsMinimized(false);
  }, [onDismiss]);

  const handleRewind = useCallback(() => {
    let timeToSeekMs = audioCurrentTimeMs - 15000;

    if (timeToSeekMs < 0) timeToSeekMs = 0;

    reactPlayerRef.current?.seekTo(timeToSeekMs / 1000);
    updateCurrentTime(timeToSeekMs);
  }, [audioCurrentTimeMs, updateCurrentTime]);

  const handleForward = useCallback(() => {
    let timeToSeekMs = audioCurrentTimeMs + 15000;

    if (timeToSeekMs > audioDurationMs) timeToSeekMs = audioDurationMs;

    reactPlayerRef.current?.seekTo(timeToSeekMs / 1000);
    updateCurrentTime(timeToSeekMs);
  }, [audioCurrentTimeMs, audioDurationMs, updateCurrentTime]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleMinimizePlayer = useCallback(() => {
    setIsMinimized(!isMinimized);
  }, [isMinimized]);

  const handleOnPause = useCallback(() => {
    if (onPause) onPause();
  }, [onPause]);

  const handleOnPlay = useCallback(() => {
    if (onPlay) onPlay();
  }, [onPlay]);

  const handleDurationChange = useCallback((duration: number) => {
    const durationMs = duration * 1000;
    setAudioDurationMs(durationMs);
    setFormattedAudioDuration(formatDuration(durationMs));
  }, []);

  const handleTimeUpdate = useCallback(
    (e: PlayerProgress) => {
      const currentTime = e.playedSeconds * 1000;
      updateCurrentTime(currentTime);
    },
    [updateCurrentTime],
  );

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    if (onEnd) {
      onEnd();
    }
  }, [onEnd]);

  const handleError = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleBeginSeek = useCallback(() => {
    setIsSeeking(true);
  }, []);

  const handleProgressChange = useCallback(
    (value: number) => {
      handleTimeUpdate({
        playedSeconds: value / 1000,
      });
    },
    [handleTimeUpdate],
  );

  const handleEndSeek = useCallback(
    (value: number) => {
      setIsSeeking(false);
      reactPlayerRef.current?.seekTo(value / 1000);
      if (onPlay) onPlay();
    },
    [onPlay],
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <AudioPlayerStyled
          animate="show"
          initial="hide"
          exit="hide"
          variants={containerVariants}
          isMinimized={isMinimized}
        >
          <AudioPlayerContent layout>
            <PlayerControls layout>
              <DismissButton layout type="button" onClick={handleDismissPlayer}>
                <img src={dismissIcon} alt="Dismiss player" />
                Dismiss player
              </DismissButton>

              <PlayerButtons layout>
                <RewindButton layout type="button" onClick={handleRewind}>
                  <img
                    src={rewindIcon}
                    alt="Rewind 15 seconds"
                    aria-label="Rewind 15 seconds"
                  />
                  15
                </RewindButton>

                <PlayPauseButton
                  layout
                  isPlaying={isPlaying}
                  onClick={handlePlayPause}
                >
                  <img
                    src={isPlaying ? pauseIcon : playIcon}
                    alt={isPlaying ? 'Pause' : 'Play'}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  />
                </PlayPauseButton>

                <ForwardButton layout type="button" onClick={handleForward}>
                  <img
                    src={forwardIcon}
                    alt="Advance 15 seconds"
                    aria-label="Advance 15 seconds"
                  />
                  15
                </ForwardButton>
              </PlayerButtons>

              <MinimizeButton
                layout
                type="button"
                onClick={handleMinimizePlayer}
              >
                <img
                  src={isMinimized ? maximizeIcon : minimizeIcon}
                  alt={isMinimized ? 'Maximize player' : 'Minimize player'}
                />
                {isMinimized ? 'Maximize player' : 'Minimize player'}
              </MinimizeButton>
            </PlayerControls>

            <AudioInfoContainer layout>
              <p>{audioPlaying?.displayName || ''}</p>
              <AudioProgressInfo layout>
                <AudioProgressBar
                  layout
                  min={0}
                  max={audioDurationMs}
                  value={audioCurrentTimeMs}
                  onBeginSeek={handleBeginSeek}
                  onProgressChange={handleProgressChange}
                  onEndSeek={handleEndSeek}
                />
                <span>
                  {formattedAudioCurrentTime} / {formattedAudioDuration}
                </span>

                <ReactPlayer
                  className="js-react-player"
                  ref={reactPlayerRef}
                  url={audioPlaying?.mediaUrl}
                  playing={isPlaying && !isSeeking}
                  controls={false}
                  onPause={handleOnPause}
                  onPlay={handleOnPlay}
                  onProgress={handleTimeUpdate}
                  onDuration={handleDurationChange}
                  onEnded={handleEnded}
                  onError={handleError}
                />
              </AudioProgressInfo>
            </AudioInfoContainer>
          </AudioPlayerContent>
        </AudioPlayerStyled>
      )}
    </AnimatePresence>
  );
};

export default AudioPlayer;
