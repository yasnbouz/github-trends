import React from "react";
import { render, cleanup } from "@testing-library/react";
import Instructions from "components/Instructions";

afterEach(cleanup);

test("<Instructions/>", () => {
    const { getByText, getAllByTestId } = render(<Instructions />);
    expect(getByText("Instructions")).toBeInTheDocument();
    expect(getByText("Enter Two Github Users")).toBeInTheDocument();
    expect(getAllByTestId("data-ico")).toBeTruthy();
    expect(getAllByTestId("data-ico").length).toBe(3);
    expect(getByText("Battle")).toBeInTheDocument();
    expect(getByText("See the winners")).toBeInTheDocument();
});
