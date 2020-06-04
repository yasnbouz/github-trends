import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import PlayerPreview from "components/PlayerPreview";
afterEach(cleanup);
const props = {
    label: "Player One",
    username: "yasnbouz",
    onReset: jest.fn(),
};
test("<PlayerPreview/>", () => {
    const { getByTestId, getByText } = render(<PlayerPreview {...props} />);
    expect(getByText(props.label)).toBeInTheDocument();
    expect(getByTestId("player-img").src).toMatch(props.username);
    expect(getByTestId("player-img").alt).toBe(props.label);
    expect(getByTestId("player-link")).toHaveTextContent(props.username);
    expect(getByTestId("player-link").getAttribute("href")).toMatch(props.username);
    fireEvent.click(getByTestId("player-reset"));
    expect(props.onReset).toHaveBeenCalled();
});
