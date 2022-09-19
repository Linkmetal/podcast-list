export interface PodcastEpisode {
  country: string;
  artworkUrl600: string;
  description: string;
  releaseDate: string;
  trackId: number;
  trackName: string;
  artworkUrl60: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  episodeUrl: string;
  artistIds: any[];
  feedUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  trackTimeMillis: number;
  collectionViewUrl: string;
  episodeFileExtension: string;
  episodeContentType: string;
  artworkUrl160: string;
  previewUrl: string;
  shortDescription: string;
  genres: Genre[] | string[];
  episodeGuid: string;
  kind: string;
  wrapperType: string;
}

export interface Genre {
  name: string;
  id: string;
}
