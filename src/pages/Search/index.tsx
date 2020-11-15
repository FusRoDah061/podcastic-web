import React, { useCallback, useState } from 'react';
import { Variants } from 'framer-motion';
import PodcastItem from '../../components/PodcastItem';
import useQuery from '../../hooks/useQuery';
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
  const [searchText, setSearchText] = useState(() => {
    const text = query.get('q');
    return text || '';
  });

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
          <GoBackLink to="/">
            <img src={arrowLeftWhite} alt="Go back to home" />
          </GoBackLink>

          <input
            type="text"
            value={searchText}
            placeholder="Search here for a podcast"
            onChange={handleSearchTextChange}
          />

          <button type="button">
            <img src={searchIcon} alt="Search" />
          </button>
        </HeaderContent>
      </HeaderContainer>

      <PageContentContainer>
        <PageContent>
          <h2>Search results</h2>

          <PodcastsList>
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
          </PodcastsList>
        </PageContent>
      </PageContentContainer>
    </Container>
  );
};

export default Search;
