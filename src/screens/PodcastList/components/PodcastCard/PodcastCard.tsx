import { Podcast } from "types/Podcast";
import styles from "./PodcastCard.module.css";
import { useNavigate } from "react-router-dom";

type PodcastCardProps = {
  podcast: Podcast;
};

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  const navigate = useNavigate();
  const goToPodcastDetail = (id: string) => {
    navigate(`/podcast/${id}`);
  };

  return (
    <div
      onClick={() => goToPodcastDetail(podcast.id.attributes["im:id"])}
      className={styles.container}
      aria-label={`Navigate to ${podcast["im:name"].label}`}
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
    </div>
  );
};

export default PodcastCard;
