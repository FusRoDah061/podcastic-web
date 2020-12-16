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
import { dims } from '../../styles/variables';

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

const Search: React.FC = () => {
  const intl = useIntl();
  const query = useQuery();
  const [podcasts, setPodcasts] = useState<PodcastDTO[]>([]);
  const [paramSearchText] = useState(() => {
    const text = query.get('q');
    return text || '';
  });
  const [searchText, setSearchText] = useState(paramSearchText);
  const [isLoading, setIsLoading] = useState(false);

  const searchPodcasts = useCallback(async nameToSearch => {
    if (!nameToSearch) return;

    setIsLoading(true);

    const response = await api.searchPodcasts(nameToSearch);

    setIsLoading(false);

    if (response.status === 200) {
      setPodcasts(response.data);
    }
  }, []);

  const handleSearchPodcasts = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchPodcasts(searchText);
    },
    [searchPodcasts, searchText],
  );

  useEffect(() => {
    searchPodcasts(paramSearchText);
  }, [searchPodcasts, paramSearchText]);

  const handleSearchTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    [],
  );

  const podcastsPlaceholderItems = useMemo(() => {
    return range(5).map(dummy => (
      <li key={dummy}>
        <PodcastItemPlaceholder
          maxWidth={
            window.innerWidth > Number(dims.tabletBreak.replace('px', ''))
              ? 900
              : undefined
          }
        />
      </li>
    ));
  }, []);

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeaderContainer>
        <HeaderContent>
          <form onSubmit={handleSearchPodcasts}>
            <GoBackLink to="/">
              <img
                src={arrowLeftWhite}
                alt={intl.formatMessage({
                  id: 'search.goBackToHome',
                  defaultMessage: 'Go back to home',
                })}
              />
            </GoBackLink>

            <input
              type="text"
              value={searchText}
              placeholder={intl.formatMessage({
                id: 'search.searchHereForAPodcast',
                defaultMessage: 'Search here for a podcast',
              })}
              onChange={handleSearchTextChange}
            />

            <button type="submit">
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

          <PodcastsList>
            <ul>
              {isLoading && podcastsPlaceholderItems}

              {!isLoading &&
                podcasts.map(podcast => (
                  <li key={podcast._id}>
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
