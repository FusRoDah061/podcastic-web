export default interface EpisodeDTO {
  _id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  duration: string;
  formattedDate?: string;
  formattedDateAsTimeAgo?: string;
  file: {
    url: string;
  };
}
