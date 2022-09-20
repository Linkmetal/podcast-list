import { Header } from "components/Header";
import { PodcastCard } from "./components/PodcastCard";
import { TextInput } from "components/TextInput";
import styles from "./PodcastList.module.css";
import { useFetchPodcasts } from "hooks/useFetchPodcasts";
import { useState } from "react";

export const PodcastList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { podcasts } = useFetchPodcasts(
    { searchQuery },
    { onError: (err) => console.error(err) }
  );

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.searchFieldContainer}>
        <div className={styles.counter}>
          <h2>{podcasts?.length}</h2>
        </div>

        <TextInput
          onChange={setSearchQuery}
          value={searchQuery}
          placeholder="Filter podcasts..."
        />
      </div>
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
