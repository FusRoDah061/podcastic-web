import { darken } from 'polished';
import React, { useMemo } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import PodcastDTO from '../../dtos/PodcastDTO';
import { colors } from '../../styles/variables';
import random from '../../utils/random';
import ImageOrLetter from '../ImageOrLetter';
import {
  PodcastItemStyled,
  PodcastItemLink,
  PodcastItemInfo,
  PodcastItemPlaceholderContainer,
} from './styles';

interface PodcastItemProps {
  podcast: PodcastDTO;
}

interface PodcastItemPlaceholderProps extends IContentLoaderProps {
  displayInfo?: boolean;
  maxWidth?: number;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  return (
    <PodcastItemStyled>
      <PodcastItemLink to={`/podcast/${podcast.id}`}>
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
  maxWidth,
  ...rest
}) => {
  const width = useMemo(() => {
    return maxWidth || 320;
  }, [maxWidth]);

  return (
    <PodcastItemPlaceholderContainer>
      <ContentLoader
        speed={1}
        width={displayInfo ? width : '9rem'}
        height="9rem"
        viewBox={`0 0 ${displayInfo ? width : '9rem'} 9rem`}
        backgroundColor={colors.placeholderContent}
        foregroundColor={darken(0.1, colors.placeholderContent)}
        {...rest}
      >
        <rect x="0" y="0" rx="10" ry="10" width="9rem" height="9rem" />

        {displayInfo && (
          <>
            <rect
              x="103"
              y="8"
              rx="0"
              ry="0"
              width={random(50, width)}
              height="1.6rem"
            />
            <rect
              x="103"
              y="33"
              rx="0"
              ry="0"
              width={random(50, width)}
              height="1.3rem"
            />
            <rect
              x="103"
              y="50"
              rx="0"
              ry="0"
              width={random(50, width)}
              height="1.3rem"
            />
            <rect
              x="103"
              y="67"
              rx="0"
              ry="0"
              width={random(50, width)}
              height="1.3rem"
            />
          </>
        )}
      </ContentLoader>
    </PodcastItemPlaceholderContainer>
  );
};

export default PodcastItem;
