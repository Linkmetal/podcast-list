import { ApiClient } from "network/ApiClient";
import { FetchPodcastEpisodes } from "hooks/useFetchPodcastEpisodes";
import { Podcast } from "types/Podcast";
import { PodcastEpisode } from "types/PodcastEpisodes";

export const PodcastRepository = {
  fetch() {
    // NOTE: limit is 101 because sometimes it returns 99 elements instead of 100
    return ApiClient.get<undefined, Podcast[]>(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=101/genre=1310/json",
      {
        transformResponse: [
          (data) => {
            const formattedData = JSON.parse(data);
            return formattedData.feed.entry;
          },
        ],
      }
    );
  },
  episodes(params: FetchPodcastEpisodes.Params) {
    return ApiClient.get<FetchPodcastEpisodes.Params, PodcastEpisode[]>(
      `https://itunes.apple.com/lookup?id=${params.id}&media=podcast&entity=podcastEpisode&limit=200`,
      {
        transformResponse: [
          (data) => {
            const formattedData = JSON.parse(data);
            formattedData.results.shift();
            return formattedData.results;
          },
        ],
      }
    );
  },
};
