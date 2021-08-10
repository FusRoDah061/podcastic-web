import React from 'react';
import { Variants } from 'framer-motion';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  Container,
  AddPodcastPopupHeader,
  GoBackLink,
  PageContent,
  FlattenTabsContainer,
} from './styles';

import chevronLeftBlackIcon from '../../assets/chevron-left-black-icon.svg';
import PlayerAwareTitle from '../../components/PlayerAwareTitle';
import AddFeedTab from './AddFeedTab';
import SearchTab from './SearchTab';
import Tabs, { Tab } from '../../components/Tabs';
import useMatchMedia from '../../hooks/matchMedia';
import { device } from '../../styles/variables';

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
  const isTablet = useMatchMedia(device.tablet);

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
        {isTablet ? (
          <FlattenTabsContainer>
            <AddFeedTab />
            <SearchTab />
          </FlattenTabsContainer>
        ) : (
          <Tabs>
            <Tab
              label={intl.formatMessage({
                id: 'generic.feed',
                defaultMessage: 'Feed',
              })}
            >
              <AddFeedTab />
            </Tab>

            <Tab
              label={intl.formatMessage({
                id: 'generic.search',
                defaultMessage: 'Search',
              })}
            >
              <SearchTab />
            </Tab>
          </Tabs>
        )}
      </PageContent>
    </Container>
  );
};

export default AddPodcast;
