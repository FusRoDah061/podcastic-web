import { Variants } from 'framer-motion';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeItem from '../../components/EpisodeItem';
import PodcastDTO from '../../dtos/PodcastDTO';
import useQuery from '../../hooks/useQuery';
import { api } from '../../services/api';
import {
  Container,
  GoBackLink,
  HeaderContainer,
  HeaderContent,
  PageContent,
  PageContentContainer,
  PodcastsList,
} from './styles';

import closeIcon from '../../assets/close-black-icon.svg';
import searchIcon from '../../assets/search-black-icon.svg';

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
  const query = useQuery();
  const { podcastId } = useParams<RouteParams>();
  const [podcast, setPodcast] = useState<PodcastDTO>();
  const [paramSearchText] = useState(() => {
    const text = query.get('q');
    return text || '';
  });
  const [searchText, setSearchText] = useState(paramSearchText);

  const searchEpisodes = useCallback(
    async nameToSearch => {
      if (!nameToSearch) return;

      const response = await api.get(`/podcasts/${podcastId}`, {
        params: {
          q: nameToSearch,
        },
      });

      if (response.status === 200) {
        setPodcast(response.data);
      }
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
            <GoBackLink to={`/podcast/${podcastId}`}>
              <img src={closeIcon} alt="Go back" />
            </GoBackLink>

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

          <PodcastsList>
            <ul>
              {podcast ? (
                podcast.episodes.map(episode => (
                  <li key={episode._id}>
                    <EpisodeItem episode={episode} />
                  </li>
                ))
              ) : (
                <li>
                  <p>No episodes found</p>
                </li>
              )}
            </ul>
          </PodcastsList>
        </PageContent>
      </PageContentContainer>
    </Container>
  );
};

export default EpisodeSearch;