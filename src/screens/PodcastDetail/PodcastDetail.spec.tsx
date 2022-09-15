import { render, screen } from "@testing-library/react";

import { PodcastDetail } from "./PodcastDetail";

describe("PhoneDetail", () => {
  it("renders the phone detail properly", () => {
    render(<PodcastDetail />);

    expect(screen.getByText("PodcastDetail component")).toBeInTheDocument();
  });
});
