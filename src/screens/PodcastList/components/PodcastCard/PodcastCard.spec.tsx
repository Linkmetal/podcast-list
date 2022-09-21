import { render, screen, waitFor } from "tests/app-test-utils";

import { PodcastCard } from "./PodcastCard";
import { PodcastFixture } from "tests/fixtures/Podcast";

describe("PodcastCard", () => {
  it("renders the podcast detail properly", () => {
    render(<PodcastCard podcast={PodcastFixture} />);

    expect(screen.getByText("Björk: Sonic Symbolism")).toBeInTheDocument();
  });

  it("navigates to podcast detail on click", async () => {
    render(<PodcastCard podcast={PodcastFixture} />);

    await waitFor(() => {
      expect(screen.getByRole("link")).toHaveAttribute(
        "href",
        `/podcast/${PodcastFixture.id.attributes["im:id"]}`
      );
    });
  });
});
