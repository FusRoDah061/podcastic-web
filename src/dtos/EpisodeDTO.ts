export default interface EpisodeDTO {
  _id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  duration: string;
  file: {
    url: string;
    mediaType: string;
  };
}
