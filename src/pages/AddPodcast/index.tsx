import React, { FormEvent, useCallback, useState } from 'react';
import { Variants } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import {
  Container,
  AddPodcastPopupHeader,
  GoBackLink,
  PageContent,
  AddPodcastConfirmButton,
} from './styles';

import chevronLeftBlackIcon from '../../assets/chevron-left-black-icon.svg';
import { api } from '../../services/api';
import Spinner from '../../components/Spinner';

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
  const history = useHistory();
  const [feedUrl, setFeedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddPodcast = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (feedUrl && !isLoading) {
        setIsLoading(true);

        try {
          await api.post('/podcasts', {
            feedUrl,
          });

          history.goBack();
        } catch (err) {
          // console.log(err.request.response);
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
      <AddPodcastPopupHeader>
        <GoBackLink to="/">
          <img src={chevronLeftBlackIcon} alt="Go back" />
          New podcast feed
        </GoBackLink>
      </AddPodcastPopupHeader>

      <PageContent>
        <form onSubmit={handleAddPodcast}>
          <label htmlFor="js-feed-address">
            Feed address:
            <input
              id="js-feed-address"
              type="text"
              placeholder="https://cool-podcast.com/feed/"
              onChange={e => {
                setFeedUrl(e.target.value);
              }}
            />
          </label>

          <AddPodcastConfirmButton type="submit">
            {isLoading && <Spinner />}
            Add
          </AddPodcastConfirmButton>
        </form>
      </PageContent>
    </Container>
  );
};

export default AddPodcast;
