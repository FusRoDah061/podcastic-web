import React, { useCallback, useEffect, useState } from 'react';
import { useAnimation, Variants } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderTop,
  SearchContainer,
  PodcastsContainer,
  RecentlyAddedPodcastsContainer,
  AllPodcastsContainer,
  PodcastListContainer,
  PodcastGridContainer,
  AddPodcastButton,
  AllRecentPodcastsContainer,
  AllRecentListContainer,
  ViewAllPodcastsLink,
  SearchButton,
} from './styles';

import { dims } from '../../styles/variables';
import logoImg from '../../assets/podcastic-white-logo.svg';
import addIconDesktop from '../../assets/add-green-icon.svg';
import addIconMobile from '../../assets/add-white-icon.svg';
import searchIcon from '../../assets/arrow-right-white-icon.svg';
import chevronRightBlackIcon from '../../assets/chevron-right-black-icon.svg';
import chevronRightWhiteIcon from '../../assets/chevron-right-white-icon.svg';
import arrowDownGrey from '../../assets/arrow-down-grey.svg';
import PodcastItem from '../../components/PodcastItem';
import Podcast from '../../dtos/Podcast';
import { api } from '../../services/api';

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

const recentPodcastsVariants: Variants = {
  hide: {
    y: '100vh',
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  show: {
    y: '0vh',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const Home: React.FC = () => {
  const history = useHistory();
  const animationControls = useAnimation();
  const [showRecentPodcasts, setShowRecentPodcasts] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [recentPodcasts, setRecentPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    async function fetchPodcasts() {
      const response = await api.get('/podcasts');

      if (response.status === 200) {
        setPodcasts(response.data);
      }
    }

    async function fetchRecentPodcasts() {
      const response = await api.get('/podcasts/recent');

      if (response.status === 200) {
        setRecentPodcasts(response.data);
      }
    }

    Promise.all([fetchPodcasts(), fetchRecentPodcasts()]);
  }, []);

  const handleSearchTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    [],
  );

  const handleSearch = useCallback(() => {
    if (searchText.length > 0) {
      history.push(`/search?q=${encodeURIComponent(searchText)}`);
    }
  }, [history, searchText]);

  const toggleAllRecentePodcasts = useCallback(async () => {
    setShowRecentPodcasts(!showRecentPodcasts);

    if (!showRecentPodcasts) {
      await animationControls.start('show');
    } else {
      await animationControls.start('hide');
    }
  }, [showRecentPodcasts, animationControls]);

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header>
        <HeaderTop>
          <div>
            <img src={logoImg} alt="Podcastic logo" />
            <h1>
              Your favorite podcasts, <strong>simple</strong> and{' '}
              <strong>easy</strong>.
            </h1>
          </div>

          <AddPodcastButton to="/new">
            <picture>
              <source
                media={`(min-width: ${dims.tabletBreak})`}
                srcSet={addIconDesktop}
              />
              <img src={addIconMobile} alt="Add podcast" />
            </picture>
            Add podcast
          </AddPodcastButton>
        </HeaderTop>

        <SearchContainer>
          <input
            type="text"
            value={searchText}
            placeholder="Search for a podcast"
            onChange={handleSearchTextChange}
          />

          <SearchButton
            type="button"
            disabled={searchText.length === 0}
            onClick={handleSearch}
          >
            <img src={searchIcon} alt="Search" />
          </SearchButton>
        </SearchContainer>
      </Header>

      <PodcastsContainer>
        <RecentlyAddedPodcastsContainer>
          <h2>Recently added</h2>

          <PodcastListContainer>
            <ul>
              {recentPodcasts.map(podcast => (
                <li key={podcast._id}>
                  <PodcastItem podcast={podcast} />
                </li>
              ))}
            </ul>
          </PodcastListContainer>

          <button type="button" onClick={toggleAllRecentePodcasts}>
            <img src={chevronRightBlackIcon} alt="View all recent" />
          </button>
        </RecentlyAddedPodcastsContainer>

        <AllPodcastsContainer>
          <h2>All</h2>

          <PodcastGridContainer>
            <ul>
              {podcasts.map(podcast => (
                <li key={podcast._id}>
                  <PodcastItem podcast={podcast} />
                </li>
              ))}

              <ViewAllPodcastsLink to="/all">
                View all
                <img src={chevronRightWhiteIcon} alt="View all recent" />
              </ViewAllPodcastsLink>
            </ul>
          </PodcastGridContainer>
        </AllPodcastsContainer>
      </PodcastsContainer>

      <AllRecentPodcastsContainer
        variants={recentPodcastsVariants}
        initial="hide"
        animate={animationControls}
      >
        <button type="button" onClick={toggleAllRecentePodcasts}>
          <img src={arrowDownGrey} alt="Dismiss" />
        </button>

        <h2>Recently added podcasts</h2>

        <AllRecentListContainer>
          <ul>
            {recentPodcasts.map(podcast => (
              <li key={podcast._id}>
                <PodcastItem podcast={podcast} />
              </li>
            ))}
          </ul>
        </AllRecentListContainer>
      </AllRecentPodcastsContainer>
    </Container>
  );
};

export default Home;
