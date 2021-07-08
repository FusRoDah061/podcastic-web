export default interface EpisodeDTO {
  id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  duration: string;
  existsOnFeed?: boolean;
  url: string;
  mediaType: string;
  sizeBytes?: number;
}
