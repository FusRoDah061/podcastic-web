import React from 'react';
import { Variants } from 'framer-motion';
import {
  Container,
  AllPodcastsHeader,
  GoBackLink,
  PageContent,
} from './styles';

import chevronLeftBlackIcon from '../../assets/chevron-left-black-icon.svg';
import PodcastItem from '../../components/PodcastItem';

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

const AllPodcasts: React.FC = () => (
  <Container
    variants={containerVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <AllPodcastsHeader>
      <GoBackLink to="/">
        <img src={chevronLeftBlackIcon} alt="Go back" />
        All podcasts
      </GoBackLink>
    </AllPodcastsHeader>

    <PageContent>
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
    </PageContent>
  </Container>
);

export default AllPodcasts;
