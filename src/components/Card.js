import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import LazyLoad from "react-lazyload";
import themeContext from "contexts/theme";

function Card({
    header,
    trend,
    avatar,
    name,
    subheader,
    href,
    insideGrid = false,
    login,
    children,
}) {
    const theme = useContext(themeContext);
    return (
        <StyledPlayerCard
            data-testid="repos-item"
            isdark={theme === "dark"}
            insideGrid={insideGrid}
        >
            {header && <h2 data-testid="repo-header">{header}</h2>}
            {trend && (
                <div>
                    <h2 data-testid="repo-trend">{trend}</h2>
                </div>
            )}
            <LazyLoad height={200} once={true} offset={100}>
                <img
                    data-testid="repo-img"
                    width={186.66}
                    height={186.66}
                    src={avatar}
                    alt={login}
                />
            </LazyLoad>
            {subheader && (
                <h3 data-testid="repo-score" className="score">
                    Score: {subheader}
                </h3>
            )}
            <h3>
                <a
                    data-testid="repo-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {name}
                </a>
            </h3>
            {children}
        </StyledPlayerCard>
    );
}

Card.propTypes = {
    header: PropTypes.string,
    trend: PropTypes.number,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    href: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    insideGrid: PropTypes.bool,
    children: PropTypes.node.isRequired,
};
export default Card;
const StyledPlayerCard = styled.article`
    border-radius: 3px;
    background-color: ${({ isdark }) => (isdark ? "#1a1a1a" : "##d3d8e466")};
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    text-align: center;
    position: relative;
    ${({ insideGrid }) => !insideGrid && `margin:2rem;width:23rem;`}

    > div {
        clip-path: polygon(100% 0, 0% 100%, 0 0);
        background-color: ${({ isdark }) => (isdark ? "#303030" : "#f0f0f0")};
        padding: 1rem 1.4rem;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        h2 {
            font-size: 1.2rem;
            margin: 0;
            position: relative;
            top: -13px;
            left: -11px;
            color: ${({ isdark }) => (isdark ? "#fff" : "#000")};
            font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
            transform: rotate(-45deg);
        }
    }
    h2 {
        font-size: 2rem;
        font-weight: 400;
        margin-top: 0;
    }
    img {
        border-radius: inherit;
        /* width: 10rem;
        height: 10rem; */
        margin-top: 1rem;
    }
    .score {
        font-weight: bold;
        font-size: 1.1rem;
    }
    a {
        text-decoration: none;
    }
    h3 {
        a {
            font-weight: bold;
            font-size: 1.3rem;
            color: #f54531;
        }
    }
    ul {
        padding: 0;
        width: max-content;
        margin: auto;
    }
    li {
        font-size: 1.1rem;
        list-style-type: none;
        padding: 0.2rem;
        display: flex;
        align-items: center;
        a {
            color: ${({ isdark }) => (isdark ? "#fff" : "#000")};
            font-weight: 600;
        }
        svg {
            margin-right: 0.5rem;
        }
    }
`;
