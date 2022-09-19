import { render, screen } from "@testing-library/react";

import { PodcastDetailCard } from "./PodcastDetailCard";
import { PodcastFixture } from "tests/fixtures/Podcast";

describe("PodcastDetailCard", () => {
  it("renders the podcast card properly", () => {
    render(<PodcastDetailCard podcast={PodcastFixture} />);

    expect(screen.getByText("Björk: Sonic Symbolism")).toBeInTheDocument();
  });
});
