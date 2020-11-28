import React from 'react';
import AudioPlayer from '../components/AudioPlayer';

const HooksProvider: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <AudioPlayer />
    </>
  );
};

export default HooksProvider;
