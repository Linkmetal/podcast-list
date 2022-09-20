import { PodcastFixture, PodcastListFixture } from "tests/fixtures/Podcast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "tests/app-test-utils";

import { MemoryRouter } from "react-router-dom";
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
      .spyOn(PodcastRepository, "fetch")
      .mockResolvedValue(PodcastListFixture);

    jest
      .spyOn(PodcastRepository, "episodes")
      .mockResolvedValue(PodcastEpisodeListFixture);

    const route = `/podcasts/${PodcastFixture.id.attributes["im:id"]}`;

    render(
      <MemoryRouter initialEntries={[route]}>
        <QueryClientProvider client={queryClient}>
          <PodcastDetail />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(await screen.findByText("Debut")).toBeInTheDocument();
    expect(
      screen.getAllByText("Björk: Sonic Symbolism")[0]
    ).toBeInTheDocument();
  });
});
