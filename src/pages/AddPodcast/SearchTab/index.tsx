import React, { FormEvent, useCallback, useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useEffect } from 'react';
import {
  SearchTabStyled,
  SearchPodcastForm,
  PodcastSearchInputContainer,
  SearchResultList,
} from './styles';
import itunes from '../../../services/itunes';
import ItunesPodcastDTO from '../../../dtos/ItunesPodcastDTO';
import Spinner from '../../../components/Spinner';
import { colors } from '../../../styles/variables';

import searchIconBlack from '../../../assets/search-black-icon.svg';
import SearchResultItem from './SearchResultItem';

const SearchTab: React.FC = () => {
  const intl = useIntl();
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchTermInput, setSearchTermInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [podcasts, setPodcasts] = useState<ItunesPodcastDTO[]>([]);
  const [error, setError] = useState('');

  const searchPodcasts = useCallback(async () => {
    if (searchTerm) {
      setIsSearchLoading(true);
      setError('');

      try {
        const results = await itunes.search({
          term: searchTerm,
          limit: 10,
          media: 'podcast',
        });

        setPodcasts(results.data.results.filter(result => !!result.feedUrl));
      } catch (err) {
        if (err.request.parsedResponse) {
          setError(err.request.parsedResponse.errorMessage);
        }
      } finally {
        setIsSearchLoading(false);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    searchPodcasts();
  }, [searchPodcasts]);

  const handleSearchPodcast = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isSearchLoading) {
        setSearchTerm(searchTermInput);
      }
    },
    [searchTermInput, isSearchLoading],
  );

  return (
    <SearchTabStyled>
      <SearchPodcastForm onSubmit={handleSearchPodcast}>
        <label htmlFor="js-search">
          <FormattedMessage
            id="searchTab.searchPodcast"
            defaultMessage="Search podcast:"
          />

          <span>
            <FormattedMessage
              id="searchTab.searchPodcastDetail"
              defaultMessage="Search for any non-iTunes exclusive podcasts."
            />
          </span>

          <PodcastSearchInputContainer>
            <input
              id="js-search"
              type="text"
              placeholder={intl.formatMessage({
                id: 'searchTab.searchPodcastPlaceholder',
                defaultMessage: 'Podcast name',
              })}
              onChange={e => {
                setSearchTermInput(e.target.value);
              }}
            />

            <button
              type="submit"
              title={intl.formatMessage({
                id: 'searchTab.searchPodcastAria',
                defaultMessage: 'Search podcast',
              })}
            >
              <img
                src={searchIconBlack}
                alt={intl.formatMessage({
                  id: 'searchTab.searchPodcastAria',
                  defaultMessage: 'Search podcast',
                })}
              />
            </button>
          </PodcastSearchInputContainer>
        </label>

        {error && <span>{error}</span>}
      </SearchPodcastForm>

      {isSearchLoading && (
        <Spinner color={colors.greenDark} size={40} thickness={4} />
      )}

      <SearchResultList>
        {podcasts.map(podcast => (
          <SearchResultItem
            podcast={podcast}
            onError={err => setError(err)}
            key={podcast.trackId}
          />
        ))}
      </SearchResultList>
    </SearchTabStyled>
  );
};

export default SearchTab;
