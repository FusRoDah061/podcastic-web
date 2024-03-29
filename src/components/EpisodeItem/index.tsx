import React, { useMemo } from 'react';
import { parseISO } from 'date-fns';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { darken } from 'polished';
import { FormattedMessage, useIntl } from 'react-intl';
import SVG from 'react-inlinesvg';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import {
  EpisodeItemStyled,
  EpisodeUnavailableOverlay,
  EpisodeContent,
  EpisodeInfo,
} from './styles';
import { useAudioPlayer } from '../../hooks/audioPlayer';
import formatDate from '../../utils/formatDate';
import formatDateAsTimeAgo from '../../utils/formatDateAsTimeAgo';
import { colors } from '../../styles/variables';
import random from '../../utils/random';

import playIcon from '../../assets/play-black-icon.svg';
import pauseIcon from '../../assets/pause-black-icon.svg';
import warningIcon from '../../assets/warning_icon_yellow.svg';

interface EpisodeItemProps {
  episode: EpisodeDTO;
  onPlay?: (episode: EpisodeDTO, isPlaying: boolean) => void;
}

interface EpisodeItemPlaceholderProps extends IContentLoaderProps {
  maxWidth?: number;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode, onPlay }) => {
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
    <EpisodeItemStyled>
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
        <SVG
          src={isPlaying ? pauseIcon : playIcon}
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

      <EpisodeContent>
        <p title={episode.title}>{episode.title}</p>
        <EpisodeInfo>
          <p>{episode.duration || '00:00:00'}</p>
          <span />
          <p title={dates.formattedDate}>{dates.formattedDateAsTimeAgo}</p>
          {!episode.existsOnFeed && (
            <>
              <span />
              <EpisodeUnavailableOverlay>
                <img
                  src={warningIcon}
                  alt={intl.formatMessage({
                    id: 'generic.warning',
                    defaultMessage: 'Warning',
                  })}
                />
                <p>
                  <FormattedMessage
                    id="episodeItem.episodeNotAvailable"
                    defaultMessage="This episode is not available on the feed anymore."
                  />
                </p>
              </EpisodeUnavailableOverlay>
            </>
          )}
        </EpisodeInfo>
      </EpisodeContent>
    </EpisodeItemStyled>
  );
};

export const EpisodeItemPlaceholder: React.FC<EpisodeItemPlaceholderProps> = ({
  maxWidth,
  ...rest
}) => {
  const width = useMemo(() => {
    return maxWidth || 320;
  }, [maxWidth]);

  return (
    <ContentLoader
      speed={1}
      width={width}
      height={45}
      viewBox={`0 0 ${width} 45`}
      backgroundColor={colors.placeholderContent}
      foregroundColor={darken(0.1, colors.placeholderContent)}
      {...rest}
    >
      <circle cx="22" cy="22" r="22" />
      <rect x="60" y="6" rx="0" ry="0" width={random(50, width)} height="16" />
      <rect x="61" y="25" rx="0" ry="0" width="57" height="14" />
      <rect x="146" y="25" rx="0" ry="0" width="57" height="14" />
      <circle cx="132" cy="32" r="4" />
    </ContentLoader>
  );
};

export default EpisodeItem;
