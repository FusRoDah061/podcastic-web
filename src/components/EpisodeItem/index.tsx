import React, { useMemo } from 'react';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import { EpisodeItemStyled, EpisodeContent, EpisodeInfo } from './styles';
import { useAudioPlayer } from '../../hooks/audioPlayer';

import playIcon from '../../assets/play-green-icon.svg';
import pauseIcon from '../../assets/pause-green-icon.svg';

interface EpisodeItemProps {
  episode: EpisodeDTO;
  onPlay?: (episode: EpisodeDTO, isPlaying: boolean) => void;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode, onPlay }) => {
  const player = useAudioPlayer();
  const isPlaying = useMemo(() => {
    return player.isPlaying(episode._id);
  }, [player, episode._id]);

  return (
    <EpisodeItemStyled isPlaying={isPlaying}>
      <button
        type="button"
        onClick={() => {
          if (onPlay) {
            onPlay(episode, isPlaying);
          }
        }}
      >
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? 'Pause episode' : 'Play episode'}
        />
        {isPlaying ? 'Pause episode' : 'Play episode'}
      </button>

      <EpisodeContent>
        <p title={episode.title}>{episode.title}</p>
        <EpisodeInfo>
          <p>{episode.duration}</p>
          <span />
          <p title={episode.formattedDate}>{episode.formattedDateAsTimeAgo}</p>
        </EpisodeInfo>
      </EpisodeContent>
    </EpisodeItemStyled>
  );
};

export default EpisodeItem;
