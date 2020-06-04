import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router } from "@reach/router";
import Loading from "components/Loading";
import themeContext from "contexts/theme";
import GlobalStyles from "components/GlobalStyles";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
const Popular = lazy(() =>
    import(
        /* webpackChunkName: "Popular" */
        "pages/Popular"
    )
);
const Battle = lazy(() =>
    import(
        /* webpackChunkName: "Battle" */
        "pages/Battle"
    )
);
const Results = lazy(() =>
    import(
        /* webpackChunkName: "Results" */
        "pages/Results"
    )
);
const Error404 = lazy(() =>
    import(
        /* webpackChunkName: "Error404" */
        "pages/Error404"
    )
);

function App() {
    const [theme, setTheme] = useState("light");
    const [offline, setOffline] = useState(!navigator.onLine);
    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    };
    const setOfflineStatus = () => {
        setOffline(!navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", setOfflineStatus);
        window.addEventListener("offline", setOfflineStatus);
        return () => {
            window.removeEventListener("online", setOfflineStatus);
            window.removeEventListener("offline", setOfflineStatus);
        };
    }, [offline]);
    return (
        <Suspense fallback={<Loading />}>
            <themeContext.Provider value={theme}>
                <GlobalStyles />
                <Helmet>
                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://metatags.io/" />
                    <meta property="og:title" content="Github Battle" />
                    <meta
                        property="og:description"
                        content="This is a Github Battle App. Enter in two Github usernames, and it'll declare a winner."
                    />
                    <meta
                        property="og:image"
                        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                    />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://metatags.io/" />
                    <meta property="twitter:title" content="Github Battle" />
                    <meta
                        property="twitter:description"
                        content="This is a Github Battle App. Enter in two Github usernames, and it'll declare a winner."
                    />
                    <meta
                        property="twitter:image"
                        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                    />
                </Helmet>
                <header>
                    <Navbar toggleTheme={toggleTheme} />
                    {offline && <ModeNetwork offline={offline}>offline</ModeNetwork>}
                </header>
                <main>
                    <Router>
                        <Popular path="/" />
                        <Battle path="battle" />
                        <Results path="battle/results" />
                        <Error404 default />
                    </Router>
                </main>
                <Footer />
            </themeContext.Provider>
        </Suspense>
    );
}

export default App;

const ModeNetwork = styled.span`
    display: table;
    background-color: #dc3545;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    border-radius: 0.25rem;
    margin: 0 auto 1em;
`;
