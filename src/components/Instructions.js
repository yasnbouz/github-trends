import React, { useContext } from "react";
import themeContext from "contexts/theme";
import styled from "@emotion/styled";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";

export default function Instructions() {
    const theme = useContext(themeContext);
    return (
        <StyledInstructions
            isdark={theme === "dark"}
            aria-labelledby="insctructions"
        >
            <h2 id="insctructions">Instructions</h2>
            <ul>
                <li>
                    <h3>Enter Two Github Users</h3>
                    <FaUserFriends
                        data-testid="data-ico"
                        size={140}
                        color="rgb(255,191,116)"
                    />
                </li>
                <li>
                    <h3>Battle</h3>
                    <FaFighterJet
                        data-testid="data-ico"
                        size={140}
                        color="#727272"
                    />
                </li>
                <li>
                    <h3>See the winners</h3>
                    <FaTrophy
                        data-testid="data-ico"
                        size={140}
                        color="rgb(255,215,0)"
                    />
                </li>
            </ul>
        </StyledInstructions>
    );
}

const StyledInstructions = styled.section`
    text-align: center;
    padding: 1rem;

    h2 {
        font-size: 1.6rem;
    }
    ul {
        max-width: 65rem;
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: column;
        @media screen and (min-width: 45.25em) and (max-width: 62.5em) {
            flex-flow: row wrap;
            li:nth-of-type(1),
            li:nth-of-type(2) {
                flex: 0 0 calc(50% - 1rem);
            }
            li:nth-of-type(3) {
                flex: 0 0 calc(100% - 1rem);
            }
        }
        @media screen and (min-width: 62.5em) {
            flex-direction: row;
            li {
                flex: 0 0 calc(33.33% - 1rem);
            }
        }
        li {
            list-style-type: none;
            margin: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            h3 {
                font-weight: normal;
                font-size: 1.3rem;
            }
            svg {
                box-sizing: content-box;
                background-color: ${({ isdark }) =>
                    isdark ? "#ffffff1a" : "rgba(0, 0, 0, 0.08)"};
                padding: 2rem;
                border-radius: 3px;
            }
        }
    }
`;
