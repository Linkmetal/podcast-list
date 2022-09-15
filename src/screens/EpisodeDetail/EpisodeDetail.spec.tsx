import { render, screen } from "@testing-library/react";

import { EpisodeDetail } from "./EpisodeDetail";

describe("PhoneDetail", () => {
  it("renders the phone detail properly", () => {
    render(<EpisodeDetail />);

    expect(screen.getByText("EpisodeDetail component")).toBeInTheDocument();
  });
});
