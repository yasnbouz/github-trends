import React from "react";
import { render, cleanup } from "@testing-library/react";
import Card from "components/Card";
import { forceVisible } from "react-lazyload";

afterEach(cleanup);

const props = {
    header: "title",
    trend: 1,
    avatar: "https://via.placeholder.com/150",
    name: "Reactjs",
    login: "Facebook",
    subheader: "100,547",
    href: "https://www.example.com",
};

test("<Card/>", () => {
    const { getByTestId, getByText } = render(
        <Card {...props}>
            <p>render children</p>
        </Card>
    );
    forceVisible();
    expect(getByTestId("repo-header")).toHaveTextContent(props.header);
    expect(getByTestId("repo-trend")).toHaveTextContent(props.trend);
    expect(getByTestId("repo-img").src).toBe(props.avatar);
    expect(getByTestId("repo-img").alt).toBe(props.login);
    expect(getByTestId("repo-score")).toHaveTextContent(props.subheader);
    expect(getByTestId("repo-link").getAttribute("href")).toBe(props.href);
    expect(getByTestId("repo-link")).toHaveTextContent(props.name);
    expect(getByText("render children")).toBeInTheDocument();
});
