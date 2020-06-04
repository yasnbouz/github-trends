import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import Popular from "pages/Popular";
import { fetchPopularRepos } from "utils/api";

afterEach(cleanup);
jest.mock("utils/api");
const repos = [
    {
        id: 1,
        name: "myrepos",
        owner: { login: "yasnbouz", avatar_url: "https//www.myrepos.png" },
        html_url: "https//www.myrepos.com",
        stargazers_count: 57.874,
        forks_count: 369,
        open_issues_count: 58,
    },
];
test("<Popular/>", async () => {
    fetchPopularRepos.mockResolvedValueOnce(repos);
    const { getByText, getByTestId } = render(<Popular />);
    expect(getByText("Fetching Repos")).toBeInTheDocument();

    await waitFor(() => expect(getByTestId("repos-grid")).toBeInTheDocument());
});
