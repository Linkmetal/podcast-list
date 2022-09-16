import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { AxiosError } from "axios";
import { PodcastRepository } from "network/repositories/PodcastRepository";

export type FetchPodcastsParams = {
  searchQuery?: string;
};

export namespace FetchPodcasts {
  export type Params = FetchPodcastsParams;
  export type Response = any[];
  export type Error = AxiosError<string>;
  export type Options = UseQueryOptions<Response, Error>;
}

const createKey = (params: FetchPodcasts.Params = {}) => [
  "fetch-podcasts",
  JSON.stringify(params),
];

const queryFetcher = () => async () => {
  return await PodcastRepository.fetch();
};

export const useFetchPodcasts = (
  params?: FetchPodcasts.Params,
  options?: FetchPodcasts.Options
) => {
  const { data, ...rest } = useQuery<
    FetchPodcasts.Response,
    FetchPodcasts.Error
  >(createKey(params), queryFetcher(), options);
  return { podcasts: data, ...rest };
};
