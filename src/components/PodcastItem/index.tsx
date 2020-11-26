import React from 'react';
import PodcastDTO from '../../dtos/PodcastDTO';
import ImageOrLetter from '../ImageOrLetter';
import { PodcastItemStyled, PodcastItemLink, PodcastItemInfo } from './styles';

interface PodcastItemProps {
  podcast: PodcastDTO;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  return (
    <PodcastItemStyled>
      <PodcastItemLink to={`/podcast/${podcast._id}`}>
        <ImageOrLetter
          src={podcast.imageUrl}
          alt={podcast.name}
          fallbackLetter={podcast.name.charAt(0).toLocaleUpperCase()}
        />

        <PodcastItemInfo>
          <h3>{podcast.name}</h3>
          <p>{podcast.description}</p>
        </PodcastItemInfo>
      </PodcastItemLink>
    </PodcastItemStyled>
  );
};

export default PodcastItem;
