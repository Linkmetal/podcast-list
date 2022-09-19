import { PodcastEpisode } from "types/PodcastEpisodes";
import styles from "./EpisodesList.module.css";

type EpisodesListProps = {
  podcastEpisodes?: PodcastEpisode[];
};

export const EpisodesList = ({ podcastEpisodes = [] }: EpisodesListProps) => {
  const millisecondsToDurationInMinutes = (millis: number) => {
    const millisInSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(millisInSeconds / 60);
    const seconds = Math.floor(millisInSeconds % 60);
    const parsedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const parsedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${parsedMinutes}:${parsedSeconds}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.episodeCount}>
        <h2>Episodes: {podcastEpisodes.length}</h2>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <tr>
            <th className={styles.titleColumn}>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
          {podcastEpisodes.map((episode) => (
            <tr key={episode.trackId.toString()}>
              <td>
                <a
                  href={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}
                >
                  {episode.trackName}
                </a>
              </td>
              <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
              <td>
                {millisecondsToDurationInMinutes(episode.trackTimeMillis)}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default EpisodesList;
