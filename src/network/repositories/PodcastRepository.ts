import { ApiClient } from "network/ApiClient";
import { Podcast } from "types/Podcast";

export const PodcastRepository = {
  fetch() {
    return ApiClient.get<undefined, Podcast[]>(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
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
  details(id: string) {
    return ApiClient.get<string, string>(
      `https://itunes.apple.com/lookup?id=${id}`
    );
  },
};
