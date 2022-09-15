import { Header } from "components/Header";
import styles from "./PodcastList.module.css";
import { useFetchPodcasts } from "hooks/useFetchPodcasts";

export const PodcastList = () => {
  const { podcasts } = useFetchPodcasts();

  console.log(podcasts);

  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default PodcastList;
