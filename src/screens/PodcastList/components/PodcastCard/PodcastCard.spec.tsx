import { fireEvent, render, screen, waitFor } from "tests/app-test-utils";

import { PodcastCard } from "./PodcastCard";
import { PodcastFixture } from "tests/fixtures/Podcast";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

describe("PodcastCard", () => {
  it("renders the podcast detail properly", () => {
    render(<PodcastCard podcast={PodcastFixture} />);

    expect(screen.getByText("Björk: Sonic Symbolism")).toBeInTheDocument();
  });

  it("navigates to podcast detail on click", async () => {
    render(<PodcastCard podcast={PodcastFixture} />);

    fireEvent.click(screen.getByText(PodcastFixture["im:name"].label));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        `/podcast/${PodcastFixture.id.attributes["im:id"]}`
      );
    });
  });
});
