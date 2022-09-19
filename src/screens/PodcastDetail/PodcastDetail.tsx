import { EpisodesList } from "./components/EpisodesList";
import { Header } from "components/Header";
import { PodcastDetailCard } from "../../components/PodcastDetailCard";
import { PodcastFixture } from "tests/fixtures/Podcast";
import styles from "./PodcastDetail.module.css";
import { useFetchPodcastEpisodes } from "hooks/useFetchPodcastEpisodes";
import { useParams } from "react-router-dom";

export const PodcastDetail = () => {
  const { id } = useParams();
  const { podcastEpisodes } = useFetchPodcastEpisodes({ id });

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.detailContainer}>
        {/* TODO: Change this to get the podcast from cache */}
        <PodcastDetailCard podcast={PodcastFixture} />
        <EpisodesList podcastEpisodes={podcastEpisodes} />
      </div>
    </div>
  );
};

export default PodcastDetail;
