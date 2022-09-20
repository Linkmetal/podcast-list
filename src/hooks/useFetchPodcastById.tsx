import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { AxiosError } from "axios";
import { Podcast } from "types/Podcast";
import { PodcastRepository } from "network/repositories/PodcastRepository";

export type FetchPodcastsByIdParams = {
  id?: string;
};

export namespace FetchPodcastsById {
  export type Params = FetchPodcastsByIdParams;
  export type Response = Podcast[];
  export type Error = AxiosError<string>;
  export type Options = UseQueryOptions<Response, Error>;
}

const createKey = () => ["fetch-podcasts"];

const queryFetcher = () => () => {
  return PodcastRepository.fetch();
};

export const useFetchPodcastById = (
  params: FetchPodcastsById.Params,
  options?: FetchPodcastsById.Options
) => {
  const { data, ...rest } = useQuery<
    FetchPodcastsById.Response,
    FetchPodcastsById.Error
  >(createKey(), queryFetcher(), options);

  const result = data?.find(
    (podcast) => podcast.id.attributes["im:id"] === params.id
  );

  return { podcast: result, ...rest };
};
