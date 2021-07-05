import React, { useCallback } from 'react';
import EpisodeDTO from '../../dtos/EpisodeDTO';
import PodcastDTO from '../../dtos/PodcastDTO';
import { useAudioPlayer } from '../../hooks/audioPlayer';
import EpisodeItem from '../EpisodeItem';
import { EpisodesListStyled } from './styles';

interface EpisodesListProps {
  podcast: PodcastDTO;
}

const EpisodesList: React.FC<EpisodesListProps> = ({ podcast }) => {
  const player = useAudioPlayer();

  const handlePlayEpisode = useCallback(
    (episode: EpisodeDTO, isPlaying: boolean) => {
      if (!isPlaying) {
        player.play({
          id: episode.id,
          displayName: episode.title,
          author: podcast.name,
          artworkUrl: episode.image || podcast.imageUrl,
          mediaUrl: episode.file.url,
          mediaType: episode.file.mediaType,
          duration: episode.duration,
        });
      } else {
        player.pause();
      }
    },
    [player, podcast],
  );

  return (
    <EpisodesListStyled>
      <ul>
        {podcast.episodes.map(episode => (
          <li key={episode.id}>
            <EpisodeItem episode={episode} onPlay={handlePlayEpisode} />
          </li>
        ))}
      </ul>
    </EpisodesListStyled>
  );
};

export default EpisodesList;
