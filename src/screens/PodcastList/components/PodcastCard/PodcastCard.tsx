import { Podcast } from "types/Podcast";
import styles from "./PodcastCard.module.css";

type PodcastCardProps = {
  podcast: Podcast;
};

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <a
      href={`/podcast/${podcast.id.attributes["im:id"]}`}
      className={styles.container}
      aria-label={`Navigate to ${podcast["im:name"].label}`}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={podcast["im:image"][0].label}
          alt="Podcast cover"
        />
      </div>
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <span>
            <strong>{podcast["im:name"].label}</strong>
          </span>
          <span>{podcast["im:artist"].label}</span>
        </div>
      </div>
    </a>
  );
};

export default PodcastCard;
