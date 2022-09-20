import { fireEvent, render, screen, waitFor } from "tests/app-test-utils";

import { TextInput } from "./TextInput";

describe("Header", () => {
  it("renders the TextInput properly", () => {
    render(<TextInput onChange={() => undefined} value="value" />);

    expect(screen.getByDisplayValue("value")).toBeInTheDocument();
  });

  it("calls onChange on input", async () => {
    const onChangeMock = jest.fn();
    render(
      <TextInput onChange={onChangeMock} value="" placeholder="placeholder" />
    );

    fireEvent.input(screen.getByPlaceholderText("placeholder"), {
      target: { value: "a" },
    });

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledWith("a");
    });
  });
});
