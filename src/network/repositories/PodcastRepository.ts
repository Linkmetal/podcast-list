import { ApiClient } from "network/ApiClient";

export const PodcastRepository = {
  fetch() {
    return ApiClient.get<{ searchQuery: string }, string>(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
  },
  details(id: string) {
    return ApiClient.get<string, string>(
      `https://itunes.apple.com/lookup?id=${id}`
    );
  },
};
