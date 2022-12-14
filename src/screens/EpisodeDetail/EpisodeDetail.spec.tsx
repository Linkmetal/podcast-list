import {
  PodcastEpisodeFixture,
  PodcastEpisodeListFixture,
} from "tests/fixtures/PodcastEpisode";
import { PodcastFixture, PodcastListFixture } from "tests/fixtures/Podcast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "tests/app-test-utils";

import { EpisodeDetail } from "./EpisodeDetail";
import { PodcastRepository } from "network/repositories/PodcastRepository";

describe("PodcastDetail", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: false,
      },
      mutations: {
        useErrorBoundary: false,
      },
    },
  });
  it("renders the podcast detail properly", async () => {
    jest
      .spyOn(PodcastRepository, "fetch")
      .mockResolvedValue(PodcastListFixture);

    jest
      .spyOn(PodcastRepository, "episodes")
      .mockResolvedValue(PodcastEpisodeListFixture);

    const route = `/podcasts/${PodcastFixture.id.attributes["im:id"]}/episode/${PodcastEpisodeFixture.trackId}`;

    render(
      <QueryClientProvider client={queryClient}>
        <EpisodeDetail />
      </QueryClientProvider>,
      route
    );

    const [result] = await screen.findAllByText("Björk: Sonic Symbolism");

    expect(result).toBeInTheDocument();
    expect(screen.getByLabelText("Episode audio player")).toHaveAttribute(
      "src",
      PodcastEpisodeFixture.previewUrl
    );
  });
});
