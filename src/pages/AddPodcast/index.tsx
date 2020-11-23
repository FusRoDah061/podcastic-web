import React, { useCallback, useState } from 'react';
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
  const addPodcast = useCallback(async () => {
    if (feedUrl) {
      await api.post('/podcasts', {
        feedUrl,
      });

      history.goBack();
    }
  }, [feedUrl, history]);

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

        <AddPodcastConfirmButton onClick={addPodcast} type="button">
          Add
        </AddPodcastConfirmButton>
      </PageContent>
    </Container>
  );
};

export default AddPodcast;
