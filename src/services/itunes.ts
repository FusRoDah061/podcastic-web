import axios, { AxiosResponse } from 'axios';
import ItunesPodcastDTO from '../dtos/ItunesPodcastDTO';

type ApiResponse<T> = Promise<AxiosResponse<T>>;

interface ItunesResponse<T> {
  results: T[];
}

interface ItunesErrorResponse {
  errorMessage: string;
}

interface ItunesParamsDTO {
  term?: string;
  limit?: number;
  media?:
    | 'movie'
    | 'podcast'
    | 'music'
    | 'musicVideo'
    | 'audiobook'
    | 'shortFilm'
    | 'tvShow'
    | 'software'
    | 'ebook'
    | 'all';
}

const itunes = axios.create({
  baseURL: process.env.REACT_APP_ITUNES_BASE_URL ?? 'https://itunes.apple.com',
});

itunes.interceptors.response.use(undefined, error => {
  const newError = error;

  if (error.request.response) {
    newError.request.parsedResponse = JSON.parse(
      error.request.response,
    ) as ItunesErrorResponse;
  }

  return Promise.reject(newError);
});

export default {
  search: (
    params: ItunesParamsDTO,
  ): ApiResponse<ItunesResponse<ItunesPodcastDTO>> =>
    itunes.get<ItunesResponse<ItunesPodcastDTO>>('/search', {
      params: { term: encodeURI(params.term ?? ''), ...params },
    }),
};
