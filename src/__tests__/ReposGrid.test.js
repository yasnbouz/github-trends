import React from "react";
import { render, cleanup } from "@testing-library/react";
import ReposGrid from "components/ReposGrid";

afterEach(cleanup);

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
    {
        id: 2,
        name: "YDKJS",
        owner: { login: "getify", avatar_url: "https//www.myrepos.png" },
        html_url: "https//www.getify.com",
        stargazers_count: 85.874,
        forks_count: 4654,
        open_issues_count: 322,
    },
];
test("<ReposGrid/>", () => {
    const { container, getAllByTestId } = render(<ReposGrid repos={repos} />);
    const lists = container.querySelector("ul");
    expect(lists).toBeInTheDocument();
    expect(getAllByTestId("github-profile")[0].getAttribute("href")).toMatch(
        repos[0].owner.login
    );
    expect(getAllByTestId("repos-item").length).toBe(repos.length);
});
