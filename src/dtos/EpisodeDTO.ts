export default interface EpisodeDTO {
  _id: string;
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
