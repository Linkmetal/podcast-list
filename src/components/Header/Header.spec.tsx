import { render, screen } from "tests/app-test-utils";

import { Header } from "./Header";

describe("Header", () => {
  it("renders the header properly", () => {
    render(<Header />);

    expect(screen.getByText("Podcaster")).toBeInTheDocument();
  });
});
