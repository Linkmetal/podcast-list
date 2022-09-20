import { render, screen, waitFor } from "tests/app-test-utils";

import { EpisodesList } from "./EpisodesList";
import { PodcastEpisodeListFixture } from "tests/fixtures/PodcastEpisode";
import { PodcastFixture } from "tests/fixtures/Podcast";

describe("EpisodesList", () => {
  it("renders the podcast detail properly", () => {
    render(<EpisodesList podcastEpisodes={PodcastEpisodeListFixture} />);

    expect(screen.getByText("Debut")).toBeInTheDocument();
  });

  it("navigates to podcast detail on click", async () => {
    render(<EpisodesList podcastEpisodes={PodcastEpisodeListFixture} />);
    const podcast = screen.getAllByRole("link")[0];

    await waitFor(() => {
      expect(podcast).toHaveAttribute(
        "href",
        `/podcast/${PodcastFixture.id.attributes["im:id"]}/episode/${PodcastEpisodeListFixture[0].trackId}`
      );
    });
  });
});
