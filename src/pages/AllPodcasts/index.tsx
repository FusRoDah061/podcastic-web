import React, { useEffect, useState } from 'react';
import { Variants } from 'framer-motion';
import {
  Container,
  AllPodcastsHeader,
  GoBackLink,
  PageContent,
} from './styles';

import chevronLeftBlackIcon from '../../assets/chevron-left-black-icon.svg';
import PodcastItem from '../../components/PodcastItem';
import Podcast from '../../dtos/Podcast';
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

const AllPodcasts: React.FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    async function fetchPodcasts() {
      const response = await api.get('/podcasts');

      if (response.status === 200) {
        setPodcasts(response.data);
      }
    }

    fetchPodcasts();
  }, []);

  return (
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
          {podcasts.map(podcast => (
            <li key={podcast._id}>
              <PodcastItem podcast={podcast} />
            </li>
          ))}
        </ul>
      </PageContent>
    </Container>
  );
};

export default AllPodcasts;
