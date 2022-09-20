import { EpisodesList } from "./components/EpisodesList";
import { Header } from "components/Header";
import { Loader } from "components/Loader";
import { PodcastDetailCard } from "../../components/PodcastDetailCard";
import styles from "./PodcastDetail.module.css";
import { useEffect } from "react";
import { useFetchPodcastById } from "hooks/useFetchPodcastById";
import { useFetchPodcastEpisodes } from "hooks/useFetchPodcastEpisodes";
import { useLoaderContext } from "contexts/LoaderContext/LoaderContext";
import { useLocation } from "react-router-dom";

export const PodcastDetail = () => {
  const { pathname } = useLocation();
  const { setIsVisible } = useLoaderContext();

  const id = pathname.split("/")[2];

  const { podcastEpisodes, status: podcastEpisodesStatus } =
    useFetchPodcastEpisodes(
      { id },
      { enabled: !!id, onError: (err) => console.error(err) }
    );

  const { podcast, status: podcastsStatus } = useFetchPodcastById(
    { id },
    { enabled: !!id, onError: (err) => console.error(err) }
  );

  useEffect(() => {
    setIsVisible(
      podcastsStatus === "loading" || podcastEpisodesStatus === "loading"
    );
  }, [podcastsStatus, podcastEpisodesStatus, setIsVisible]);

  if (!podcast) return <Loader isVisible />;

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
