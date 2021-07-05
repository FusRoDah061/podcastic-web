import React, { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { parseISO } from 'date-fns';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import { RandomEpisodeStyled, EpisodeInfo } from './styles';
import { useAudioPlayer } from '../../hooks/audioPlayer';

import playIcon from '../../assets/play-black-icon.svg';
import pauseIcon from '../../assets/pause-black-icon.svg';
import formatDate from '../../utils/formatDate';
import formatDateAsTimeAgo from '../../utils/formatDateAsTimeAgo';

interface RandomEpisodeProps {
  episode: EpisodeDTO;
  onPlay?: (episode: EpisodeDTO, isPlaying: boolean) => void;
}

const RandomEpisode: React.FC<RandomEpisodeProps> = ({ episode, onPlay }) => {
  const intl = useIntl();
  const player = useAudioPlayer();
  const isPlaying = useMemo(() => {
    return player.isPlaying(episode.id);
  }, [player, episode.id]);

  const dates = useMemo(() => {
    const parsedDate = parseISO(episode.date.toString());
    return {
      formattedDate: formatDate(parsedDate),
      formattedDateAsTimeAgo: formatDateAsTimeAgo(parsedDate),
    };
  }, [episode.date]);

  return (
    <RandomEpisodeStyled>
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
      <EpisodeInfo>
        <p>{episode.duration}</p>
        <span />
        <p title={dates.formattedDate}>{dates.formattedDateAsTimeAgo}</p>
      </EpisodeInfo>
    </RandomEpisodeStyled>
  );
};

export default RandomEpisode;
