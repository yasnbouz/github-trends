import React, { useState, lazy, Suspense } from "react";
import styled from "@emotion/styled";
import Instructions from "components/Instructions";
import PlayerInput from "components/PlayerInput";
import { Link } from "@reach/router";
import Loading from "components/Loading";
import { Helmet } from "react-helmet";
const PlayerPreview = lazy(() =>
    import(
        /* webpackChunkName: "PlayerPreview" */
        "components/PlayerPreview"
    )
);

function Battle() {
    const [playerOne, setPlayerOne] = useState(null);
    const [playerTwo, setPlayerTwo] = useState(null);
    const handleSubmit = (name, player) =>
        name === "playerOne" ? setPlayerOne(player) : setPlayerTwo(player);

    const handleReset = (name) =>
        name === "playerOne" ? setPlayerOne(null) : setPlayerTwo(null);

    return (
        <>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>Github Battle</title>
                <meta name="title" content="Github Battle" />
                <meta
                    name="description"
                    content="This is a Github Battle App. Enter in two Github usernames, and it'll declare a winner."
                />
            </Helmet>
            <Instructions />
            <StyledPlayers aria-labelledby="players">
                <h2 id="players">Players</h2>
                <div>
                    {playerOne === null ? (
                        <PlayerInput
                            label="Player One"
                            onSubmit={(player) => handleSubmit("playerOne", player)}
                        />
                    ) : (
                        <Suspense fallback={<Loading />}>
                            <PlayerPreview
                                username={playerOne}
                                label="player One"
                                onReset={() => handleReset("playerOne")}
                            />
                        </Suspense>
                    )}
                    {playerTwo === null ? (
                        <PlayerInput
                            label="Player Two"
                            onSubmit={(player) => handleSubmit("playerTwo", player)}
                        />
                    ) : (
                        <Suspense fallback={<Loading />}>
                            <PlayerPreview
                                username={playerTwo}
                                label="Player Two"
                                onReset={() => handleReset("playerTwo")}
                            />
                        </Suspense>
                    )}
                </div>
                {playerOne && playerTwo && (
                    <StyledLink
                        data-testid="page-battle"
                        to={`results?playerOne=${playerOne}&playerTwo=${playerTwo}`}
                    >
                        Battle
                    </StyledLink>
                )}
            </StyledPlayers>
        </>
    );
}

const StyledPlayers = styled.section`
    padding: 1rem;
    h2 {
        text-align: center;
        font-size: 1.6rem;
    }
    > div {
        max-width: 65rem;
        margin: 3rem auto 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-template-rows: auto;
        grid-gap: 1rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    background-color: #000;
    padding: 0.4rem 2rem;
    border-radius: 3px;
    display: block;
    margin: 1.5rem auto 1rem;
    text-align: center;
    width: 8rem;
`;
export default Battle;
