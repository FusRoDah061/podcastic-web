import React from 'react';
import { AudioPlayerProvider } from './audioPlayer';
import IntlProviderConfigured from './IntlProviderConfigured';
import { ToastProvider } from './toast';

const HooksProvider: React.FC = ({ children }) => {
  return (
    <IntlProviderConfigured>
      <ToastProvider>
        <AudioPlayerProvider>{children}</AudioPlayerProvider>
      </ToastProvider>
    </IntlProviderConfigured>
  );
};

export default HooksProvider;
