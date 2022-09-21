import { Link } from "react-router-dom";
import { Podcast } from "types/Podcast";
import styles from "./PodcastCard.module.css";

type PodcastCardProps = {
  podcast: Podcast;
};

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <Link
      className={styles.container}
      aria-label={`Navigate to ${podcast["im:name"].label}`}
      to={`/podcast/${podcast.id.attributes["im:id"]}`}
    >
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={podcast["im:image"][2].label}
            alt="Podcast cover"
          />
        </div>
        <div className={styles.textContainer}>
          <strong>{podcast["im:name"].label}</strong>
          <span>{podcast["im:artist"].label}</span>
        </div>
      </div>
    </Link>
  );
};

export default PodcastCard;
