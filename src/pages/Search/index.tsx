import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Variants } from 'framer-motion';
import { FormattedMessage, useIntl } from 'react-intl';
import PodcastItem, {
  PodcastItemPlaceholder,
} from '../../components/PodcastItem';
import useQuery from '../../hooks/query';
import {
  Container,
  HeaderContainer,
  HeaderContent,
  GoBackLink,
  PageContentContainer,
  PageContent,
  PodcastsList,
} from './styles';

import arrowLeftWhite from '../../assets/arrow-left-white-icon.svg';
import searchIcon from '../../assets/search-white-icon.svg';
import PodcastDTO from '../../dtos/PodcastDTO';
import api from '../../services/api';
import range from '../../utils/range';
import PlayerAwareTitle from '../../components/PlayerAwareTitle';
import useMatchMedia from '../../hooks/matchMedia';
import { device } from '../../styles/variables';
import Pagination from '../../components/Pagination';

const containerVariants: Variants = {
  initial: {
    x: '100vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '100vw',
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

const PAGE_SIZE = 15;

const Search: React.FC = () => {
  const intl = useIntl();
  const query = useQuery();
  const isTablet = useMatchMedia(device.tablet);
  const [podcasts, setPodcasts] = useState<PodcastDTO[]>([]);
  const [paramSearchText, setParamSearchText] = useState(() => {
    const text = query.get('q');
    return text || '';
  });
  const [inputSearchText, setInputSearchText] = useState(paramSearchText);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();

  const searchPodcasts = useCallback(
    async nameToSearch => {
      if (!nameToSearch) return;

      setIsLoading(true);

      const response = await api.searchPodcasts(nameToSearch, {
        page,
        pageSize: PAGE_SIZE,
      });

      setIsLoading(false);

      if (response.status === 200) {
        setPodcasts(response.data.data);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages);
      }
    },
    [page],
  );

  const handleSearchPodcasts = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setParamSearchText(inputSearchText);
    },
    [inputSearchText],
  );

  useEffect(() => {
    searchPodcasts(paramSearchText);
  }, [searchPodcasts, paramSearchText]);

  const handleSearchTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputSearchText(e.target.value);
    },
    [],
  );

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const podcastsPlaceholderItems = useMemo(() => {
    return range(PAGE_SIZE - 1).map(dummy => (
      <li key={dummy}>
        <PodcastItemPlaceholder maxWidth={isTablet ? 900 : undefined} />
      </li>
    ));
  }, [isTablet]);

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PlayerAwareTitle
        title={intl.formatMessage({
          id: 'search.title',
          defaultMessage: 'Search podcast - Podcastic',
        })}
      />

      <HeaderContainer>
        <HeaderContent>
          <form onSubmit={handleSearchPodcasts}>
            <GoBackLink
              to="/"
              title={intl.formatMessage({
                id: 'generic.goBackToHome',
                defaultMessage: 'Go back to home',
              })}
            >
              <img
                src={arrowLeftWhite}
                alt={intl.formatMessage({
                  id: 'generic.goBackToHome',
                  defaultMessage: 'Go back to home',
                })}
              />
            </GoBackLink>

            <input
              type="text"
              value={inputSearchText}
              placeholder={intl.formatMessage({
                id: 'search.searchHereForAPodcast',
                defaultMessage: 'Search here for a podcast',
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
          <h2>
            <FormattedMessage
              id="generic.searchResults"
              defaultMessage="Search results"
            />
          </h2>

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          <PodcastsList>
            <ul>
              {isLoading && podcastsPlaceholderItems}

              {!isLoading &&
                podcasts.map(podcast => (
                  <li key={podcast.id}>
                    <PodcastItem podcast={podcast} />
                  </li>
                ))}
            </ul>
          </PodcastsList>
        </PageContent>
      </PageContentContainer>
    </Container>
  );
};

export default Search;
