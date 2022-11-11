import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H1, H3, H6 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function APODDisplay({ explanation, url, title }) {
    return (
        <>
            <H1>Astronomy Picture of the Day</H1>
            <H3>{title}</H3>
            <FlexContainer>
                <Img src={url} />
                <p>{explanation}</p>
            </FlexContainer>
        </>
    );
}

export default APODDisplay;
