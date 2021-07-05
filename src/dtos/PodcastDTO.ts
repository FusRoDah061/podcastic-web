import EpisodeDTO from './EpisodeDTO';

export default interface PodcastDTO {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  feedUrl: string;
  websiteUrl: string;
  episodes: Array<EpisodeDTO>;
  isServiceAvailable: boolean;
  lastSuccessfulHealthcheckAt: string;
  textColor?: string;
  themeColor?: string;
}
