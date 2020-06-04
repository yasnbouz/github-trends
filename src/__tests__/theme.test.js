import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ThemeProvider, ThemeConsumer } from "contexts/theme";
afterEach(cleanup);

describe("ThemeContext", () => {
    test("default value is light", () => {
        let theme;
        render(<ThemeConsumer>{(value) => (theme = value)}</ThemeConsumer>);
        expect(theme).toBe("light");
    });

    test("ThemeConsumer shows value from provider", () => {
        const { getByText } = render(
            <ThemeProvider value="dark">
                <ThemeConsumer>{(value) => <p>{value}</p>}</ThemeConsumer>
            </ThemeProvider>
        );
        expect(getByText("dark")).toBeInTheDocument();
    });
});
