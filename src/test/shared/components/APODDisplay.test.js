import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import APODDisplay from "../../../shared/components/APODDisplay";

// - create dummy data for each test

const dummyImg = {
    title: "Test IMG",
    url: "test.com",
    explanation: "Test Ex",
};

// - create custom render function

const customRender = ({ url, title, explanation, renderOptions }) => {
    return render(
        <APODDisplay title={title} url={url} explanation={explanation}></APODDisplay>,
        renderOptions
    );
};

describe("APODDisplay", () => {
    describe("Rendering", () => {
        it("should render APOD Display", () => {
            const { queryByText } = customRender(true);
            const title = queryByText(dummyImg.title);
            expect(title).toBeTruthy();
        });
        it("should render image with correct url", () => {
            const { baseElement } = customRender(true);
            const img = baseElement.querySelector("img");
            expect(img).toBeTruthy();
            expect(img.src).toBe(dummyImg.url);
        });
        it("should render image with correct explanation", () => {
            const { queryByText } = customRender(true);
            const explanation = queryByText(dummyImg.explanation);
            expect(explanation).toBeTruthy();
        });
    });
});
