import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  it("renders the header properly", () => {
    render(<Header />);

    expect(screen.getByText("Podcaster")).toBeInTheDocument();
  });
});
