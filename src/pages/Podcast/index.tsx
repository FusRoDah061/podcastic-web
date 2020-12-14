import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Variants } from 'framer-motion';
import PodcastDTO from '../../dtos/PodcastDTO';
import api from '../../services/api';
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
  EpisodesListContainer,
} from './styles';
import ImageOrLetter from '../../components/ImageOrLetter';

import chevronLeftWhiteIcon from '../../assets/chevron-left-white-icon.svg';
import chevronDownGreenIcon from '../../assets/chevron-down-green-icon.svg';
import searchIconBlack from '../../assets/search-black-icon.svg';
import logoImg from '../../assets/podcastic-green-logo.svg';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import EpisodesList from '../../components/EpisodesList';
import { useAudioPlayer } from '../../hooks/audioPlayer';
import RandomEpisode from '../../components/RandomEpisode';
import Spinner from '../../components/Spinner';
import { colors } from '../../styles/variables';

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

/*
I declare this variable here to imporve performance when there are too many episodes loaded.
If kept on state, each time the user types a letter in the episode search input, the whole
page will re-render, which will cause a brief lock on the ui and the user won't see the next
letters typed, until he stops.
Keeping it outside, I update it at the onChange event of the input, and the state will be
updated only once when the search form is submitted.
*/
let episodeToSearchTmp = '';

const Podcast: React.FC = () => {
  const player = useAudioPlayer();
  const history = useHistory();
  const { podcastId } = useParams<RouteParams>();
  const [podcast, setPodcast] = useState<PodcastDTO>();
  const [showRandomEpisode, setShowRandomEpisode] = useState(false);
  const [randomEpisode, setRandomEpisode] = useState<EpisodeDTO>();
  const [sort, setSort] = useState('newest');
  const [episodeToSearch, setEpisodeToSearch] = useState('');
  const [isLoadingRandom, setIsLoadingRandom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPodcast() {
      setIsLoading(true);

      const response = await api.getPodcast({
        podcastId,
        sort,
        episodeToSearch,
      });

      setIsLoading(false);

      if (response.status === 200) {
        setPodcast(response.data);
      }
    }

    fetchPodcast();
  }, [podcastId, sort, episodeToSearch]);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const getRandomEpisode = useCallback(async () => {
    setIsLoadingRandom(true);

    const response = await api.getRandomEpisode(podcastId);

    setIsLoadingRandom(false);

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

  const handleEpisodeSearch = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setEpisodeToSearch(episodeToSearchTmp);
    },
    [],
  );

  const handlePlayRandomEpisode = useCallback(
    (episode: EpisodeDTO, isPlaying: boolean) => {
      if (!isPlaying) {
        player.play({
          id: episode._id,
          displayName: episode.title,
          mediaUrl: episode.file.url,
          mediaType: episode.file.mediaType,
          duration: episode.duration,
        });
      } else {
        player.pause();
      }
    },
    [player],
  );

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeaderContainer>
        <button type="button" onClick={handleGoBack}>
          <img src={logoImg} alt="Podcastic" />
        </button>

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
                  <h1 title={podcast.name}>{podcast.name}</h1>
                  <p title={podcast.description}>{podcast.description}</p>
                </PodcastNameDescription>
              </PodcastInfoContent>

              <RandomEpisodeButton
                type="button"
                onClick={handleShowRandomEpisode}
              >
                Pick a random episode
              </RandomEpisodeButton>

              <RandomEpisodePopupContainer visible={showRandomEpisode}>
                <RandomEpisodePopup>
                  <RandomEpisodePopupHeader>
                    <p>We got you!</p>
                  </RandomEpisodePopupHeader>

                  <RandomEpisodePopupBody>
                    <p>Here’s your randomly picked episode:</p>

                    <RandomEpisodePopupEpisode>
                      {isLoadingRandom && (
                        <Spinner
                          color={colors.greenDark}
                          size={50}
                          thickness={5}
                        />
                      )}

                      {!isLoadingRandom && randomEpisode && (
                        <RandomEpisode
                          episode={randomEpisode}
                          onPlay={handlePlayRandomEpisode}
                        />
                      )}
                    </RandomEpisodePopupEpisode>
                  </RandomEpisodePopupBody>

                  <RandomEpisodePopupFooter>
                    <button type="button" onClick={handleHideRandomEpisode}>
                      Cancel
                    </button>
                    <button type="button" onClick={handleTryAgainRandomEpisode}>
                      Try again
                    </button>
                  </RandomEpisodePopupFooter>
                </RandomEpisodePopup>
              </RandomEpisodePopupContainer>
            </PodcastInfo>

            <EpisodesContainer>
              <EpisodesContainerHeader>
                <p>Episodes</p>

                <EpisodesFiltersForm onSubmit={handleEpisodeSearch}>
                  {isLoading && (
                    <Spinner color={colors.greenDark} size={30} thickness={3} />
                  )}

                  <EpisodeSearchInputContainer>
                    <input
                      type="text"
                      placeholder="Search episode"
                      onChange={e => {
                        episodeToSearchTmp = e.target.value;
                      }}
                    />

                    <button type="submit">
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

              <EpisodesListContainer>
                <EpisodesList podcast={podcast} />
              </EpisodesListContainer>
            </EpisodesContainer>
          </HasPodcastPageContainer>
        )}

        {!podcast && (
          <Spinner color={colors.greenDark} size={50} thickness={5} />
        )}
      </PageContent>
    </Container>
  );
};

export default Podcast;
