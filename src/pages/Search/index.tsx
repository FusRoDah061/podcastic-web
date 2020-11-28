import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { Variants } from 'framer-motion';
import PodcastItem from '../../components/PodcastItem';
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
import { api } from '../../services/api';

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
  const query = useQuery();
  const [podcasts, setPodcasts] = useState<PodcastDTO[]>([]);
  const [paramSearchText] = useState(() => {
    const text = query.get('q');
    return text || '';
  });
  const [searchText, setSearchText] = useState(paramSearchText);

  const searchPodcasts = useCallback(async nameToSearch => {
    if (!nameToSearch) return;

    const response = await api.get('/podcasts/search', {
      params: {
        q: nameToSearch,
      },
    });

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
              <img src={arrowLeftWhite} alt="Go back to home" />
            </GoBackLink>

            <input
              type="text"
              value={searchText}
              placeholder="Search here for a podcast"
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
              {podcasts.map(podcast => (
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
