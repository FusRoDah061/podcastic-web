import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useAudioPlayer } from '../../hooks/audioPlayer';

interface PlayerAwareTitleProps {
  title: string;
}

const PlayerAwareTitle: React.FC<PlayerAwareTitleProps> = ({ title }) => {
  const player = useAudioPlayer();

  const playerAudio = useMemo(() => {
    return player.getAudio();
  }, [player]);

  return (
    <Helmet>
      <title>
        {playerAudio
          ? `${playerAudio.displayName} · ${playerAudio.author} | ${title}`
          : title}
      </title>
    </Helmet>
  );
};

export default PlayerAwareTitle;
