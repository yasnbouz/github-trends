import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ReactTooltip from "react-tooltip";

import {
    FaUserAlt,
    FaStar,
    FaCodeBranch,
    FaExclamationTriangle,
} from "react-icons/fa";
import Card from "./Card";

export default function ReposGrid({ repos }) {
    return (
        <Grid data-testid="repos-grid">
            {repos.map((repo, index) => {
                const {
                    id,
                    name,
                    owner: { login, avatar_url },
                    html_url,
                } = repo;

                return (
                    <Card
                        key={id}
                        insideGrid={true}
                        trend={index + 1}
                        avatar={avatar_url}
                        name={name}
                        href={html_url}
                        login={login}
                    >
                        <ProfileList profile={repo} />
                    </Card>
                );
            })}
        </Grid>
    );
}
ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired,
};

const Grid = styled.div`
    padding: 1rem;
    display: grid;
    max-width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1.8rem;
`;

function ProfileList({ profile }) {
    const {
        owner: { login },
        stargazers_count,
        forks_count,
        open_issues_count,
    } = profile;
    return (
        <ul>
            <li data-tip="Github username">
                <FaUserAlt size="1.2em" color="#ffbf74" />
                <a
                    data-testid="github-profile"
                    href={`https://github.com/${login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {login}
                </a>
            </li>
            <li>
                <FaStar size="1.2em" color="#ffd700" />
                {stargazers_count.toLocaleString()} stars
            </li>
            <li>
                <FaCodeBranch size="1.2em" color="#81c3f5" />
                {forks_count.toLocaleString()} forks
            </li>
            <li>
                <FaExclamationTriangle size="1.2em" color="#ec0b43" />
                {open_issues_count.toLocaleString()} open issues
            </li>
            <ReactTooltip effect="solid" />
        </ul>
    );
}
ProfileList.propTypes = {
    profile: PropTypes.object.isRequired,
};
