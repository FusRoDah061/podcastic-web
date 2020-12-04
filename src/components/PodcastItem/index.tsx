import { darken } from 'polished';
import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import PodcastDTO from '../../dtos/PodcastDTO';
import { colors } from '../../styles/variables';
import random from '../../utils/random';
import ImageOrLetter from '../ImageOrLetter';
import { PodcastItemStyled, PodcastItemLink, PodcastItemInfo } from './styles';

interface PodcastItemProps {
  podcast: PodcastDTO;
}

interface PodcastItemPlaceholderProps extends IContentLoaderProps {
  displayInfo?: boolean;
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
          <h3 title={podcast.name}>{podcast.name}</h3>
          <p title={podcast.description}>{podcast.description}</p>
        </PodcastItemInfo>
      </PodcastItemLink>
    </PodcastItemStyled>
  );
};

export const PodcastItemPlaceholder: React.FC<PodcastItemPlaceholderProps> = ({
  displayInfo = true,
  ...rest
}) => {
  return (
    <ContentLoader
      speed={2}
      width={displayInfo ? 320 : 90}
      height={90}
      viewBox={`0 0 ${displayInfo ? 320 : 90} 90`}
      backgroundColor={colors.placeholderContent}
      foregroundColor={darken(0.1, colors.placeholderContent)}
      {...rest}
    >
      <rect x="0" y="0" rx="10" ry="10" width="90" height="90" />

      {displayInfo && (
        <>
          <rect
            x="103"
            y="10"
            rx="0"
            ry="0"
            width={random(50, 320)}
            height="20"
          />
          <rect
            x="103"
            y="35"
            rx="0"
            ry="0"
            width={random(50, 320)}
            height="13"
          />
          <rect
            x="103"
            y="52"
            rx="0"
            ry="0"
            width={random(50, 320)}
            height="13"
          />
          <rect
            x="103"
            y="69"
            rx="0"
            ry="0"
            width={random(50, 320)}
            height="13"
          />
        </>
      )}
    </ContentLoader>
  );
};

export default PodcastItem;
