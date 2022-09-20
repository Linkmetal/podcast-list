import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { AxiosError } from "axios";
import { Podcast } from "types/Podcast";
import { PodcastRepository } from "network/repositories/PodcastRepository";

export type FetchPodcastsParams = {
  searchQuery?: string;
};

export namespace FetchPodcasts {
  export type Params = FetchPodcastsParams;
  export type Response = Podcast[];
  export type Error = AxiosError<string>;
  export type Options = UseQueryOptions<Response, Error>;
}

const createKey = (params: FetchPodcasts.Params) => ["fetch-podcasts"];

const queryFetcher = () => async () => {
  return await PodcastRepository.fetch();
};

export const useFetchPodcasts = (
  params: FetchPodcasts.Params,
  options?: FetchPodcasts.Options
) => {
  const { data, ...rest } = useQuery<
    FetchPodcasts.Response,
    FetchPodcasts.Error
  >(createKey(params), queryFetcher(), options);

  if (params && params.searchQuery !== undefined) {
    data?.filter((podcast) =>
      podcast["im:artist"].label.includes(params?.searchQuery || "")
    );
  }
  return { podcasts: data, ...rest };
};
