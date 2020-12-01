import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactPlayer from 'react-player';
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
import { AudioDTO } from '../../dtos/AudioDTO';
import formatDuration from '../../utils/formatDuration';

interface AudioPlayerProps {
  audio: AudioDTO;
  isPaused?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
}

interface PlayerProgress {
  played?: number;
  playedSeconds: number;
  loaded?: number;
  loadedSeconds?: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audio,
  isPaused,
  onPlay,
  onPause,
  onEnd,
}) => {
  const audioRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(!isPaused);
  const [isSeeking, setIsSeeking] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(audio);
  const [audioDurationMs, setAudioDurationMs] = useState(0);
  const [formattedAudioDuration, setFormattedAudioDuration] = useState(
    audioPlaying.duration,
  );
  const [audioCurrentTimeMs, setAudioCurrentTimeMs] = useState(0);
  const [formattedAudioCurrentTime, setFormattedAudioCurrentTime] = useState(
    '00:00:00',
  );

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

  const handleRewind = useCallback(() => {
    let timeToSeekMs = audioCurrentTimeMs - 15000;

    if (timeToSeekMs < 0) timeToSeekMs = 0;

    audioRef.current?.seekTo(timeToSeekMs / 1000);
    updateCurrentTime(timeToSeekMs);
  }, [audioCurrentTimeMs, updateCurrentTime]);

  const handleForward = useCallback(() => {
    let timeToSeekMs = audioCurrentTimeMs + 15000;

    if (timeToSeekMs > audioDurationMs) timeToSeekMs = audioDurationMs;

    audioRef.current?.seekTo(timeToSeekMs / 1000);
    updateCurrentTime(timeToSeekMs);
  }, [audioCurrentTimeMs, audioDurationMs, updateCurrentTime]);

  const handlePlayPause = useCallback(() => {
    if (isPaused) {
      if (onPlay) onPlay();
    } else if (onPause) onPause();
  }, [isPaused, onPlay, onPause]);

  const handleOnPause = useCallback(() => {
    if (onPause) onPause();
  }, [onPause]);

  const handleDurationChange = useCallback((duration: number) => {
    const durationMs = duration * 1000;
    setAudioDurationMs(durationMs);
    setFormattedAudioDuration(formatDuration(durationMs));
  }, []);

  const handleTimeUpdate = useCallback(
    (e: PlayerProgress) => {
      console.log(e);
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

  const handleError = useCallback((e: any) => {
    console.log('onError: ', e);
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
      audioRef.current?.seekTo(value / 1000);
      if (onPlay) onPlay();
    },
    [onPlay],
  );

  return (
    <AudioPlayerStyled>
      <AudioPlayerContent>
        <PlayerButtons>
          <RewindButton type="button" onClick={handleRewind}>
            <img
              src={rewindIcon}
              alt="Rewind 15 seconds"
              aria-label="Rewind 15 seconds"
            />
            15
          </RewindButton>

          <PlayPauseButton isPlaying={!isPaused} onClick={handlePlayPause}>
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            />
          </PlayPauseButton>

          <ForwardButton type="button" onClick={handleForward}>
            <img
              src={forwardIcon}
              alt="Advance 15 seconds"
              aria-label="Advance 15 seconds"
            />
            15
          </ForwardButton>
        </PlayerButtons>

        <AudioInfoContainer>
          <p>{audioPlaying.displayName}</p>
          <AudioProgressInfo>
            <AudioProgressBar
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
              ref={audioRef}
              url={audioPlaying.mediaUrl}
              playing={isPlaying && !isSeeking}
              controls={false}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPause={handleOnPause}
              onSeek={e => console.log('onSeek', e)}
              onProgress={handleTimeUpdate}
              onDuration={handleDurationChange}
              onEnded={handleEnded}
              onError={e => {
                handleError(e);
              }}
            />
          </AudioProgressInfo>
        </AudioInfoContainer>
      </AudioPlayerContent>
    </AudioPlayerStyled>
  );
};

export default AudioPlayer;
