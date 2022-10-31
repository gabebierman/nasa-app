import React from "react";
import { FlexContainer } from "../styled/FlexContainer";
import { H1, H3, H6 } from "../styled/Headers";
import { Img } from "../styled/Img";

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
