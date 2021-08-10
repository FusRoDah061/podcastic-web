import React, { FormEvent, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Spinner from '../../../components/Spinner';
import api from '../../../services/api';
import {
  AddPodcastConfirmButton,
  AddPodcastForm,
  AddFeedTabStyled,
} from './styles';

const AddFeedTab: React.FC = () => {
  const intl = useIntl();
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
        } catch (err) {
          if (err.request.parsedResponse) {
            setError(err.request.parsedResponse.message);
          }

          setIsLoading(false);
        }

        setIsLoading(false);
      }
    },
    [feedUrl, isLoading],
  );

  return (
    <AddFeedTabStyled>
      <AddPodcastForm onSubmit={handleAddPodcast}>
        <label htmlFor="js-feed-address">
          <FormattedMessage
            id="AddFeedTab.feedAddress"
            defaultMessage="RSS Feed address:"
          />

          <span>
            <FormattedMessage
              id="AddFeedTab.feedAddressDetail"
              defaultMessage="This is the address where new episodes are published. You usually find this at the publisher official page."
            />
          </span>

          <input
            id="js-feed-address"
            type="text"
            placeholder={intl.formatMessage({
              id: 'AddFeedTab.feedAddressPlaceholder',
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
          <FormattedMessage id="AddFeedTab.add" defaultMessage="Add" />
        </AddPodcastConfirmButton>
      </AddPodcastForm>
    </AddFeedTabStyled>
  );
};

export default AddFeedTab;
