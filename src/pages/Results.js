import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import * as QueryString from "query-string";
import { Battle } from "utils/api";
import Loading from "components/Loading";
import PlayerResult from "components/PlayerResult";
import { StyledLink } from "pages/Battle";
import Progress from "rsup-progress";
const progress = new Progress();

function resultReducer(state, action) {
    switch (action.type) {
        case "FETCH_INIT":
            return { winner: null, loser: null, error: null, loading: true };

        case "FETCH_SUCCESS":
            return {
                winner: action.payload.winner,
                loser: action.payload.loser,
                error: null,
                loading: false,
            };
        case "FETCH_FAILED":
            return {
                ...state,
                error: action.payload.message,
                loading: false,
            };

        default:
            return state;
    }
}
function Results({ location }) {
    const [{ winner, loser, error, loading }, dispatch] = useReducer(resultReducer, {
        winner: null,
        loser: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        async function Battling() {
            try {
                dispatch({ type: "FETCH_INIT" });
                const { playerOne, playerTwo } = QueryString.parse(location.search);
                const [winner, loser] = await Battle([playerOne, playerTwo]);
                dispatch({ type: "FETCH_SUCCESS", payload: { winner, loser } });
            } catch ({ message }) {
                dispatch({
                    type: "FETCH_FAILED",
                    payload: { message },
                });
            }
        }
        Battling();
    }, [location]);

    if (loading) {
        progress.start();
        return <Loading text="Battling" />;
    }
    if (error) {
        return <p>{error}</p>;
    }
    return (
        <>
            <Helmet>
                <title>Github Battle Results</title>
                <meta name="title" content="Github Battle Results" />
                <meta
                    name="description"
                    content="This is a Github Battle App. Enter in two Github usernames, and it'll declare a winner."
                />
            </Helmet>
            <StyledResults aria-labelledby="results">
                {!loading && progress.end(false)}
                <h1 data-testid="page-results" id="results">
                    Results
                </h1>
                <StyledPlayers>
                    <PlayerResult
                        player={winner}
                        title={winner.score === loser.score ? "Tie" : "Winner"}
                    />
                    <PlayerResult
                        player={loser}
                        title={winner.score === loser.score ? "Tie" : "Loser"}
                    />
                </StyledPlayers>
                <StyledLink data-testid="page-battle" to="/battle">
                    Reset
                </StyledLink>
            </StyledResults>
        </>
    );
}
Results.propTypes = {
    location: PropTypes.object.isRequired,
};
const StyledResults = styled.section`
    h1 {
        font-size: 1.9rem;
        text-align: center;
    }
`;
const StyledPlayers = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export default Results;
