import axios, { AxiosResponse } from 'axios';
import EpisodeDTO from '../dtos/EpisodeDTO';
import PodcastDTO from '../dtos/PodcastDTO';
import { getLocale } from '../utils/localeUtils';

type ApiResponse<T> = Promise<AxiosResponse<T>>;

interface GetEpisodesParams {
  podcastId: string;
  sort?: string;
  episodeToSearch?: string;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(request => {
  const newRequest = request;

  newRequest.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': getLocale(),
  };

  return newRequest;
});

api.interceptors.response.use(undefined, error => {
  const newError = error;

  if (error.request.response) {
    newError.request.parsedResponse = JSON.parse(error.request.response);
  }

  return Promise.reject(newError);
});

export default {
  addPodcast: (feedUrl: string): ApiResponse<void> =>
    api.post<void>('/podcasts', { feedUrl }),

  getAllPodcasts: (): ApiResponse<PodcastDTO[]> =>
    api.get<PodcastDTO[]>('/podcasts'),

  getRecentPodcasts: (): ApiResponse<PodcastDTO[]> =>
    api.get<PodcastDTO[]>('/podcasts/recent'),

  searchPodcasts: (name: string): ApiResponse<PodcastDTO[]> =>
    api.get<PodcastDTO[]>('/podcasts/search', { params: { q: name } }),

  getPodcast: (podcastId: string): ApiResponse<PodcastDTO> =>
    api.get(`/podcasts/${podcastId}`),

  getEpisodes: ({
    podcastId,
    sort,
    episodeToSearch,
  }: GetEpisodesParams): ApiResponse<EpisodeDTO[]> =>
    api.get(`/podcasts/${podcastId}/episodes`, {
      params: {
        sort,
        q: episodeToSearch,
      },
    }),

  getRandomEpisode: (podcastId: string): ApiResponse<EpisodeDTO> =>
    api.get(`/podcasts/${podcastId}/episodes/random`),
};
