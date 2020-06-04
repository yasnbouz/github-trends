import React, { useState, useReducer, useEffect, useRef, useMemo } from "react";
import { fetchPopularRepos } from "utils/api";
import Loading from "components/Loading";
import LanguageList from "components/LanguageList";
import ReposGrid from "components/ReposGrid";
import Progress from "rsup-progress";
import { Helmet } from "react-helmet";
const progress = new Progress();

export default function Popular() {
    const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
    const [state, dispatch] = useReducer(popularReducer, {
        error: null,
    });
    const fetchedLanguagesRef = useRef([]);
    useEffect(() => {
        async function fetchRepos() {
            try {
                if (!fetchedLanguagesRef.current.includes(selectedLanguage)) {
                    fetchedLanguagesRef.current.push(selectedLanguage);
                    dispatch({ type: "FETCH_INIT" });
                    const data = await fetchPopularRepos(selectedLanguage);
                    dispatch({
                        type: "FETCH_SUCCESS",
                        payload: { selectedLanguage, data },
                    });
                }
            } catch (error) {
                dispatch({
                    type: "FETCH_FAILED",
                    payload: { err: error.message },
                });
            }
        }
        fetchRepos();
    }, [selectedLanguage, fetchedLanguagesRef]);

    const isLoading = useMemo(() => {
        return !state[selectedLanguage] && state.error === null;
    }, [selectedLanguage, state]);

    return (
        <>
            <Helmet>
                <title>Trending repositories on GitHub</title>
                <meta name="title" content="Trending repositories on GitHub" />
                <meta
                    name="description"
                    content="See Trending repositories on GitHub By Language."
                />
            </Helmet>
            <LanguageList
                selected={selectedLanguage}
                onUpdateLanguage={setSelectedLanguage}
            />
            <section>
                {isLoading ? progress.start() : progress.end(false)}
                {isLoading && <Loading text="Fetching Repos" />}
                {state.error && <p>{state.error}</p>}
                {state[selectedLanguage] && (
                    <ReposGrid repos={state[selectedLanguage]} />
                )}
            </section>
        </>
    );
}

function popularReducer(state, action) {
    switch (action.type) {
        case "FETCH_INIT":
            return { ...state, error: null };
        case "FETCH_SUCCESS":
            return {
                ...state,
                [action.payload.selectedLanguage]: action.payload.data,
                error: null,
            };
        case "FETCH_FAILED":
            return { ...state, error: action.payload.err };
        default:
            return state;
    }
}
