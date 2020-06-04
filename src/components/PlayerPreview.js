import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { FaTimesCircle } from "react-icons/fa";
import themeContext from "contexts/theme";

function PlayerPreview({ username, onReset, label }) {
    const theme = useContext(themeContext);
    return (
        <StyledPlayerPreview isdark={theme === "dark"}>
            <h3>{label}</h3>
            <div>
                <img
                    data-testid="player-img"
                    src={`https://github.com/${username}.png?size=200`}
                    alt={label}
                />
                <a data-testid="player-link" href={`https://github.com/${username}`}>{username}</a>
                <button data-testid="player-reset" onClick={onReset}>
                    <FaTimesCircle color="rgb(194,57,42)" size={26} />
                </button>
            </div>
        </StyledPlayerPreview>
    );
}

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};
export default PlayerPreview;

const StyledPlayerPreview = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    h3 {
        font-size: 1.5rem;
        font-weight: normal;
        text-transform: capitalize;
        margin: 0;
    }
    > div {
        background-color: ${({ isdark }) =>
            isdark ? "#343434" : "rgba(0, 0, 0, 0.08)"};
        border-radius: 3px;
        display: flex;
        align-items: center;

        img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 50%;
            padding: 0.4em;
        }
        a {
            text-decoration: none;
            color: rgb(194, 57, 42);
            margin-right: auto;
            margin-left: 0.5em;
        }
        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
`;
