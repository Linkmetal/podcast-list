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

const createKey = () => ["fetch-podcasts"];

const queryFetcher = () => () => {
  return PodcastRepository.fetch();
};

export const useFetchPodcasts = (
  params: FetchPodcasts.Params,
  options?: FetchPodcasts.Options
) => {
  const { data, ...rest } = useQuery<
    FetchPodcasts.Response,
    FetchPodcasts.Error
  >(createKey(), queryFetcher(), options);

  if (data && params && params.searchQuery !== undefined) {
    const filter = (podcast: Podcast, key: "im:name" | "im:artist") => {
      return podcast[key].label
        .toLowerCase()
        .includes(params?.searchQuery?.toLocaleLowerCase() || "");
    };

    const artistFilter = (podcast: Podcast) => filter(podcast, "im:artist");

    const nameFilter = (podcast: Podcast) => filter(podcast, "im:name");

    const result = data?.filter(
      (podcast) => artistFilter(podcast) || nameFilter(podcast)
    );

    return { podcasts: result, ...rest };
  }
  return { podcasts: data, ...rest };
};
