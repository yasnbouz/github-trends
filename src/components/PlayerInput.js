import React, { useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import themeContext from "contexts/theme";

function PlayerInput({ label, onSubmit }) {
    const [username, setUsername] = useState("");
    const theme = useContext(themeContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(username);
    };
    const handleLabel = useMemo(() => {
        return label.replace(" ", "_");
    }, [label]);

    return (
        <StyledPlayerForm
            isdark={theme === "dark"}
            onSubmit={handleSubmit}
            data-testid="form"
        >
            <label data-testid="player-label" htmlFor={handleLabel}>
                {label}
            </label>
            <input
                type="text"
                placeholder="github username"
                id={handleLabel}
                name={handleLabel}
                value={username}
                onChange={(e) => setUsername(e.target.value.trimLeft())}
            />
            <button data-testid="player-btn" type="submit" disabled={!username}>
                submit
            </button>
        </StyledPlayerForm>
    );
}
PlayerInput.propTypes = {
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default PlayerInput;
const StyledPlayerForm = styled.form`
    display: grid;
    grid-gap: 0.5rem;
    @media screen and (min-width: 45.25em) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: repeat(3, 1fr);
        label {
            grid-column: 1/-1;
        }
        input[type="text"] {
            grid-column: 1/3;
            grid-row: 2/3;
        }
    }
    label {
        font-size: 1.3rem;
        margin: 0;
    }
    input[type="text"] {
        padding: 0.8rem 1rem;
        border: none;
        box-shadow: inset 0 0 3px 0px
            ${({ isdark }) => (isdark ? "#4d4d4d" : "#dadada")};
        border-radius: 3px;
        color: ${({ isdark }) => (isdark ? "#dadada" : "#000")};
        background-color: ${({ isdark }) => (isdark ? "#00000054" : "#fff")};
        &:-internal-autofill-selected {
            background-color: ${({ isdark }) =>
                isdark ? "#00000054" : "#fff"} !important;
        }
    }
    button {
        text-transform: uppercase;
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        color: ${({ isdark }) => (isdark ? "#000" : "#e6e6e6")};
        background-color: ${({ isdark }) => (isdark ? "#bababac2" : "#141414")};
        &:disabled {
            cursor: auto;
            color: #7e7e7e;
            background-color: ${({ isdark }) => (isdark ? "#3d3d3d" : "#f0f0f0")};
        }
    }
`;
