import React from 'react';
import Podcast from '../../dtos/Podcast';
import { Container } from './styles';

interface PodcastItemProps {
  podcast: Podcast;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => (
  <Container>
    <a href="/">
      <img src={podcast.image_url} alt={podcast.name} />
      <div>
        <h3>{podcast.name}</h3>
        <p>{podcast.description}</p>
      </div>
    </a>
  </Container>
);

export default PodcastItem;
