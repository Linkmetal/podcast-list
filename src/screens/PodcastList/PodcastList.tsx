import { Header } from "components/Header";
import { PodcastCard } from "./components/PodcastCard";
import styles from "./PodcastList.module.css";
import { useFetchPodcasts } from "hooks/useFetchPodcasts";

export const PodcastList = () => {
  const { podcasts } = useFetchPodcasts(
    {},
    { onError: (err) => console.error(err) }
  );

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.listContainer}>
        <div className={styles.podcastList}>
          {podcasts?.map((podcast) => (
            <PodcastCard
              key={podcast.id.attributes["im:id"]}
              podcast={podcast}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastList;
