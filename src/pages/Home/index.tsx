import React from 'react';
import { Variants } from 'framer-motion';
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
  PodcastCard,
  AddPodcastButton,
} from './styles';

import logoImg from '../../assets/podcastic-white-logo.svg';
import addIconDesktop from '../../assets/add-green-icon.svg';
import addIconMobile from '../../assets/add-white-icon.svg';
import searchIcon from '../../assets/arrow-right-white-icon.svg';
import chevronRightBlackIcon from '../../assets/chevron-right-black-icon.svg';
import chevronRightWhiteIcon from '../../assets/chevron-right-white-icon.svg';
import { dims } from '../../styles/variables';

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

const Home: React.FC = () => {
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

        <SearchContainer initial={{ x: -200 }} animate={{ x: 0 }}>
          <input type="text" placeholder="Search for a podcast" />

          <button type="button">
            <img src={searchIcon} alt="Search" />
          </button>
        </SearchContainer>
      </Header>

      <PodcastsContainer>
        <RecentlyAddedPodcastsContainer>
          <h2>Recently added</h2>

          <PodcastListContainer>
            <ul>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
            </ul>
          </PodcastListContainer>

          <button type="button">
            <img src={chevronRightBlackIcon} alt="View all recent" />
          </button>
        </RecentlyAddedPodcastsContainer>

        <AllPodcastsContainer>
          <h2>All</h2>

          <PodcastGridContainer>
            <ul>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <li>
                <PodcastCard>
                  <a href="/">
                    <img
                      src="https://cdn.player.fm/images/24282125/series/MW5P2lMXyn0kza3p/256.jpg"
                      alt="Flow Podcast"
                    />
                    <div>
                      <h3>Flow Podcast</h3>
                      <p>
                        Flow Podcast acontece todo dia de segunda à sexta,
                        normalmente às 20h, AO VIVO simultaneamente no YouTube,
                        Twitch e Facebook!
                      </p>
                    </div>
                  </a>
                </PodcastCard>
              </li>
              <button type="button">
                View all
                <img src={chevronRightWhiteIcon} alt="View all recent" />
              </button>
            </ul>
          </PodcastGridContainer>
        </AllPodcastsContainer>
      </PodcastsContainer>
    </Container>
  );
};

export default Home;
