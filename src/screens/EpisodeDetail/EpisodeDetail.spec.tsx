import { render, screen } from "@testing-library/react";

import { EpisodeDetail } from "./EpisodeDetail";

describe("EpisodeDetail", () => {
  xit("renders the episode detail properly", () => {
    render(<EpisodeDetail />);

    expect(screen.getByText("EpisodeDetail component")).toBeInTheDocument();
  });

  it.todo("Mock useParams");
});
