import { Link } from "react-router-dom";
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
    const parsedMinutes = minutes.toString().padStart(2, "0");
    const parsedSeconds = seconds.toString().padStart(2, "0");

    if (isNaN(seconds) || isNaN(minutes)) {
      return "--:--";
    }
    return `${parsedMinutes}:${parsedSeconds}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.episodeCount}>
        <h2>Episodes: {podcastEpisodes.length}</h2>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th className={styles.titleColumn}>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {podcastEpisodes.map((episode) => (
              <tr key={episode.trackId.toString()}>
                <td>
                  <Link
                    to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}
                  >
                    {episode.trackName}
                  </Link>
                </td>
                <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
                <td>
                  {millisecondsToDurationInMinutes(episode.trackTimeMillis)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpisodesList;
