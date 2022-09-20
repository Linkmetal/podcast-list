import { EpisodeInfoCard } from "./components/EpisodeInfoCard";
import { Header } from "components/Header";
import { PodcastDetailCard } from "components/PodcastDetailCard";
import styles from "./EpisodeDetail.module.css";
import { useFetchPodcastById } from "hooks/useFetchPodcastById";
import { useFetchPodcastEpisodesById } from "hooks/useFetchPodcastEpisodeById";
import { useParams } from "react-router-dom";

export const EpisodeDetail = () => {
  const { podcastId, episodeId } = useParams();
  const { podcast } = useFetchPodcastById(
    { id: podcastId },
    { enabled: !!podcastId, onError: (err) => console.error(err) }
  );
  const { episode } = useFetchPodcastEpisodesById(
    { podcastId, episodeId },
    { enabled: !!episodeId, onError: (err) => console.error(err) }
  );

  if (!podcast || !episode) return <div>TODO: Spinner</div>;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.detailContainer}>
        <PodcastDetailCard podcast={podcast} />
        <EpisodeInfoCard episode={episode} />
      </div>
    </div>
  );
};

export default EpisodeDetail;
