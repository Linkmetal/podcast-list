import { EpisodesList } from "./components/EpisodesList";
import { Header } from "components/Header";
import { PodcastDetailCard } from "../../components/PodcastDetailCard";
import styles from "./PodcastDetail.module.css";
import { useFetchPodcastById } from "hooks/useFetchPodcastById";
import { useFetchPodcastEpisodes } from "hooks/useFetchPodcastEpisodes";
import { useLocation } from "react-router-dom";

export const PodcastDetail = () => {
  const { pathname } = useLocation();

  const id = pathname.split("/")[2];

  const { podcastEpisodes } = useFetchPodcastEpisodes(
    { id },
    { enabled: !!id, onError: (err) => console.error(err) }
  );

  const { podcast } = useFetchPodcastById(
    { id },
    { enabled: !!id, onError: (err) => console.error(err) }
  );

  if (!podcast) return <div>TODO: Spinner</div>;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.detailContainer}>
        <PodcastDetailCard podcast={podcast} />
        <EpisodesList podcastEpisodes={podcastEpisodes} />
      </div>
    </div>
  );
};

export default PodcastDetail;
