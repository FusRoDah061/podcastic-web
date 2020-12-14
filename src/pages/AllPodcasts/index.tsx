import React, { useEffect, useMemo, useState } from 'react';
import { Variants } from 'framer-motion';
import {
  Container,
  AllPodcastsHeader,
  GoBackLink,
  PageContent,
} from './styles';

import chevronLeftBlackIcon from '../../assets/chevron-left-black-icon.svg';
import PodcastItem, {
  PodcastItemPlaceholder,
} from '../../components/PodcastItem';
import PodcastDTO from '../../dtos/PodcastDTO';
import api from '../../services/api';
import range from '../../utils/range';

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
  const [podcasts, setPodcasts] = useState<PodcastDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPodcasts() {
      setIsLoading(true);

      const response = await api.getAllPodcasts();

      if (response.status === 200) {
        setPodcasts(response.data);
      }

      setIsLoading(false);
    }

    fetchPodcasts();
  }, []);

  const podcastsPlaceholderItems = useMemo(() => {
    return range(10).map(dummy => (
      <li key={dummy}>
        <PodcastItemPlaceholder />
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
      <AllPodcastsHeader>
        <GoBackLink to="/">
          <img src={chevronLeftBlackIcon} alt="Go back" />
          All podcasts
        </GoBackLink>
      </AllPodcastsHeader>

      <PageContent>
        <ul>
          {isLoading && podcastsPlaceholderItems}

          {!isLoading &&
            podcasts.map(podcast => (
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
