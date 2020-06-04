import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import Battle from "pages/Battle";

afterEach(cleanup);

test("<Battle/>", async () => {
    const { getByLabelText, getByTestId, getAllByTestId } = render(<Battle />);
    expect(getAllByTestId("player-btn")[0]).toBeDisabled();
    expect(getAllByTestId("player-btn")[1]).toBeDisabled();
    fireEvent.change(getByLabelText("Player One"), { target: { value: "sdras" } });
    fireEvent.change(getByLabelText("Player Two"), { target: { value: "getify" } });
    expect(getAllByTestId("player-btn")[0]).toBeEnabled();
    expect(getAllByTestId("player-btn")[1]).toBeEnabled();
    fireEvent.submit(getAllByTestId("form")[0]);
    await waitFor(() =>
        expect(getAllByTestId("player-reset")[0]).toBeInTheDocument()
    );
    fireEvent.submit(getAllByTestId("form")[0]);
    await waitFor(() =>
        expect(getAllByTestId("player-reset")[1]).toBeInTheDocument()
    );
    expect(getByTestId("page-battle")).toHaveTextContent(/Battle/);
    fireEvent.click(getAllByTestId("player-reset")[0]);
    expect(getByLabelText("Player One")).toBeInTheDocument();
});
