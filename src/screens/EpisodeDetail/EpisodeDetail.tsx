import { EpisodeInfoCard } from "./components/EpisodeInfoCard";
import { Header } from "components/Header";
import { Loader } from "components/Loader";
import { PodcastDetailCard } from "components/PodcastDetailCard";
import styles from "./EpisodeDetail.module.css";
import { useEffect } from "react";
import { useFetchPodcastById } from "hooks/useFetchPodcastById";
import { useFetchPodcastEpisodesById } from "hooks/useFetchPodcastEpisodeById";
import { useLoaderContext } from "contexts/LoaderContext/LoaderContext";
import { useLocation } from "react-router-dom";

export const EpisodeDetail = () => {
  const { pathname } = useLocation();
  const { setIsVisible } = useLoaderContext();

  const splittedPathname = pathname.split("/");
  const podcastId = splittedPathname[2];
  const episodeId = splittedPathname[4];

  const { podcast, status: podcastStatus } = useFetchPodcastById(
    { id: podcastId },
    { enabled: !!podcastId, onError: (err) => console.error(err) }
  );
  const { episode, status: episodeStatus } = useFetchPodcastEpisodesById(
    { podcastId, episodeId },
    { enabled: !!episodeId, onError: (err) => console.error(err) }
  );

  useEffect(() => {
    setIsVisible(episodeStatus === "loading" || podcastStatus === "loading");
  }, [episodeStatus, podcastStatus, setIsVisible]);

  if (!podcast || !episode) return <Loader isVisible />;

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
