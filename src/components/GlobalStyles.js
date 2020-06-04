import React, { useContext } from "react";
import themeContext from "contexts/theme";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
    const theme = useContext(themeContext);
    return (
        <Global
            styles={css`
                :root {
                    font-size: calc(1rem + 0.2vw);
                }
                *,
                *::after,
                *::before {
                    box-sizing: border-box;
                }
                html,
                body {
                    height: 100%;
                }
                body {
                    background-color: ${theme === "dark" ? "#272727" : "#fefefe"};
                    color: ${theme === "dark" ? "#fff" : "#000"};
                    transition: background-color 0.3s ease-in-out;
                    margin: 0;
                    box-sizing: inherit;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
                        "Droid Sans", "Helvetica Neue", sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    scroll-behavior: smooth;
                    min-height: 100vh;
                    -webkit-touch-callout: none;
                }

                #root {
                    min-height: 100vh;
                    position: relative;
                    padding-bottom: 5rem;
                }
                footer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    border-top: 1px solid rgba(0, 0, 0, 0.1);
                }
                code {
                    font-family: source-code-pro, Menlo, Monaco, Consolas,
                        "Courier New", monospace;
                }
                svg,
                img {
                    max-width: 100%;
                }

                ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                ::-webkit-scrollbar-track {
                    background-color: rgba(0, 0, 0, 0.4);
                    border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: #dfdfdf;
                    border-radius: 10px;
                }
            `}
        />
    );
}
