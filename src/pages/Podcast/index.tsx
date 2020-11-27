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
  RandomEpisodePopupContainer,
  RandomEpisodePopup,
  RandomEpisodePopupHeader,
  RandomEpisodePopupBody,
  RandomEpisodePopupEpisode,
  RandomEpisodePopupFooter,
  EpisodesContainer,
  EpisodesContainerHeader,
  EpisodesFiltersForm,
  EpisodeSearchInputContainer,
  EpisodesSortSelectContainer,
  MobileEpisodeSearchLink,
  EpisodesList,
} from './styles';
import EpisodeItem from '../../components/EpisodeItem';
import ImageOrLetter from '../../components/ImageOrLetter';
import formatDate from '../../utils/formatDate';
import formatDateAsTimeAgo from '../../utils/formatDateAsTimeAgo';

import chevronLeftWhiteIcon from '../../assets/chevron-left-white-icon.svg';
import chevronDownGreenIcon from '../../assets/chevron-down-green-icon.svg';
import searchIconBlack from '../../assets/search-black-icon.svg';
import logoImg from '../../assets/podcastic-green-logo.svg';
import playIcon from '../../assets/play-green-icon.svg';
import EpisodeDTO from '../../dtos/EpisodeDTO';

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
  const [showRandomEpisode, setShowRandomEpisode] = useState(false);
  const [randomEpisode, setRandomEpisode] = useState<EpisodeDTO>();
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    async function fetchPodcast() {
      const response = await api.get<PodcastDTO>(`/podcasts/${podcastId}`, {
        params: {
          sort,
        },
      });

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
  }, [podcastId, sort]);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const getRandomEpisode = useCallback(async () => {
    const response = await api.get<EpisodeDTO>(
      `/podcasts/${podcastId}/episodes/random`,
    );

    if (response.status === 200) {
      setRandomEpisode(response.data);
    }
  }, [podcastId]);

  const handleShowRandomEpisode = useCallback(async () => {
    getRandomEpisode();
    setShowRandomEpisode(true);
  }, [getRandomEpisode]);

  const handleHideRandomEpisode = useCallback(() => {
    setRandomEpisode(undefined);
    setShowRandomEpisode(false);
  }, []);

  const handleTryAgainRandomEpisode = useCallback(() => {
    getRandomEpisode();
  }, [getRandomEpisode]);

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

              <RandomEpisodeButton
                type="button"
                onClick={handleShowRandomEpisode}
              >
                Pick a random episode
              </RandomEpisodeButton>

              {showRandomEpisode && (
                <RandomEpisodePopupContainer>
                  <RandomEpisodePopup>
                    <RandomEpisodePopupHeader>
                      <p>We got you!</p>
                    </RandomEpisodePopupHeader>

                    <RandomEpisodePopupBody>
                      <p>Here’s your randomly picked episode:</p>

                      <RandomEpisodePopupEpisode>
                        {randomEpisode && (
                          <>
                            <p>{randomEpisode.title}</p>
                            <button type="button">
                              <img src={playIcon} alt="Play episode" />
                              Play episode
                            </button>
                            <span>{randomEpisode.duration}</span>
                          </>
                        )}
                      </RandomEpisodePopupEpisode>
                    </RandomEpisodePopupBody>

                    <RandomEpisodePopupFooter>
                      <button type="button" onClick={handleHideRandomEpisode}>
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleTryAgainRandomEpisode}
                      >
                        Try again
                      </button>
                    </RandomEpisodePopupFooter>
                  </RandomEpisodePopup>
                </RandomEpisodePopupContainer>
              )}
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

                  <EpisodesSortSelectContainer>
                    <select
                      defaultValue={sort}
                      onChange={e => setSort(e.target.value)}
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="longest">Longest</option>
                      <option value="shortest">Shortest</option>
                    </select>
                    <img src={chevronDownGreenIcon} alt="V" />
                  </EpisodesSortSelectContainer>

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
