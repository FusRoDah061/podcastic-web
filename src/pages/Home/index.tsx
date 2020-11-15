import React, { useCallback, useState } from 'react';
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
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
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
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>
              <li>
                <PodcastItem
                  podcast={{
                    id: '1',
                    name: 'Flow Podcast',
                    description:
                      'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                    image_url:
                      'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                  }}
                />
              </li>

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
            <li>
              <PodcastItem
                podcast={{
                  id: '1',
                  name: 'Flow Podcast',
                  description:
                    'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                  image_url:
                    'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                }}
              />
            </li>
            <li>
              <PodcastItem
                podcast={{
                  id: '1',
                  name: 'Flow Podcast',
                  description:
                    'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                  image_url:
                    'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                }}
              />
            </li>
            <li>
              <PodcastItem
                podcast={{
                  id: '1',
                  name: 'Flow Podcast',
                  description:
                    'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                  image_url:
                    'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                }}
              />
            </li>
            <li>
              <PodcastItem
                podcast={{
                  id: '1',
                  name: 'Flow Podcast',
                  description:
                    'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                  image_url:
                    'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                }}
              />
            </li>
            <li>
              <PodcastItem
                podcast={{
                  id: '1',
                  name: 'Flow Podcast',
                  description:
                    'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                  image_url:
                    'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                }}
              />
            </li>
            <li>
              <PodcastItem
                podcast={{
                  id: '1',
                  name: 'Flow Podcast',
                  description:
                    'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                  image_url:
                    'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                }}
              />
            </li>
            <li>
              <PodcastItem
                podcast={{
                  id: '1',
                  name: 'Flow Podcast',
                  description:
                    'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                  image_url:
                    'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                }}
              />
            </li>
            <li>
              <PodcastItem
                podcast={{
                  id: '1',
                  name: 'Flow Podcast',
                  description:
                    'Flow Podcast acontece todo dia de segunda à sexta, normalmente às 20h, AO VIVO simultaneamente no YouTube, Twitch e Facebook!',
                  image_url:
                    'https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg',
                }}
              />
            </li>
          </ul>
        </AllRecentListContainer>
      </AllRecentPodcastsContainer>
    </Container>
  );
};

export default Home;
