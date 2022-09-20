import { PodcastEpisode } from "types/PodcastEpisodes";
import styles from "./EpisodeInfoCard.module.css";

type EpisodeInfoCardProps = {
  episode: PodcastEpisode;
};

export const EpisodeInfoCard = ({ episode }: EpisodeInfoCardProps) => {
  return (
    <div className={styles.container}>
      <h2>
        <strong>{episode.trackName}</strong>
      </h2>

      <hr />
      <div className={styles.descriptionContainer}>
        <i>{episode.description}</i>
      </div>
      <hr />
      <div className={styles.playerContainer}>
        <audio
          src={episode.previewUrl}
          aria-label="Episode audio player"
          controls
        />
      </div>
    </div>
  );
};

export default EpisodeInfoCard;
