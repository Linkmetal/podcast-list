import { render, screen } from "@testing-library/react";

import { PodcastList } from "./PodcastList";

describe("PhoneList", () => {
  it("renders the phone list properly", () => {
    render(<PodcastList />);

    expect(screen.getByText("PodcastList component")).toBeInTheDocument();
  });
});
