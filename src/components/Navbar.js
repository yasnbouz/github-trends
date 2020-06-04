import React, { useContext } from "react";
import themeContext from "contexts/theme";
import PropTypes from "prop-types";
import { FaLightbulb } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => isCurrent && { className: "active" };
const NavLink = (props) => <Link {...props} getProps={isActive} />;

export default function Navbar({ toggleTheme }) {
    const theme = useContext(themeContext);
    return (
        <StyledNavbar isdark={theme === "dark"}>
            <ul>
                <li>
                    <NavLink data-testid="popular-route" to="/">
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink data-testid="battle-route" to="/battle">
                        Battle
                    </NavLink>
                </li>
            </ul>
            <button
                aria-label="toggle theme"
                data-testid="toggle-theme"
                onClick={toggleTheme}
            >
                <FaLightbulb color={theme === "dark" ? "yellow" : "black"} />
            </button>
        </StyledNavbar>
    );
}
Navbar.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
};

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
        list-style-type: none;
        display: inline-block;
        &:not(:last-of-type) {
            margin-right: 0.5rem;
        }
        a {
            color: ${({ isdark }) => (isdark ? "white" : "black")};
            text-decoration: none;
            transition: border 0.3s ease;
            border-bottom: 2px solid transparent;
            padding-bottom: 0.1em;
            font-weight: 600;
            &:hover {
                border-bottom: 2px solid red;
            }
        }
        .active {
            color: ${({ isdark }) => (isdark ? "#ff4b49" : "#e9002c")};
        }
    }
    button {
        background-color: transparent;
        border: none;
        margin-right: 1%;
        font-size: 1.4rem;
        cursor: pointer;
        width: 1.5em;
        height: 1.5em;
    }
`;
