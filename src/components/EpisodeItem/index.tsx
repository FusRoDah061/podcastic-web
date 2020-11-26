import React from 'react';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import { Container, EpisodeContent, EpisodeInfo } from './styles';

import playIcon from '../../assets/play-green-icon.svg';

interface EpisodeItemProps {
  episode: EpisodeDTO;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode }) => {
  return (
    <Container>
      <button type="button">
        <img src={playIcon} alt="Play episode" />
        Play episode
      </button>

      <EpisodeContent>
        <p>{episode.title}</p>
        <EpisodeInfo>
          <p>{episode.duration || '2:21:00'}</p>
          <span />
          <p title={episode.formattedDate}>
            {episode.formattedDateAsTimeAgo || '6 weeks ago'}
          </p>
        </EpisodeInfo>
      </EpisodeContent>
    </Container>
  );
};

export default EpisodeItem;
