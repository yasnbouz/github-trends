import React from "react";
import { render, cleanup } from "@testing-library/react";
import PlayerResult from "components/PlayerResult";
afterEach(cleanup);
const player = {
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
        followers: 12550,
        following: 137,
        created_at: "2012-09-04T23:09:42Z",
        updated_at: "2020-04-12T07:19:19Z",
    },
    score: 65793,
};

test("<PlayerResult/>", () => {
    const { getByTestId } = render(<PlayerResult player={player} title="Winner" />);
    expect(getByTestId("profile-list")).toBeInTheDocument();
});
