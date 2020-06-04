import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import LanguageList from "components/LanguageList";

afterEach(cleanup);

const UpdateLanguage = jest.fn(() => "TypeScript");

test("<LanguageList/>", () => {
    const { getAllByTestId } = render(
        <LanguageList selected="JavaScript" onUpdateLanguage={UpdateLanguage} />
    );
    fireEvent.click(getAllByTestId("btn-lang")[1]);
    expect(UpdateLanguage).toHaveBeenCalled();
    expect(UpdateLanguage).toHaveReturnedWith("TypeScript");
});
