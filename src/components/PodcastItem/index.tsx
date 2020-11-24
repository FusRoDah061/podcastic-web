import React, { useCallback, useState } from 'react';
import PodcastDTO from '../../dtos/PodcastDTO';
import { PodcastImage, PodcastItemLink } from './styles';

interface PodcastItemProps {
  podcast: PodcastDTO;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  const [useAlternativeImage, setUseAlternativeImage] = useState(false);

  const handleImageError = useCallback(() => {
    setUseAlternativeImage(true);
  }, [setUseAlternativeImage]);

  return (
    <div>
      <PodcastItemLink to={`/podcast/${podcast._id}`}>
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
      </PodcastItemLink>
    </div>
  );
};

export default PodcastItem;
