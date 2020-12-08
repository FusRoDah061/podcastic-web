import { Variants } from 'framer-motion';
import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PodcastDTO from '../../dtos/PodcastDTO';
import useQuery from '../../hooks/query';
import { api } from '../../services/api';
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
import { dims } from '../../styles/variables';

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

const EpisodeSearch: React.FC = () => {
  const history = useHistory();
  const query = useQuery();
  const { podcastId } = useParams<RouteParams>();
  const [podcast, setPodcast] = useState<PodcastDTO>();
  const [paramSearchText] = useState(() => {
    const text = query.get('q');
    return text || '';
  });
  const [searchText, setSearchText] = useState(paramSearchText);
  const [isLoading, setIsLoading] = useState(false);

  const searchEpisodes = useCallback(
    async nameToSearch => {
      if (!nameToSearch) return;

      setIsLoading(true);

      const response = await api.get(`/podcasts/${podcastId}`, {
        params: {
          q: nameToSearch,
        },
      });

      if (response.status === 200) {
        setPodcast(response.data);
      }

      setIsLoading(false);
    },
    [podcastId],
  );

  const handleSearchEpisodes = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchEpisodes(searchText);
    },
    [searchEpisodes, searchText],
  );

  useEffect(() => {
    searchEpisodes(paramSearchText);
  }, [searchEpisodes, paramSearchText]);

  const handleSearchTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    [],
  );

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const episodesPlaceholderItems = useMemo(() => {
    return range(10).map(dummy => (
      <li key={dummy}>
        <EpisodeItemPlaceholder
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
          <form onSubmit={handleSearchEpisodes}>
            <GoBackButton type="button" onClick={handleGoBack}>
              <img src={closeIcon} alt="Go back" />
            </GoBackButton>

            <input
              type="text"
              value={searchText}
              placeholder="Search here for an episode"
              onChange={handleSearchTextChange}
            />

            <button type="submit">
              <img src={searchIcon} alt="Search" />
            </button>
          </form>
        </HeaderContent>
      </HeaderContainer>

      <PageContentContainer>
        <PageContent>
          <h2>Search results</h2>

          <EpisodesListContainer>
            {isLoading ? (
              <ul>{episodesPlaceholderItems}</ul>
            ) : (
              podcast && <EpisodesList podcast={podcast} />
            )}

            {!podcast && (
              <ul>
                <li>
                  <p>No episodes found</p>
                </li>
              </ul>
            )}
          </EpisodesListContainer>
        </PageContent>
      </PageContentContainer>
    </Container>
  );
};

export default EpisodeSearch;
