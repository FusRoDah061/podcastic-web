import React, { createContext, useCallback, useContext, useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { AudioDTO } from '../dtos/AudioDTO';

interface AudioPlayerContextData {
  play(audio: AudioDTO): void;
  isPlaying(audioId: string): boolean;
  pause(): void;
  dismiss(): void;
}

const AudioPlayerContext = createContext<AudioPlayerContextData>(
  {} as AudioPlayerContextData,
);

const AudioPlayerProvider: React.FC = ({ children }) => {
  const [audioPlaying, setAudioPlaying] = useState<AudioDTO>();
  const [isPaused, setIsPaused] = useState(true);

  const play = useCallback(
    (audio: AudioDTO) => {
      if (!audioPlaying || audio.id !== audioPlaying.id) {
        setAudioPlaying(audio);
        setIsPaused(false);
        document.title = `${audio.displayName} · ${audio.author} - Podcastic`;

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

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const dismiss = useCallback(() => {
    setIsPaused(true);
    setAudioPlaying(undefined);
    document.title = 'Podcastic - Your favorite podcasts, simple and easy.';

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
    <AudioPlayerContext.Provider value={{ play, isPlaying, pause, dismiss }}>
      {children}

      <AudioPlayer
        isOpen={!!audioPlaying}
        audio={audioPlaying}
        isPaused={isPaused}
        onPlay={handleOnPlay}
        onPause={handleOnPause}
        onEnd={handleOnEnd}
        onDismiss={handleOnDismiss}
      />
    </AudioPlayerContext.Provider>
  );
};

function useAudioPlayer(): AudioPlayerContextData {
  const context = useContext(AudioPlayerContext);
  return context;
}

export { AudioPlayerProvider, useAudioPlayer };
