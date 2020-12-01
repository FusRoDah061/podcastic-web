import React from 'react';
import { AudioPlayerProvider } from './audioPlayer';

const HooksProvider: React.FC = ({ children }) => {
  return <AudioPlayerProvider>{children}</AudioPlayerProvider>;
};

export default HooksProvider;
