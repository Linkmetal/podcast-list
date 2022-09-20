import {
  PodcastEpisodeFixture,
  PodcastEpisodeListFixture,
} from "tests/fixtures/PodcastEpisode";
import { fireEvent, render, screen, waitFor } from "tests/app-test-utils";

import { EpisodesList } from "./EpisodesList";
import { PodcastFixture } from "tests/fixtures/Podcast";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

describe("EpisodesList", () => {
  it("renders the podcast detail properly", () => {
    render(<EpisodesList podcastEpisodes={PodcastEpisodeListFixture} />);

    expect(screen.getByText("Debut")).toBeInTheDocument();
  });

  it("navigates to episode detail on click", async () => {
    render(<EpisodesList podcastEpisodes={PodcastEpisodeListFixture} />);
    fireEvent.click(screen.getByText(PodcastEpisodeFixture.trackName));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        `/podcast/${PodcastFixture.id.attributes["im:id"]}/episode/${PodcastEpisodeListFixture[0].trackId}`
      );
    });
  });
});
