import { PodcastEpisode } from "types/PodcastEpisodes";
import styles from "./EpisodesList.module.css";
import { useNavigate } from "react-router-dom";

type EpisodesListProps = {
  podcastEpisodes?: PodcastEpisode[];
};

export const EpisodesList = ({ podcastEpisodes = [] }: EpisodesListProps) => {
  const navigate = useNavigate();

  const millisecondsToDurationInMinutes = (millis: number) => {
    const millisInSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(millisInSeconds / 60);
    const seconds = Math.floor(millisInSeconds % 60);
    const parsedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const parsedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    if (isNaN(seconds) || isNaN(minutes)) {
      return "--:--";
    }
    return `${parsedMinutes}:${parsedSeconds}`;
  };

  const goToEpisodeDetail = (podcastId: string, episodeId: string) => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`);
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
                <td
                  onClick={() =>
                    goToEpisodeDetail(
                      episode.collectionId.toString(),
                      episode.trackId.toString()
                    )
                  }
                >
                  {episode.trackName}
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
