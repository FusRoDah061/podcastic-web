import React, { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import { RandomEpisodeStyled } from './styles';
import { useAudioPlayer } from '../../hooks/audioPlayer';

import playIcon from '../../assets/play-green-icon.svg';
import pauseIcon from '../../assets/pause-green-icon.svg';

interface RandomEpisodeProps {
  episode: EpisodeDTO;
  onPlay?: (episode: EpisodeDTO, isPlaying: boolean) => void;
}

const RandomEpisode: React.FC<RandomEpisodeProps> = ({ episode, onPlay }) => {
  const intl = useIntl();
  const player = useAudioPlayer();
  const isPlaying = useMemo(() => {
    return player.isPlaying(episode._id);
  }, [player, episode._id]);

  return (
    <RandomEpisodeStyled isPlaying={isPlaying}>
      <p>{episode.title}</p>
      <button
        type="button"
        onClick={() => {
          if (onPlay) {
            onPlay(episode, isPlaying);
          }
        }}
        title={
          isPlaying
            ? intl.formatMessage({
                id: 'generic.pauseEpisode',
                defaultMessage: 'Pause episode',
              })
            : intl.formatMessage({
                id: 'generic.playEpisode',
                defaultMessage: 'Play episode',
              })
        }
      >
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt={
            isPlaying
              ? intl.formatMessage({
                  id: 'generic.pauseEpisode',
                  defaultMessage: 'Pause episode',
                })
              : intl.formatMessage({
                  id: 'generic.playEpisode',
                  defaultMessage: 'Play episode',
                })
          }
        />
        {isPlaying ? (
          <FormattedMessage
            id="generic.pauseEpisode"
            defaultMessage="Pause episode"
          />
        ) : (
          <FormattedMessage
            id="generic.playEpisode"
            defaultMessage="Play episode"
          />
        )}
      </button>
      <span>{episode.duration}</span>
    </RandomEpisodeStyled>
  );
};

export default RandomEpisode;
