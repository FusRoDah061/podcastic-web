import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import ItunesPodcastDTO from '../../../../dtos/ItunesPodcastDTO';
import api from '../../../../services/api';
import Spinner from '../../../../components/Spinner';
import { colors } from '../../../../styles/variables';
import {
  SearchResultItemContainer,
  SearchResultButtonContainer,
} from './styles';

import addIconGreen from '../../../../assets/add-green-icon.svg';

interface SearchResultItemProps {
  podcast: ItunesPodcastDTO;
  onError?: (error: string) => void;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  podcast,
  onError,
}) => {
  const intl = useIntl();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddPodcast = useCallback(
    async ({ feedUrl }: ItunesPodcastDTO) => {
      if (feedUrl) {
        setIsLoading(true);

        try {
          await api.addPodcast(feedUrl);
        } catch (err) {
          if (err.request.parsedResponse) {
            if (onError) onError(err.request.parsedResponse.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
    },
    [onError],
  );

  return (
    <SearchResultItemContainer>
      <img src={podcast.artworkUrl60} alt={podcast.collectionName} />
      <p>{podcast.collectionName}</p>

      <SearchResultButtonContainer>
        {isLoading ? (
          <Spinner color={colors.greenDark} size={20} thickness={3} />
        ) : (
          <button type="button" onClick={() => handleAddPodcast(podcast)}>
            <img
              src={addIconGreen}
              alt={intl.formatMessage({
                id: 'searchTab.addPodcast',
                defaultMessage: 'Add podcast',
              })}
            />
          </button>
        )}
      </SearchResultButtonContainer>
    </SearchResultItemContainer>
  );
};

export default SearchResultItem;
