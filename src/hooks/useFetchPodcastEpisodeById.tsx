import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { AxiosError } from "axios";
import { PodcastEpisode } from "types/PodcastEpisodes";
import { PodcastRepository } from "network/repositories/PodcastRepository";

export type FetchPodcastEpisodesParams = {
  podcastId?: string;
  episodeId?: string;
};

export namespace FetchPodcastEpisodesById {
  export type Params = FetchPodcastEpisodesParams;
  export type Response = PodcastEpisode[];
  export type Error = AxiosError<string>;
  export type Options = UseQueryOptions<Response, Error>;
}

const createKey = () => ["fetch-podcast-episodes"];

const queryFetcher = (params: FetchPodcastEpisodesById.Params) => () => {
  if (!params.podcastId) return [];
  return PodcastRepository.episodes({ id: params.podcastId });
};

export const useFetchPodcastEpisodesById = (
  params: FetchPodcastEpisodesById.Params,
  options?: FetchPodcastEpisodesById.Options
) => {
  const { data, ...rest } = useQuery<
    FetchPodcastEpisodesById.Response,
    FetchPodcastEpisodesById.Error
  >(createKey(), queryFetcher(params), options);

  const result = data?.find(
    (episode) => episode.trackId.toString() === params.episodeId
  );

  return { episode: result, ...rest };
};
