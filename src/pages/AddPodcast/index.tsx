import React from 'react';
import {
  Container,
  AddPodcastPopupHeader,
  GoBackLink,
  PageContent,
  AddPodcastConfirmButton,
} from './styles';

import chevronLeftBlackIcon from '../../assets/chevron-left-black-icon.svg';

const AddPodcast: React.FC = () => (
  <Container>
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
