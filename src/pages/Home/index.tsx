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
import SVG from 'react-inlinesvg';
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
  HeaderNav,
  SignInLink,
  SignUpLink,
} from './styles';
import { device } from '../../styles/variables';
import PodcastItem, {
  PodcastItemPlaceholder,
} from '../../components/PodcastItem';
import PodcastDTO from '../../dtos/PodcastDTO';
import api from '../../services/api';
import range from '../../utils/range';
import PlayerAwareTitle from '../../components/PlayerAwareTitle';
import useMatchMedia from '../../hooks/matchMedia';
import Pagination from '../../components/Pagination';

import logoImg from '../../assets/podcastic-white-logo.svg';
import addIcon from '../../assets/add-white-icon.svg';
import searchIcon from '../../assets/arrow-right-white-icon.svg';
import chevronRightBlackIcon from '../../assets/chevron-right-black-icon.svg';
import chevronRightWhiteIcon from '../../assets/chevron-right-white-icon.svg';
import arrowDownGrey from '../../assets/arrow-down-grey.svg';
import userIcon from '../../assets/user-icon-green.svg';
import userIconWhite from '../../assets/user-icon-white.svg';

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

const PAGE_SIZE = 20;

const Home: React.FC = () => {
  const history = useHistory();
  const intl = useIntl();
  const isTablet = useMatchMedia(device.tablet);
  const animationControls = useAnimation();
  const [showRecentPodcasts, setShowRecentPodcasts] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [podcasts, setPodcasts] = useState<PodcastDTO[]>([]);
  const [recentPodcasts, setRecentPodcasts] = useState<PodcastDTO[]>([]);
  const [isRecentLoading, setIsRecentLoading] = useState(false);
  const [isAllLoading, setIsAllLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();

  useEffect(() => {
    async function fetchPodcasts() {
      const response = await api.getAllPodcasts({ page, pageSize: PAGE_SIZE });

      if (response.status === 200) {
        setPodcasts(response.data.data);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages);
      }
    }

    setIsAllLoading(true);

    if (page <= 1) {
      setTimeout(() => {
        fetchPodcasts().finally(() => {
          setIsAllLoading(false);
        });
      }, 300);
    } else {
      fetchPodcasts().finally(() => {
        setIsAllLoading(false);
      });
    }
  }, [page]);

  useEffect(() => {
    async function fetchRecentPodcasts() {
      const response = await api.getRecentPodcasts();

      if (response.status === 200) {
        setRecentPodcasts(response.data);
      }
    }

    setIsRecentLoading(true);

    setTimeout(() => {
      fetchRecentPodcasts().finally(() => {
        setIsRecentLoading(false);
      });
    }, 300);
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
    return range(4).map(dummy => (
      <li key={dummy}>
        <PodcastItemPlaceholder displayInfo={isTablet} />
      </li>
    ));
  }, [isTablet]);

  const allPodcastsPlaceholderItems = useMemo(() => {
    return range(3).map(dummy => (
      <li key={dummy}>
        <PodcastItemPlaceholder displayInfo={isTablet} />
      </li>
    ));
  }, [isTablet]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PlayerAwareTitle
        title={intl.formatMessage({
          id: 'home.title',
          defaultMessage:
            'Podcastic - Your favorite podcasts, simple and easy.',
        })}
      />

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
                id="generic.slogan1"
                defaultMessage="Your favorite podcasts, "
              />{' '}
              <strong>
                <FormattedMessage id="generic.slogan2" defaultMessage="quick" />
              </strong>{' '}
              <FormattedMessage id="generic.slogan3" defaultMessage="and" />{' '}
              <strong>
                <FormattedMessage id="generic.slogan4" defaultMessage="easy." />
              </strong>
            </h1>
          </div>

          <HeaderNav>
            <SignUpLink to="/signup">
              <FormattedMessage id="signup.title" defaultMessage="Sign up" />
            </SignUpLink>

            <SignInLink to="/signin">
              <SVG
                src={isTablet ? userIcon : userIconWhite}
                title={intl.formatMessage({
                  id: 'signin.title',
                  defaultMessage: 'Sign in',
                })}
              />
              <FormattedMessage id="signin.title" defaultMessage="Sign in" />
            </SignInLink>

            <AddPodcastButton to="/new">
              <SVG
                src={addIcon}
                title={intl.formatMessage({
                  id: 'home.addPodcast',
                  defaultMessage: 'Add podcast',
                })}
              />
              <FormattedMessage
                id="home.addPodcast"
                defaultMessage="Add podcast"
              />
            </AddPodcastButton>
          </HeaderNav>
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
              {isRecentLoading && recentPodcastsPlaceholderItems}

              {!isRecentLoading &&
                recentPodcasts.map(podcast => (
                  <li key={podcast.id}>
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
              {isAllLoading && allPodcastsPlaceholderItems}

              {!isAllLoading &&
                podcasts.map(podcast => (
                  <li key={podcast.id}>
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

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </AllPodcastsContainer>
      </PodcastsContainer>

      {!isTablet && (
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
              {isRecentLoading && recentPodcastsPlaceholderItems}

              {!isRecentLoading &&
                recentPodcasts.map(podcast => (
                  <li key={podcast.id}>
                    <PodcastItem podcast={podcast} />
                  </li>
                ))}
            </ul>
          </AllRecentListContainer>
        </AllRecentPodcastsContainer>
      )}
    </Container>
  );
};

export default Home;
