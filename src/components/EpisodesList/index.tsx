import React from 'react';
import PodcastDTO from '../../dtos/PodcastDTO';
import EpisodeItem from '../EpisodeItem';
import { EpisodesListStyled } from './styles';

interface EpisodesListProps {
  podcast: PodcastDTO;
}

const EpisodesList: React.FC<EpisodesListProps> = ({ podcast }) => {
  return (
    <EpisodesListStyled>
      <ul>
        {podcast.episodes.map(episode => (
          <li key={episode._id}>
            <EpisodeItem episode={episode} />
          </li>
        ))}
      </ul>
    </EpisodesListStyled>
  );
};

export default EpisodesList;
