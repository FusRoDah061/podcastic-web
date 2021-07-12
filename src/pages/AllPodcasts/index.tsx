import React, { useEffect, useMemo, useState } from 'react';
import { Variants } from 'framer-motion';
import { FormattedMessage, useIntl } from 'react-intl';
import { useCallback } from 'react';
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
import PlayerAwareTitle from '../../components/PlayerAwareTitle';
import Pagination from '../../components/Pagination';

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

const PAGE_SIZE = 15;

const AllPodcasts: React.FC = () => {
  const intl = useIntl();
  const [podcasts, setPodcasts] = useState<PodcastDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();

  useEffect(() => {
    async function fetchPodcasts() {
      setIsLoading(true);

      const response = await api.getAllPodcasts({ page, pageSize: PAGE_SIZE });

      if (response.status === 200) {
        setPodcasts(response.data.data);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages);
      }

      setIsLoading(false);
    }

    fetchPodcasts();
  }, [page]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const podcastsPlaceholderItems = useMemo(() => {
    return range(PAGE_SIZE - 1).map(dummy => (
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
      <PlayerAwareTitle
        title={intl.formatMessage({
          id: 'allPodcasts.title',
          defaultMessage: 'All podcasts - Podcastic',
        })}
      />

      <AllPodcastsHeader>
        <GoBackLink to="/">
          <img
            src={chevronLeftBlackIcon}
            alt={intl.formatMessage({
              id: 'generic.goBack',
              defaultMessage: 'Go back',
            })}
          />
          <FormattedMessage
            id="allPodcasts.allPodcasts"
            defaultMessage="All podcasts"
          />
        </GoBackLink>
      </AllPodcastsHeader>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <PageContent>
        <ul>
          {isLoading && podcastsPlaceholderItems}

          {!isLoading &&
            podcasts.map(podcast => (
              <li key={podcast.id}>
                <PodcastItem podcast={podcast} />
              </li>
            ))}
        </ul>
      </PageContent>
    </Container>
  );
};

export default AllPodcasts;
