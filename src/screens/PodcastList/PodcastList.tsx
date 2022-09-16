import { Header } from "components/Header";
import { PodcastCard } from "./components/PodcastCard";
import styles from "./PodcastList.module.css";
import { useFetchPodcasts } from "hooks/useFetchPodcasts";

export const PodcastList = () => {
  const { podcasts } = useFetchPodcasts();
  console.log(
    "🚀 ~ file: PodcastList.tsx ~ line 8 ~ PodcastList ~ podcasts",
    podcasts
  );

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.listContainer}>
        <div className={styles.podcastList}>
          {podcasts?.map((podcast) => (
            <PodcastCard podcast={podcast} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastList;
