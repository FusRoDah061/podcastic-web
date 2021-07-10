import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import PodcastDTO from '../../dtos/PodcastDTO';
import { useAudioPlayer } from '../../hooks/audioPlayer';
import EpisodeItem from '../EpisodeItem';
import { EpisodesListStyled } from './styles';

interface EpisodesListProps {
  podcast: PodcastDTO;
  episodes: EpisodeDTO[];
}

const EpisodesList: React.FC<EpisodesListProps> = ({ podcast, episodes }) => {
  const player = useAudioPlayer();
  const theme = useTheme();

  const handlePlayEpisode = useCallback(
    (episode: EpisodeDTO, isPlaying: boolean) => {
      if (!isPlaying) {
        player.play({
          id: episode.id,
          displayName: episode.title,
          author: podcast.name,
          artworkUrl: episode.image || podcast.imageUrl,
          mediaUrl: episode.url,
          mediaType: episode.mediaType,
          duration: episode.duration,
          theme,
        });
      } else {
        player.pause();
      }
    },
    [player, podcast, theme],
  );

  return (
    <EpisodesListStyled>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>
            <EpisodeItem episode={episode} onPlay={handlePlayEpisode} />
          </li>
        ))}
      </ul>
    </EpisodesListStyled>
  );
};

export default EpisodesList;
