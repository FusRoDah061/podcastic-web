import React from 'react';
import { Variants } from 'framer-motion';
import {
  Container,
  AddPodcastPopupHeader,
  GoBackLink,
  PageContent,
  AddPodcastConfirmButton,
} from './styles';

import chevronLeftBlackIcon from '../../assets/chevron-left-black-icon.svg';

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

const AddPodcast: React.FC = () => (
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
      <label htmlFor="js-rss-feed-address">
        RSS feed address:
        <input
          id="js-rss-feed-address"
          type="text"
          placeholder="https://cool-podcast.com/feed/rss"
        />
      </label>

      <AddPodcastConfirmButton type="button">Add</AddPodcastConfirmButton>
    </PageContent>
  </Container>
);

export default AddPodcast;
