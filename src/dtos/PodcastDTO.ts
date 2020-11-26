import EpisodeDTO from './EpisodeDTO';

export default interface PodcastDTO {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  feedUrl: string;
  websiteUrl: string;
  episodes: Array<EpisodeDTO>;
}
