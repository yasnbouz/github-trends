import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import PlayerInput from "components/PlayerInput";

afterEach(cleanup);

const props = {
    label: "Player One",
    onSubmit: jest.fn(),
};
test("<PlayerInput/>", () => {
    const { getByTestId, getByLabelText } = render(<PlayerInput {...props} />);
    expect(getByTestId("player-label")).toHaveTextContent(props.label);
    expect(getByTestId("player-btn")).toBeDisabled();
    const username = "sdras";
    const input = getByLabelText(props.label);
    fireEvent.change(input, { target: { value: username } });
    expect(input).toHaveValue(username);
    expect(getByTestId("player-btn")).not.toBeDisabled();
    expect(getByTestId("player-btn")).toBeInTheDocument();
    fireEvent.submit(getByTestId("form"));
    expect(props.onSubmit).toHaveBeenCalled();
});
