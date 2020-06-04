import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import ReactTooltip from "react-tooltip";
import {
    FaUserAlt,
    FaCompass,
    FaBriefcase,
    FaUsers,
    FaUserFriends,
    FaFileCode,
} from "react-icons/fa";
import themeContext from "contexts/theme";

export default function PlayerResult({ player, title }) {
    const { avatar_url, html_url, login, name } = player.profile;
    const { score } = player;
    return (
        <Card
            header={title}
            avatar={avatar_url}
            name={name}
            subheader={score.toLocaleString()}
            href={html_url}
            login={login}
        >
            <ProfileList profile={player.profile} />
        </Card>
    );
}

PlayerResult.propTypes = {
    player: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

function ProfileList({ profile }) {
    const theme = useContext(themeContext);
    return (
        <ul data-testid="profile-list">
            <li>
                <FaUserAlt size="1.2em" color="#F25988" />
                {profile.login}
            </li>
            <li data-tip="User's location">
                <FaCompass size="1.2em" color="#9481EB" />
                {profile.location}
            </li>
            <li data-tip="User's company">
                <FaBriefcase size="1.2em" color="#815600" />
                {profile.company}
            </li>
            <li>
                <FaUsers size="1.2em" color="#9DC2FF" />
                {profile.followers.toLocaleString()} followers
            </li>
            <li>
                <FaUserFriends size="1.2em" color="#21B756" />
                {profile.following.toLocaleString()} following
            </li>
            <li>
                <FaFileCode
                    size="1.2em"
                    color={theme === "dark" ? "#fff" : "#000"}
                />
                {profile.public_repos.toLocaleString()} repositories
            </li>
            <ReactTooltip effect="solid" />
        </ul>
    );
}
ProfileList.propTypes = {
    profile: PropTypes.object.isRequired,
};
