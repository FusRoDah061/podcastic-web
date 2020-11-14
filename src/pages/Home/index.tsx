import React, { useCallback, useState } from 'react';
import { useAnimation } from 'framer-motion';
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
  AddPodcastPopup,
  AddPodcastButton,
  AddPodcastCloseButton,
  AddPodcastConfirmButton,
} from './styles';

import logoImg from '../../assets/podcastic-white-logo.svg';
import addIcon from '../../assets/add-green-icon.svg';
import searchIcon from '../../assets/arrow-right-white-icon.svg';

const Home: React.FC = () => {
  const [showAddPodcastPopup, setShowAddPodcastPopup] = useState(false);
  const addPodcastPopupControl = useAnimation();

  const toggleAddPoscastPopup = useCallback(() => {
    setShowAddPodcastPopup(!showAddPodcastPopup);

    if (!showAddPodcastPopup) {
      addPodcastPopupControl.start({ opacity: 1, y: 0 });
    } else {
      addPodcastPopupControl.start({ opacity: 0, y: -400 });
    }
  }, [showAddPodcastPopup, addPodcastPopupControl]);

  return (
    <Container>
      <Header>
        <HeaderTop>
          <div>
            <img src={logoImg} alt="Podcastic logo" />
            <h1>
              Your favorite podcasts, <strong>simple</strong> and{' '}
              <strong>easy</strong>.
            </h1>
          </div>

          <AddPodcastButton type="button" onClick={toggleAddPoscastPopup}>
            <img src={addIcon} alt="Add podcast" />
            Add podcast
          </AddPodcastButton>

          <AddPodcastPopup
            isOpen={showAddPodcastPopup}
            initial={{ opacity: 0, y: -400 }}
            animate={addPodcastPopupControl}
          >
            <p>New podcast feed</p>

            <label htmlFor="js-rss-feed-address">
              RSS feed address:
              <input
                id="js-rss-feed-address"
                type="text"
                placeholder="https://cool-podcast.com/feed/rss"
              />
            </label>

            <div>
              <AddPodcastCloseButton
                type="button"
                onClick={toggleAddPoscastPopup}
              >
                Close
              </AddPodcastCloseButton>
              <AddPodcastConfirmButton type="button">
                Add
              </AddPodcastConfirmButton>
            </div>
          </AddPodcastPopup>
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
            </ul>
          </PodcastGridContainer>
        </AllPodcastsContainer>
      </PodcastsContainer>
    </Container>
  );
};

export default Home;
