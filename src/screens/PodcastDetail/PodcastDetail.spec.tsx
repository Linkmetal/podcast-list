import { render, screen } from "@testing-library/react";

import { PodcastDetail } from "./PodcastDetail";

describe("PodcastDetail", () => {
  it("renders the podcast detail properly", () => {
    render(<PodcastDetail />);

    expect(screen.getByText("PodcastDetail component")).toBeInTheDocument();
  });
});
