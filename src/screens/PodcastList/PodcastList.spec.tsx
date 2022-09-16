import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import { PodcastList } from "./PodcastList";
import { PodcastListFixture } from "tests/fixtures/Podcast";
import { PodcastRepository } from "network/repositories/PodcastRepository";

describe("PodcastList", () => {
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

  it("renders the podcast list properly", async () => {
    jest
      .spyOn(PodcastRepository, "fetch")
      .mockImplementation(() => Promise.resolve(PodcastListFixture));
    render(
      <QueryClientProvider client={queryClient}>
        <PodcastList />
      </QueryClientProvider>
    );

    expect(
      await screen.findByText("Björk: Sonic Symbolism")
    ).toBeInTheDocument();
  });
});
