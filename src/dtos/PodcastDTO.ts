export default interface PodcastDTO {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  feedUrl: string;
  websiteUrl: string;
  isServiceAvailable: boolean;
  lastSuccessfulHealthcheckAt: string;
  textColor?: string;
  themeColor?: string;
}
