import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Variants } from 'framer-motion';
import { parseISO } from 'date-fns';
import PodcastDTO from '../../dtos/PodcastDTO';
import { api } from '../../services/api';
import {
  Container,
  HeaderContainer,
  GoBackButton,
  PageContent,
  HasPodcastPageContainer,
  PodcastInfo,
  PodcastInfoContent,
  PodcastNameDescription,
  RandomEpisodeButton,
  EpisodesContainer,
  EpisodesContainerHeader,
  EpisodesFiltersForm,
  EpisodeSearchInputContainer,
  MobileEpisodeSearchLink,
  EpisodesList,
} from './styles';

import chevronLeftWhiteIcon from '../../assets/chevron-left-white-icon.svg';
import searchIconBlack from '../../assets/search-black-icon.svg';
import logoImg from '../../assets/podcastic-green-logo.svg';
import EpisodeItem from '../../components/EpisodeItem';
import ImageOrLetter from '../../components/ImageOrLetter';
import formatDate from '../../utils/formatDate';
import formatDateAsTimeAgo from '../../utils/formatDateAsTimeAgo';

interface RouteParams {
  podcastId: string;
}

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

const Podcast: React.FC = () => {
  const history = useHistory();
  const { podcastId } = useParams<RouteParams>();
  const [podcast, setPodcast] = useState<PodcastDTO>();

  useEffect(() => {
    async function fetchPodcast() {
      const response = await api.get<PodcastDTO>(`/podcasts/${podcastId}`);

      if (response.status === 200) {
        response.data.episodes.forEach((episode, index) => {
          const parsedDate = parseISO(episode.date.toString());
          response.data.episodes[index].formattedDate = formatDate(parsedDate);

          response.data.episodes[
            index
          ].formattedDateAsTimeAgo = formatDateAsTimeAgo(parsedDate);
        });

        setPodcast(response.data);
      }
    }

    fetchPodcast();
  }, [podcastId]);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeaderContainer>
        <img src={logoImg} alt="Podcastic" />

        <GoBackButton type="button" onClick={handleGoBack}>
          <img src={chevronLeftWhiteIcon} alt="Go back" />
          {podcast ? podcast.name : 'Go back'}
        </GoBackButton>
      </HeaderContainer>

      <PageContent>
        {podcast && (
          <HasPodcastPageContainer>
            <PodcastInfo>
              <PodcastInfoContent>
                <ImageOrLetter
                  src={podcast.imageUrl}
                  alt={podcast.name}
                  fallbackLetter={podcast.name.charAt(0).toLocaleUpperCase()}
                />

                <PodcastNameDescription>
                  <h1>{podcast.name}</h1>
                  <p>{podcast.description}</p>
                </PodcastNameDescription>
              </PodcastInfoContent>

              <RandomEpisodeButton type="button">
                Pick a random episode
              </RandomEpisodeButton>
            </PodcastInfo>

            <EpisodesContainer>
              <EpisodesContainerHeader>
                <p>Episodes</p>

                <EpisodesFiltersForm>
                  <EpisodeSearchInputContainer>
                    <input type="text" placeholder="Search episode" />

                    <button type="button">
                      <img src={searchIconBlack} alt="Search episode" />
                    </button>
                  </EpisodeSearchInputContainer>

                  <MobileEpisodeSearchLink to={`/podcast/${podcastId}/search`}>
                    <img src={searchIconBlack} alt="Search episode" />
                  </MobileEpisodeSearchLink>
                </EpisodesFiltersForm>
              </EpisodesContainerHeader>

              <EpisodesList>
                <ul>
                  {podcast.episodes.map(episode => (
                    <li key={episode._id}>
                      <EpisodeItem episode={episode} />
                    </li>
                  ))}
                </ul>
              </EpisodesList>
            </EpisodesContainer>
          </HasPodcastPageContainer>
        )}
      </PageContent>
    </Container>
  );
};

export default Podcast;
