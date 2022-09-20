import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { AxiosError } from "axios";
import { PodcastEpisode } from "types/PodcastEpisodes";
import { PodcastRepository } from "network/repositories/PodcastRepository";

export type FetchPodcastEpisodesParams = {
  id?: string;
};

export namespace FetchPodcastEpisodes {
  export type Params = FetchPodcastEpisodesParams;
  export type Response = PodcastEpisode[];
  export type Error = AxiosError<string>;
  export type Options = UseQueryOptions<Response, Error>;
}

const createKey = (params: FetchPodcastEpisodes.Params = {}) => [
  "fetch-podcast-episodes",
  JSON.stringify(params),
];

const queryFetcher = (params: FetchPodcastEpisodes.Params) => () => {
  return PodcastRepository.episodes(params);
};

export const useFetchPodcastEpisodes = (
  params: FetchPodcastEpisodes.Params,
  options?: FetchPodcastEpisodes.Options
) => {
  const { data, ...rest } = useQuery<
    FetchPodcastEpisodes.Response,
    FetchPodcastEpisodes.Error
  >(createKey(params), queryFetcher(params), options);
  return { podcastEpisodes: data, ...rest };
};
