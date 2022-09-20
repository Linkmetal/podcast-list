import { render, screen } from "@testing-library/react";

import { EpisodeInfoCard } from "./EpisodeInfoCard";
import { PodcastEpisodeFixture } from "tests/fixtures/PodcastEpisode";

describe("EpisodeInfoCard", () => {
  it("renders the episode card properly", () => {
    render(<EpisodeInfoCard episode={PodcastEpisodeFixture} />);

    expect(
      screen.getByText(PodcastEpisodeFixture.trackName)
    ).toBeInTheDocument();
  });

  it("renders the audio player", () => {
    render(<EpisodeInfoCard episode={PodcastEpisodeFixture} />);

    expect(screen.getByLabelText("Episode audio player")).toHaveAttribute(
      "src",
      PodcastEpisodeFixture.previewUrl
    );
  });
});
