export default interface EpisodeDTO {
  id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  duration: string;
  existsOnFeed?: boolean;
  file: {
    url: string;
    mediaType: string;
  };
}
