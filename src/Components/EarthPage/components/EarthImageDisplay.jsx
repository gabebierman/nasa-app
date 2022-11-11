import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H3 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function EPICDisplay({ image_link, date }) {
    return (
        <>
            <H3>Earth on {date}</H3>
            <FlexContainer>
                <Img src={image_link}></Img>
            </FlexContainer>
        </>
    );
}

export default EPICDisplay;
