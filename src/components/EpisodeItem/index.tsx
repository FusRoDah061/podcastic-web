import React from 'react';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import { EpisodeItemStyled, EpisodeContent, EpisodeInfo } from './styles';

import playIcon from '../../assets/play-green-icon.svg';

interface EpisodeItemProps {
  episode: EpisodeDTO;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode }) => {
  return (
    <EpisodeItemStyled>
      <button type="button">
        <img src={playIcon} alt="Play episode" />
        Play episode
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
