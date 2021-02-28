/** @jsx jsx */
import styled from "@emotion/styled";
import { useContext } from "react";
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import themeContext from "contexts/theme";

function LanguageList({ selected, onUpdateLanguage }) {
    const languages = ["JavaScript", "TypeScript", "Java", "Go", "CSharp", "Python"];
    const theme = useContext(themeContext);
    const isdark = theme === "dark";
    return (
        <Lists isdark={isdark}>
            {languages.map((lang) => (
                <li key={lang}>
                    <button
                        data-testid="btn-lang"
                        css={css`
                            color: ${lang === selected && isdark
                                ? "#ff4b49"
                                : lang === selected && !isdark
                                ? "#e9002c"
                                : null} !important;
                        `}
                        onClick={() => onUpdateLanguage(lang)}
                    >
                        {lang}
                    </button>
                </li>
            ))}
        </Lists>
    );
}
LanguageList.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired,
};
const Lists = styled.ul`
    margin: 0 auto 1rem;
    list-style-type: none;
    max-width: 32rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
        cursor: pointer;
        margin: 0.5em;
        padding: 0.2em;
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
        background: none;
        border: none;
        color: ${({ isdark }) => (isdark ? "white" : "black")};
    }
`;
export default LanguageList;
