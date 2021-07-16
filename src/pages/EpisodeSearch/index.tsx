import { Variants } from 'framer-motion';
import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import PodcastDTO from '../../dtos/PodcastDTO';
import api from '../../services/api';
import {
  Container,
  GoBackButton,
  HeaderContainer,
  HeaderContent,
  PageContent,
  PageContentContainer,
  EpisodesListContainer,
} from './styles';

import closeIcon from '../../assets/close-black-icon.svg';
import searchIcon from '../../assets/search-black-icon.svg';
import EpisodesList from '../../components/EpisodesList';
import range from '../../utils/range';
import { EpisodeItemPlaceholder } from '../../components/EpisodeItem';
import { device } from '../../styles/variables';
import PlayerAwareTitle from '../../components/PlayerAwareTitle';
import useMatchMedia from '../../hooks/matchMedia';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import Pagination from '../../components/Pagination';

interface RouteParams {
  podcastId: string;
}

const containerVariants: Variants = {
  initial: {
    x: '-100vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

const PAGE_SIZE = 15;

const EpisodeSearch: React.FC = () => {
  const intl = useIntl();
  const history = useHistory();
  const isTablet = useMatchMedia(device.tablet);
  const { podcastId } = useParams<RouteParams>();
  const [episodes, setEpisodes] = useState<EpisodeDTO[]>();
  const [podcast, setPodcast] = useState<PodcastDTO>();
  const [searchText, setSearchText] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();
  const [didSearch, setDidSearch] = useState(false);

  const searchEpisodes = useCallback(
    async (pageNumber: number) => {
      setIsLoading(true);

      const response = await api.getEpisodes(
        {
          podcastId,
          episodeToSearch: searchText,
        },
        { page: pageNumber ?? page, pageSize: PAGE_SIZE },
      );

      if (response.status === 200) {
        setEpisodes(response.data.data);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages);
      }

      setIsLoading(false);
    },
    [podcastId, page, searchText],
  );

  const fetchPodcast = useCallback(async () => {
    const response = await api.getPodcast(podcastId);

    if (response.status === 200) {
      setPodcast(response.data);
    }
  }, [podcastId]);

  const handleSearchEpisodes = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchEpisodes(1);
      setDidSearch(true);
    },
    [searchEpisodes],
  );

  useEffect(() => {
    fetchPodcast();
  }, [fetchPodcast]);

  const handleSearchTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    [],
  );

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handlePageChange = useCallback(
    (newPage: number) => {
      searchEpisodes(newPage);
      setPage(newPage);
    },
    [searchEpisodes],
  );

  const episodesPlaceholderItems = useMemo(() => {
    return range(PAGE_SIZE - 1).map(dummy => (
      <li key={dummy}>
        <EpisodeItemPlaceholder maxWidth={isTablet ? 900 : undefined} />
      </li>
    ));
  }, [isTablet]);

  const showNoEpisodesFound =
    (!episodes || episodes.length <= 0) && !isLoading && didSearch;
  const showDidntSearchYet =
    (!episodes || episodes.length <= 0) && !isLoading && !didSearch;

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PlayerAwareTitle
        title={intl.formatMessage({
          id: 'episodeSearch.title',
          defaultMessage: 'Search episode - Podcastic',
        })}
      />

      <HeaderContainer>
        <HeaderContent>
          <form onSubmit={handleSearchEpisodes}>
            <GoBackButton
              type="button"
              onClick={handleGoBack}
              title={intl.formatMessage({
                id: 'generic.goBack',
                defaultMessage: 'Go back',
              })}
            >
              <img
                src={closeIcon}
                alt={intl.formatMessage({
                  id: 'generic.goBack',
                  defaultMessage: 'Go back',
                })}
              />
            </GoBackButton>

            <input
              type="text"
              value={searchText}
              placeholder={intl.formatMessage({
                id: 'episodeSearch.searchHereForAnEpisode',
                defaultMessage: 'Search here for an episode',
              })}
              onChange={handleSearchTextChange}
            />

            <button
              type="submit"
              title={intl.formatMessage({
                id: 'generic.search',
                defaultMessage: 'Search',
              })}
            >
              <img
                src={searchIcon}
                alt={intl.formatMessage({
                  id: 'generic.search',
                  defaultMessage: 'Search',
                })}
              />
            </button>
          </form>
        </HeaderContent>
      </HeaderContainer>

      <PageContentContainer>
        <PageContent>
          {didSearch && (
            <h2>
              <FormattedMessage
                id="generic.searchResults"
                defaultMessage="Search results"
              />
            </h2>
          )}

          <EpisodesListContainer>
            {showDidntSearchYet && (
              <ul>
                <li>
                  <p>
                    <FormattedMessage
                      id="episodeSearch.searchForAnEpisode"
                      defaultMessage="Search for an episode above"
                    />
                  </p>
                </li>
              </ul>
            )}

            {showNoEpisodesFound && (
              <ul>
                <li>
                  <p>
                    <FormattedMessage
                      id="episodeSearch.noEpisodesFound"
                      defaultMessage="No episodes found"
                    />
                  </p>
                </li>
              </ul>
            )}

            <ul>
              {isLoading
                ? episodesPlaceholderItems
                : episodes &&
                  podcast &&
                  episodes.length > 0 && (
                    <EpisodesList episodes={episodes} podcast={podcast} />
                  )}

              {didSearch && (
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </ul>
          </EpisodesListContainer>
        </PageContent>
      </PageContentContainer>
    </Container>
  );
};

export default EpisodeSearch;
