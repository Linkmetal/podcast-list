import { PodcastFixture, PodcastListFixture } from "tests/fixtures/Podcast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "tests/app-test-utils";

import { PodcastList } from "./PodcastList";
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

  beforeEach(() => {
    jest
      .spyOn(PodcastRepository, "fetch")
      .mockResolvedValue(PodcastListFixture);
  });

  it("renders the podcast list properly", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PodcastList />
      </QueryClientProvider>
    );

    expect(
      await screen.findByText("Björk: Sonic Symbolism")
    ).toBeInTheDocument();
  });

  it("can filter by name", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PodcastList />
      </QueryClientProvider>
    );

    fireEvent.input(screen.getByPlaceholderText("Filter podcasts..."), {
      target: { value: "bj" },
    });

    expect(
      await screen.findByText(PodcastFixture["im:name"].label)
    ).toBeInTheDocument();
  });

  it("can filter by artist", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PodcastList />
      </QueryClientProvider>
    );

    fireEvent.input(screen.getByPlaceholderText("Filter podcasts..."), {
      target: { value: "mail" },
    });

    expect(
      await screen.findByText(PodcastFixture["im:artist"].label)
    ).toBeInTheDocument();
  });
});
