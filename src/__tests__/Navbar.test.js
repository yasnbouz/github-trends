import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Navbar from "components/Navbar";
afterEach(cleanup);

const toggleTheme = jest.fn();

test("<Navbar/>", () => {
    const { getByTestId } = render(<Navbar toggleTheme={toggleTheme} />);
    // test popular route
    expect(getByTestId("popular-route")).toHaveTextContent("Popular");
    expect(getByTestId("popular-route").getAttribute("href")).toBe("/");
    // test battle route
    expect(getByTestId("battle-route")).toHaveTextContent("Battle");
    expect(getByTestId("battle-route").getAttribute("href")).toBe("/battle");

    // test toggle btn
    expect(getByTestId("toggle-theme")).toBeInTheDocument();
    fireEvent.click(getByTestId("toggle-theme"));
    expect(toggleTheme).toHaveBeenCalled();
});
