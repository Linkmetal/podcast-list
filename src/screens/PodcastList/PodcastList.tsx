import { useEffect, useState } from "react";

import { Header } from "components/Header";
import { PodcastCard } from "./components/PodcastCard";
import { TextInput } from "components/TextInput";
import styles from "./PodcastList.module.css";
import { useFetchPodcasts } from "hooks/useFetchPodcasts";
import { useLoaderContext } from "contexts/LoaderContext/LoaderContext";

export const PodcastList = () => {
  const { setIsVisible } = useLoaderContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { podcasts, status } = useFetchPodcasts(
    { searchQuery },
    {
      onError: (err) => {
        console.error(err);
      },
    }
  );

  useEffect(() => {
    setIsVisible(status === "loading");
  }, [status, setIsVisible]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.searchFieldContainer}>
        <div className={styles.counter}>
          <h2>{podcasts?.length || "0"}</h2>
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
