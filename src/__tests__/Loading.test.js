import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import Loading from "components/Loading";
afterEach(cleanup);

test("<Loading/>", async () => {
    const { getByTestId } = render(<Loading />);
    const loaderEl = getByTestId("data-loader");
    expect(loaderEl).toHaveTextContent("loading");
    await waitFor(() => expect(loaderEl).toHaveTextContent("loading..."));
});
