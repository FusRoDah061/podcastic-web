import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useIntl } from 'react-intl';
import { useAnimation, Variants } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
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
import PodcastItem, {
  PodcastItemPlaceholder,
} from '../../components/PodcastItem';
import PodcastDTO from '../../dtos/PodcastDTO';
import api from '../../services/api';
import range from '../../utils/range';

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
  const intl = useIntl();
  const animationControls = useAnimation();
  const [showRecentPodcasts, setShowRecentPodcasts] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [podcasts, setPodcasts] = useState<PodcastDTO[]>([]);
  const [recentPodcasts, setRecentPodcasts] = useState<PodcastDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPodcasts() {
      const response = await api.getAllPodcasts();

      if (response.status === 200) {
        setPodcasts(response.data);
      }
    }

    async function fetchRecentPodcasts() {
      const response = await api.getRecentPodcasts();

      if (response.status === 200) {
        setRecentPodcasts(response.data);
      }
    }

    setIsLoading(true);

    Promise.all([fetchPodcasts(), fetchRecentPodcasts()])
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearchTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    [],
  );

  const handleSearch = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (searchText.length > 0) {
        history.push(`/search?q=${encodeURIComponent(searchText)}`);
      }
    },
    [history, searchText],
  );

  const toggleAllRecentePodcasts = useCallback(async () => {
    setShowRecentPodcasts(!showRecentPodcasts);

    if (!showRecentPodcasts) {
      await animationControls.start('show');
    } else {
      await animationControls.start('hide');
    }
  }, [showRecentPodcasts, animationControls]);

  const recentPodcastsPlaceholderItems = useMemo(() => {
    return range(10).map(dummy => (
      <li key={dummy}>
        <PodcastItemPlaceholder
          displayInfo={
            window.innerWidth > Number(dims.tabletBreak.replace('px', ''))
          }
        />
      </li>
    ));
  }, []);

  const allPodcastsPlaceholderItems = useMemo(() => {
    return range(10).map(dummy => (
      <li key={dummy}>
        <PodcastItemPlaceholder
          displayInfo={
            window.innerWidth > Number(dims.tabletBreak.replace('px', ''))
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
      <Header>
        <HeaderTop>
          <div>
            <img
              src={logoImg}
              alt={intl.formatMessage({
                id: 'home.podcasticLogo',
                defaultMessage: 'Podcastic logo',
              })}
            />
            <h1>
              <FormattedMessage
                id="home.slogan1"
                defaultMessage="Your favorite podcasts, "
              />{' '}
              <strong>
                <FormattedMessage id="home.slogan2" defaultMessage="quick" />
              </strong>{' '}
              <FormattedMessage id="home.slogan3" defaultMessage="and" />{' '}
              <strong>
                <FormattedMessage id="home.slogan4" defaultMessage="easy." />
              </strong>
            </h1>
          </div>

          <AddPodcastButton to="/new">
            <picture>
              <source
                media={`(min-width: ${dims.tabletBreak})`}
                srcSet={addIconDesktop}
              />
              <img
                src={addIconMobile}
                alt={intl.formatMessage({
                  id: 'home.addPodcast',
                  defaultMessage: 'Add podcast',
                })}
              />
            </picture>
            <FormattedMessage
              id="home.addPodcast"
              defaultMessage="Add podcast"
            />
          </AddPodcastButton>
        </HeaderTop>

        <SearchContainer onSubmit={handleSearch}>
          <input
            type="text"
            value={searchText}
            placeholder={intl.formatMessage({
              id: 'home.searchForAPodcast',
              defaultMessage: 'Search for a podcast',
            })}
            onChange={handleSearchTextChange}
          />

          <SearchButton
            type="submit"
            disabled={searchText.length === 0}
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
          </SearchButton>
        </SearchContainer>
      </Header>

      <PodcastsContainer>
        <RecentlyAddedPodcastsContainer>
          <h2>
            <FormattedMessage
              id="home.recentlyAdded"
              defaultMessage="Recently added"
            />
          </h2>

          <PodcastListContainer>
            <ul>
              {isLoading && recentPodcastsPlaceholderItems}

              {!isLoading &&
                recentPodcasts.map(podcast => (
                  <li key={podcast._id}>
                    <PodcastItem podcast={podcast} />
                  </li>
                ))}
            </ul>
          </PodcastListContainer>

          <button type="button" onClick={toggleAllRecentePodcasts}>
            <img
              src={chevronRightBlackIcon}
              alt={intl.formatMessage({
                id: 'home.viewAllRecent',
                defaultMessage: 'View all recent',
              })}
            />
          </button>
        </RecentlyAddedPodcastsContainer>

        <AllPodcastsContainer>
          <h2>
            <FormattedMessage id="home.all" defaultMessage="All" />
          </h2>

          <PodcastGridContainer>
            <ul>
              {isLoading && allPodcastsPlaceholderItems}

              {!isLoading &&
                podcasts.map(podcast => (
                  <li key={podcast._id}>
                    <PodcastItem podcast={podcast} />
                  </li>
                ))}

              <ViewAllPodcastsLink to="/all">
                <FormattedMessage id="home.viewAll" defaultMessage="View all" />
                <img
                  src={chevronRightWhiteIcon}
                  alt={intl.formatMessage({
                    id: 'home.viewAll',
                    defaultMessage: 'View all',
                  })}
                />
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
          <img
            src={arrowDownGrey}
            alt={intl.formatMessage({
              id: 'home.dismiss',
              defaultMessage: 'Dismiss',
            })}
          />
        </button>

        <h2>
          <FormattedMessage
            id="home.recentylAddedPodcasts"
            defaultMessage="Recently added podcasts"
          />
        </h2>

        <AllRecentListContainer>
          <ul>
            {isLoading && recentPodcastsPlaceholderItems}

            {!isLoading &&
              recentPodcasts.map(podcast => (
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
