import React from "react";
import { render, cleanup } from "@testing-library/react";
import Footer from "components/Footer";
afterEach(cleanup);

test("<Footer/>", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("@yasnbouz")).toBeInTheDocument();
});
