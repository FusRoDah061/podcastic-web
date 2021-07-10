import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import AudioPlayer from '../components/AudioPlayer';
import { AudioDTO } from '../dtos/AudioDTO';
import { PodcastTheme } from '../styles/globals';

interface AudioPlayerContextData {
  play(audio: AudioDTO): void;
  isPlaying(audioId: string): boolean;
  getAudio(): AudioDTO | undefined;
  pause(): void;
  dismiss(): void;
}

const AudioPlayerContext = createContext<AudioPlayerContextData>(
  {} as AudioPlayerContextData,
);

const AudioPlayerProvider: React.FC = ({ children }) => {
  const [audioPlaying, setAudioPlaying] = useState<AudioDTO>();
  const [isPaused, setIsPaused] = useState(true);
  const [theme, setTheme] = useState<PodcastTheme>();

  const play = useCallback(
    (audio: AudioDTO) => {
      if (!audioPlaying || audio.id !== audioPlaying.id) {
        setAudioPlaying(audio);
        setIsPaused(false);
        setTheme(audio.theme);

        if (navigator.mediaSession) {
          const metadata: MediaMetadataInit = {
            title: audio.displayName,
            artist: audio.author,
            album: audio.displayName,
            artwork: audio.artworkUrl
              ? [
                  {
                    src: audio.artworkUrl,
                    sizes: '250x250',
                  },
                ]
              : [],
          };

          navigator.mediaSession.metadata = new MediaMetadata(metadata);
        }
      } else if (isPaused) {
        setIsPaused(false);
      }
    },
    [audioPlaying, isPaused],
  );

  const isPlaying = useCallback(
    (audioId: string) => {
      return !!audioPlaying && audioPlaying.id === audioId && !isPaused;
    },
    [audioPlaying, isPaused],
  );

  const getAudio = useCallback(() => {
    return audioPlaying;
  }, [audioPlaying]);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const dismiss = useCallback(() => {
    setIsPaused(true);
    setAudioPlaying(undefined);

    if (navigator.mediaSession) {
      navigator.mediaSession.metadata = new MediaMetadata();
    }
  }, []);

  const handleOnPlay = useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleOnPause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleOnEnd = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleOnDismiss = useCallback(() => {
    dismiss();
  }, [dismiss]);

  return (
    <AudioPlayerContext.Provider
      value={{ play, isPlaying, getAudio, pause, dismiss }}
    >
      {children}

      <ThemeProvider theme={theme ?? {}}>
        <AudioPlayer
          isOpen={!!audioPlaying}
          audio={audioPlaying}
          isPaused={isPaused}
          onPlay={handleOnPlay}
          onPause={handleOnPause}
          onEnd={handleOnEnd}
          onDismiss={handleOnDismiss}
        />
      </ThemeProvider>
    </AudioPlayerContext.Provider>
  );
};

function useAudioPlayer(): AudioPlayerContextData {
  const context = useContext(AudioPlayerContext);
  return context;
}

export { AudioPlayerProvider, useAudioPlayer };
