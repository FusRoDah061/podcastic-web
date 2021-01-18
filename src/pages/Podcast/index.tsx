import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Variants } from 'framer-motion';
import { FormattedMessage, useIntl } from 'react-intl';
import { parseISO } from 'date-fns';
import PodcastDTO from '../../dtos/PodcastDTO';
import api from '../../services/api';
import {
  Container,
  HeaderContainer,
  LogoLink,
  GoBackLink,
  PageContent,
  HasPodcastPageContainer,
  PodcastInfo,
  PodcastInfoContent,
  PodcastNameDescription,
  PodcastLinks,
  PodcastAvalabilityWarningContainer,
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
import EpisodeDTO from '../../dtos/EpisodeDTO';
import EpisodesList from '../../components/EpisodesList';
import { useAudioPlayer } from '../../hooks/audioPlayer';
import RandomEpisode from '../../components/RandomEpisode';
import Spinner from '../../components/Spinner';
import { colors } from '../../styles/variables';

import chevronLeftWhiteIcon from '../../assets/chevron-left-white-icon.svg';
import chevronDownGreenIcon from '../../assets/chevron-down-green-icon.svg';
import searchIconBlack from '../../assets/search-black-icon.svg';
import logoImg from '../../assets/podcastic-green-logo.svg';
import rssIcon from '../../assets/rss_icon_gray.svg';
import externalLinkIcon from '../../assets/external_link_icon_gray.svg';
import warningIcon from '../../assets/warning_icon_red.svg';
import formatDate from '../../utils/formatDate';

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
  const intl = useIntl();
  const player = useAudioPlayer();
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
      if (!isPlaying && podcast) {
        player.play({
          id: episode._id,
          displayName: episode.title,
          author: podcast?.name,
          artworkUrl: episode.image || podcast.imageUrl,
          mediaUrl: episode.file.url,
          mediaType: episode.file.mediaType,
          duration: episode.duration,
        });
      } else {
        player.pause();
      }
    },
    [player, podcast],
  );

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeaderContainer>
        <LogoLink to="/">
          <img src={logoImg} alt="Podcastic" />
        </LogoLink>

        <GoBackLink to="/">
          <img
            src={chevronLeftWhiteIcon}
            alt={intl.formatMessage({
              id: 'generic.goBack',
              defaultMessage: 'Go back',
            })}
          />
          {podcast
            ? podcast.name
            : intl.formatMessage({
                id: 'generic.goBack',
                defaultMessage: 'Go back',
              })}
        </GoBackLink>
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

                  <PodcastLinks>
                    <a
                      href={podcast.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={externalLinkIcon}
                        alt={intl.formatMessage({
                          id: 'podcast.officialWebsiteLink',
                          defaultMessage: 'Official website link',
                        })}
                      />

                      <FormattedMessage
                        id="podcast.officialWebsite"
                        defaultMessage="Official website"
                      />
                    </a>
                    <a href={podcast.feedUrl} target="_blank" rel="noreferrer">
                      <img
                        src={rssIcon}
                        alt={intl.formatMessage({
                          id: 'podcast.feedLink',
                          defaultMessage: 'Feed link',
                        })}
                      />

                      <FormattedMessage
                        id="podcast.feed"
                        defaultMessage="Feed"
                      />
                    </a>
                  </PodcastLinks>

                  <p title={podcast.description}>{podcast.description}</p>
                </PodcastNameDescription>
              </PodcastInfoContent>

              {!podcast.isServiceAvailable && (
                <PodcastAvalabilityWarningContainer>
                  <img
                    src={warningIcon}
                    alt={intl.formatMessage({
                      id: 'generic.warning',
                      defaultMessage: 'Warning',
                    })}
                  />
                  <p>
                    <FormattedMessage
                      id="podcast.weCantReachFeed"
                      defaultMessage="We can't reach this podcast feed since {date}"
                      values={{
                        date: formatDate(
                          parseISO(podcast.lastSuccessfulHealthcheckAt),
                        ),
                      }}
                    />
                  </p>
                </PodcastAvalabilityWarningContainer>
              )}

              <RandomEpisodeButton
                type="button"
                onClick={handleShowRandomEpisode}
              >
                <FormattedMessage
                  id="podcast.pickARandomEpisode"
                  defaultMessage="Pick a random episode"
                />
              </RandomEpisodeButton>

              <RandomEpisodePopupContainer visible={showRandomEpisode}>
                <RandomEpisodePopup>
                  <RandomEpisodePopupHeader>
                    <p>
                      <FormattedMessage
                        id="podcast.weGotyou"
                        defaultMessage="We got you!"
                      />
                    </p>
                  </RandomEpisodePopupHeader>

                  <RandomEpisodePopupBody>
                    <p>
                      <FormattedMessage
                        id="podcast.heresYourRandomlyPickedEpisode"
                        defaultMessage="Here’s your randomly picked episode:"
                      />
                    </p>

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
                      <FormattedMessage
                        id="podcast.cancel"
                        defaultMessage="Cancel"
                      />
                    </button>
                    <button type="button" onClick={handleTryAgainRandomEpisode}>
                      <FormattedMessage
                        id="podcast.tryAgain"
                        defaultMessage="Try again"
                      />
                    </button>
                  </RandomEpisodePopupFooter>
                </RandomEpisodePopup>
              </RandomEpisodePopupContainer>
            </PodcastInfo>

            <EpisodesContainer>
              <EpisodesContainerHeader>
                <p>
                  <FormattedMessage
                    id="podcast.episodes"
                    defaultMessage="Episodes"
                  />
                </p>

                <EpisodesFiltersForm onSubmit={handleEpisodeSearch}>
                  {isLoading && (
                    <Spinner color={colors.greenDark} size={30} thickness={3} />
                  )}

                  <EpisodeSearchInputContainer>
                    <input
                      type="text"
                      placeholder={intl.formatMessage({
                        id: 'podcast.searchEpisode',
                        defaultMessage: 'Search episode',
                      })}
                      onChange={e => {
                        episodeToSearchTmp = e.target.value;
                      }}
                    />

                    <button
                      type="submit"
                      title={intl.formatMessage({
                        id: 'podcast.searchEpisode',
                        defaultMessage: 'Search episode',
                      })}
                    >
                      <img
                        src={searchIconBlack}
                        alt={intl.formatMessage({
                          id: 'podcast.searchEpisode',
                          defaultMessage: 'Search episode',
                        })}
                      />
                    </button>
                  </EpisodeSearchInputContainer>

                  <EpisodesSortSelectContainer>
                    <select
                      defaultValue={sort}
                      onChange={e => setSort(e.target.value)}
                    >
                      <option value="newest">
                        {intl.formatMessage({
                          id: 'podcast.newest',
                          defaultMessage: 'Newest',
                        })}
                      </option>
                      <option value="oldest">
                        {intl.formatMessage({
                          id: 'podcast.oldest',
                          defaultMessage: 'Oldest',
                        })}
                      </option>
                      <option value="longest">
                        {intl.formatMessage({
                          id: 'podcast.longest',
                          defaultMessage: 'Longest',
                        })}
                      </option>
                      <option value="shortest">
                        {intl.formatMessage({
                          id: 'podcast.shortest',
                          defaultMessage: 'Shortest',
                        })}
                      </option>
                    </select>
                    <img src={chevronDownGreenIcon} alt="V" />
                  </EpisodesSortSelectContainer>

                  <MobileEpisodeSearchLink to={`/podcast/${podcastId}/search`}>
                    <img
                      src={searchIconBlack}
                      alt={intl.formatMessage({
                        id: 'podcast.searchEpisode',
                        defaultMessage: 'Search episode',
                      })}
                    />
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
