import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function Loading({ text = "loading", speed = 300 }) {
    const [content, setContent] = useState(text);
    useEffect(() => {
        const intervalID = setInterval(() => {
            setContent((content) => {
                return content === text + "..." ? text : content + ".";
            });
        }, speed);
        return () => clearInterval(intervalID);
    }, [text, speed]);

    return <StyledLoader data-testid="data-loader">{content}</StyledLoader>;
}
Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
};
export default Loading;

const StyledLoader = styled.p`
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;