import { render, screen } from "@testing-library/react";

import { PodcastList } from "./PodcastList";

describe("PodcastList", () => {
  it("renders the podcast list properly", () => {
    render(<PodcastList />);

    expect(screen.getByText("PodcastList component")).toBeInTheDocument();
  });
});
