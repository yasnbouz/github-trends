import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import Results from "pages/Results";
import { Battle } from "utils/api";

afterEach(cleanup);
jest.mock("utils/api");
const loser = {
    profile: {
        login: "sdras",
        id: 2281088,
        node_id: "MDQ6VXNlcjIyODEwODg=",
        avatar_url: "https://avatars1.githubusercontent.com/u/2281088?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/sdras",
        html_url: "https://github.com/sdras",
        followers_url: "https://api.github.com/users/sdras/followers",
        following_url: "https://api.github.com/users/sdras/following{/other_user}",
        gists_url: "https://api.github.com/users/sdras/gists{/gist_id}",
        starred_url: "https://api.github.com/users/sdras/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/sdras/subscriptions",
        organizations_url: "https://api.github.com/users/sdras/orgs",
        repos_url: "https://api.github.com/users/sdras/repos",
        events_url: "https://api.github.com/users/sdras/events{/privacy}",
        received_events_url: "https://api.github.com/users/sdras/received_events",
        type: "User",
        site_admin: false,
        name: "Sarah Drasner",
        company: "Netlify",
        blog: "https://sarah.dev",
        location: "All over the place",
        email: null,
        hireable: null,
        bio: "comprehension over configuration",
        public_repos: 83,
        public_gists: 3,
        followers: 12568,
        following: 138,
        created_at: "2012-09-04T23:09:42Z",
        updated_at: "2020-04-12T07:19:19Z",
    },
    score: 65879,
};
const winner = {
    profile: {
        login: "getify",
        id: 150330,
        node_id: "MDQ6VXNlcjE1MDMzMA==",
        avatar_url: "https://avatars1.githubusercontent.com/u/150330?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/getify",
        html_url: "https://github.com/getify",
        followers_url: "https://api.github.com/users/getify/followers",
        following_url: "https://api.github.com/users/getify/following{/other_user}",
        gists_url: "https://api.github.com/users/getify/gists{/gist_id}",
        starred_url: "https://api.github.com/users/getify/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/getify/subscriptions",
        organizations_url: "https://api.github.com/users/getify/orgs",
        repos_url: "https://api.github.com/users/getify/repos",
        events_url: "https://api.github.com/users/getify/events{/privacy}",
        received_events_url: "https://api.github.com/users/getify/received_events",
        type: "User",
        site_admin: false,
        name: "Kyle Simpson",
        company: "Getify Solutions",
        blog: "",
        location: "Austin, TX",
        email: null,
        hireable: true,
        bio:
            "I teach JavaScript and I'd love to come help your team's developers. If that's interesting to you, please reach out to me getify@gmail.com.",
        public_repos: 52,
        public_gists: 364,
        followers: 26023,
        following: 2,
        created_at: "2009-11-08T06:56:21Z",
        updated_at: "2020-03-30T13:00:42Z",
    },
    score: 221517,
};

const location = {
    search: "?playerOne=sdras&playerTwo=getify",
};
jest.mock("");
test("<Results/>", async () => {
    Battle.mockResolvedValueOnce([winner, loser]);
    const { getByTestId } = render(<Results location={location} />);
    expect(getByTestId("data-loader")).toHaveTextContent(/Battling/);
    await waitFor(() =>
        expect(getByTestId("page-results")).toHaveTextContent(/^Results$/)
    );
    expect(getByTestId("page-battle").getAttribute("href")).toBe("/battle");
});
