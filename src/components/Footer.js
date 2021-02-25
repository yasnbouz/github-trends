import React from "react";
import styled from "@emotion/styled";
function Footer() {
    return (
        <StyledFooter>
            <p>
                Made with <span>&hearts;</span> by
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/yasnbouz"
                >
                    @yasnbouz
                </a>
            </p>
        </StyledFooter>
    );
}
const StyledFooter = styled.footer`
    p {
        text-align: center;
        span {
            vertical-align: middle;
            font-size: 1.5em;
            color: red;
        }
        a {
            text-decoration: none;
            color: unset;
        }
    }
`;

export default Footer;
