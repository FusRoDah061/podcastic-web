import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Variants } from 'framer-motion';
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
  RandomEpisodeButton,
  EpisodesContainer,
  EpisodesContainerHeader,
  EpisodesFiltersForm,
  EpisodeSearchInputContainer,
  EpisodesList,
} from './styles';

import chevronLeftWhiteIcon from '../../assets/chevron-left-white-icon.svg';
import searchIconBlack from '../../assets/search-black-icon.svg';
import logoImg from '../../assets/podcastic-green-logo.svg';
import EpisodeItem from '../../components/EpisodeItem';

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
      const response = await api.get(`/podcasts/${podcastId}`);

      if (response.status === 200) {
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
                <img src={podcast.imageUrl} alt={podcast.name} />
                <div>
                  <h1>{podcast.name}</h1>
                  <p>{podcast.description}</p>
                </div>
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

                  <button type="button">
                    <img src={searchIconBlack} alt="Search episode" />
                  </button>
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
