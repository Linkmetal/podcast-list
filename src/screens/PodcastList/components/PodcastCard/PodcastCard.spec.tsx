import { render, screen, waitFor } from "@testing-library/react";

import { PodcastCard } from "./PodcastCard";
import { PodcastFixture } from "tests/fixtures/Podcast";

describe("PodcastCard", () => {
  it("renders the podcast detail properly", () => {
    render(<PodcastCard podcast={PodcastFixture} />);

    expect(screen.getByText("Björk: Sonic Symbolism")).toBeInTheDocument();
  });

  it("navigates to podcast detail on click", async () => {
    render(<PodcastCard podcast={PodcastFixture} />);

    const podcast = screen.getByRole("link");

    await waitFor(() => {
      expect(podcast).toHaveAttribute(
        "href",
        `/podcast/${PodcastFixture.id.attributes["im:id"]}`
      );
    });
  });
});
