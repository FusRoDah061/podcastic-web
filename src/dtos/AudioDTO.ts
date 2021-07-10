import { PodcastTheme } from '../styles/globals';

export interface AudioDTO {
  id: string;
  displayName: string;
  author: string;
  artworkUrl?: string;
  mediaUrl: string;
  mediaType: string;
  duration: string;
  theme?: PodcastTheme;
}
