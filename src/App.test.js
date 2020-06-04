import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import App from "App";
import { LocationProvider, createHistory, createMemorySource } from "@reach/router";

afterEach(cleanup);

function renderWithRouter(
    ui,
    { route = "/", history = createHistory(createMemorySource(route)) } = {}
) {
    return {
        ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
        history,
    };
}
test("renders learn react link", async () => {
    const {
        getByText,
        history: { navigate },
    } = renderWithRouter(<App />);
    expect(getByText(/loading/i)).toBeInTheDocument();
    // await to show lazy Popular
    await waitFor(() => expect(getByText("JavaScript")).toBeInTheDocument());
    // chage the Route to Battle
    await navigate("battle");
    // await to show lazy Battle
    await waitFor(() => expect(getByText("Instructions")).toBeInTheDocument());
    // Bad route Error 404
    await navigate("/bad_request");
    // await to show lazy Error
    await waitFor(() => expect(getByText("Page not found")).toBeInTheDocument());
});
