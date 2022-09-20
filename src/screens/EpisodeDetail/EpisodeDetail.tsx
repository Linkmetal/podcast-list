import { EpisodeInfoCard } from "./components/EpisodeInfoCard";
import { Header } from "components/Header";
import { PodcastDetailCard } from "components/PodcastDetailCard";
import { PodcastEpisodeFixture } from "tests/fixtures/PodcastEpisode";
import { PodcastFixture } from "tests/fixtures/Podcast";
import styles from "./EpisodeDetail.module.css";

export const EpisodeDetail = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.detailContainer}>
        {/* TODO: Change this to get the podcast from cache */}
        <PodcastDetailCard podcast={PodcastFixture} />
        {/* TODO: Change this to get the podcast from cache */}
        <EpisodeInfoCard episode={PodcastEpisodeFixture} />
      </div>
    </div>
  );
};

export default EpisodeDetail;
