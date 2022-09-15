import { Route, Routes } from "react-router-dom";

import { EpisodeDetail } from "./screens/EpisodeDetail";
import { PodcastDetail } from "./screens/PodcastDetail";
import { PodcastList } from "./screens/PodcastList";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PodcastList />} />
      <Route path="/podcast/:id" element={<PodcastDetail />} />
      <Route
        path="/podcast/:podcastId/episode/:episodeId"
        element={<EpisodeDetail />}
      />
    </Routes>
  );
};

export default App;
