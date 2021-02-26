import React, { FormEvent, useCallback, useState } from 'react';
import { Variants } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  Container,
  AddPodcastPopupHeader,
  GoBackLink,
  PageContent,
  AddPodcastConfirmButton,
} from './styles';

import chevronLeftBlackIcon from '../../assets/chevron-left-black-icon.svg';
import api from '../../services/api';
import Spinner from '../../components/Spinner';
import PlayerAwareTitle from '../../components/PlayerAwareTitle';

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

const AddPodcast: React.FC = () => {
  const intl = useIntl();
  const history = useHistory();
  const [feedUrl, setFeedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddPodcast = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (feedUrl && !isLoading) {
        setIsLoading(true);

        try {
          await api.addPodcast(feedUrl);

          history.goBack();
        } catch (err) {
          if (err.request.parsedResponse) {
            setError(err.request.parsedResponse.message);
          }

          setIsLoading(false);
        }

        setIsLoading(false);
      }
    },
    [feedUrl, history, isLoading],
  );

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PlayerAwareTitle
        title={intl.formatMessage({
          id: 'addPodcast.title',
          defaultMessage: 'Add new podcast - Podcastic',
        })}
      />

      <AddPodcastPopupHeader>
        <GoBackLink to="/">
          <img
            src={chevronLeftBlackIcon}
            alt={intl.formatMessage({
              id: 'generic.goBack',
              defaultMessage: 'Go back',
            })}
          />
          <FormattedMessage
            id="addPodcast.newPodcastFeed"
            defaultMessage="New podcast feed"
          />
        </GoBackLink>
      </AddPodcastPopupHeader>

      <PageContent>
        <form onSubmit={handleAddPodcast}>
          <label htmlFor="js-feed-address">
            <FormattedMessage
              id="addPodcast.feedAddress"
              defaultMessage="Feed address:"
            />

            <input
              id="js-feed-address"
              type="text"
              placeholder={intl.formatMessage({
                id: 'addPodcast.feedAddressPlaceholder',
                defaultMessage: 'https://cool-podcast.com/feed/',
              })}
              onChange={e => {
                setFeedUrl(e.target.value);
              }}
            />
          </label>

          {error && <span>{error}</span>}

          <AddPodcastConfirmButton type="submit">
            {isLoading && <Spinner />}
            <FormattedMessage id="addPodcast.add" defaultMessage="Add" />
          </AddPodcastConfirmButton>
        </form>
      </PageContent>
    </Container>
  );
};

export default AddPodcast;
