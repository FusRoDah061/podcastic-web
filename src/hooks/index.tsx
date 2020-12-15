import React from 'react';
import { AudioPlayerProvider } from './audioPlayer';
import IntlProviderConfigured from './IntlProviderConfigured';

const HooksProvider: React.FC = ({ children }) => {
  return (
    <IntlProviderConfigured>
      <AudioPlayerProvider>{children}</AudioPlayerProvider>
    </IntlProviderConfigured>
  );
};

export default HooksProvider;
