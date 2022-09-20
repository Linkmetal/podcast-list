import { Podcast } from "types/Podcast";
import styles from "./PodcastDetailCard.module.css";

type PodcastDetailCardProps = {
  podcast?: Podcast;
};

export const PodcastDetailCard = ({ podcast }: PodcastDetailCardProps) => {
  if (!podcast) return <div>"TODO: Spinner"</div>;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={podcast["im:image"][2].label}
          alt={`${podcast["im:artist"].label} cover`}
        />
      </div>
      <hr />
      <div className={styles.nameContainer}>
        <strong>{podcast["im:name"].label}</strong>
        <i>by {podcast["im:artist"].label}</i>
      </div>
      <hr />
      <div className={styles.descriptionContainer}>
        <p>
          <strong>Description:</strong>
        </p>
        <i>{podcast.summary.label}</i>
      </div>
    </div>
  );
};

export default PodcastDetailCard;
