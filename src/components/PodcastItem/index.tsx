import React, { useCallback, useState } from 'react';
import Podcast from '../../dtos/Podcast';
import { Container, PodcastImage } from './styles';

interface PodcastItemProps {
  podcast: Podcast;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  const [useAlternativeImage, setUseAlternativeImage] = useState(false);

  const handleImageError = useCallback(() => {
    setUseAlternativeImage(true);
  }, [setUseAlternativeImage]);

  return (
    <Container>
      <a href="/">
        <PodcastImage>
          {useAlternativeImage ? (
            <span>{podcast.name.charAt(0).toLocaleUpperCase()}</span>
          ) : (
            <img
              src={podcast.imageUrl}
              alt={podcast.name}
              onError={handleImageError}
            />
          )}
        </PodcastImage>
        <div>
          <h3>{podcast.name}</h3>
          <p>{podcast.description}</p>
        </div>
      </a>
    </Container>
  );
};

export default PodcastItem;
