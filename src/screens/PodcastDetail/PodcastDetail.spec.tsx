import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import { PodcastDetail } from "./PodcastDetail";
import { PodcastEpisodeListFixture } from "tests/fixtures/PodcastEpisode";
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
      .spyOn(PodcastRepository, "episodes")
      .mockImplementation(() => Promise.resolve(PodcastEpisodeListFixture));
    render(
      <QueryClientProvider client={queryClient}>
        <PodcastDetail />
      </QueryClientProvider>
    );

    expect(await screen.findByText("Debut")).toBeInTheDocument();
    expect(
      screen.getAllByText("Björk: Sonic Symbolism")[0]
    ).toBeInTheDocument();
  });
});
