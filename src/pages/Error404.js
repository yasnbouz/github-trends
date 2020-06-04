import React, { useContext } from "react";
import { Link } from "@reach/router";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import themeContext from "contexts/theme";
export default function Error404() {
    const theme = useContext(themeContext);
    return (
        <>
            <Helmet>
                <title>Error 404</title>
            </Helmet>
            <StyledError404 isdark={theme === "dark"} aria-labelledby="Error404">
                <div>
                    <div>
                        <h1>404</h1>
                        <h2 data-testid="page-404">Page not found</h2>
                    </div>
                    <Link data-testid="page-home" to="/">
                        Homepage
                    </Link>
                </div>
            </StyledError404>
        </>
    );
}
const StyledError404 = styled.section`
    position: relative;
    height: 80vh;
    background: ${({ isdark }) => (isdark ? "#1a1a1a" : "#fff")};
    > div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 47.9rem;
        width: 100%;
        line-height: 1.4;
        text-align: center;
        div {
            position: relative;
            height: 11.25rem;
            margin-bottom: 1rem;
            z-index: -1;
            h1 {
                font-family: "Montserrat", sans-serif;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                font-size: 14rem;
                font-weight: 900;
                margin-top: 0;
                margin-bottom: 0;
                margin-left: -0.75rem;
                color: ${({ isdark }) => (isdark ? "#1a1a1a" : "#fff")};
                text-transform: uppercase;
                text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
                letter-spacing: -1.25rem;
                @media only screen and (max-width: 30em) {
                    font-size: 11.3rem;
                }
            }
            h2 {
                font-family: "Montserrat", sans-serif;
                position: absolute;
                left: 0;
                right: 0;
                top: 6.875rem;
                font-size: 2.625rem;
                font-weight: 700;
                color: ${({ isdark }) => (isdark ? "#fff" : "#1a1a1a")};
                text-transform: uppercase;
                text-shadow: 0px 2px 0px #8400ff;
                letter-spacing: 0.8125rem;
                margin: 0;
                @media only screen and (max-width: 47.9em) {
                    font-size: 1.5rem;
                }
            }
        }
        a {
            font-family: "Montserrat", sans-serif;
            display: inline-block;
            text-transform: uppercase;
            color: #ff005a;
            text-decoration: none;
            border: 2px solid;
            background: transparent;
            padding: 0.6rem 2rem;
            font-size: 0.875rem;
            font-weight: 700;
            transition: color 0.3s linear;
            &:hover {
                color: #8400ff;
            }
        }
    }
`;
