import React from "react";
import { render, cleanup } from "@testing-library/react";
import Error404 from "pages/Error404";
afterEach(cleanup);
test("<Error404", () => {
    const { getByTestId } = render(<Error404 />);
    expect(getByTestId("page-404")).toHaveTextContent(/page not found/i);
    expect(getByTestId("page-home")).toHaveTextContent("Homepage");
    expect(getByTestId("page-home").getAttribute("href")).toBe("/");
});
