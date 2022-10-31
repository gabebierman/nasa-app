import React from "react";
import { FlexContainer } from "../styled/FlexContainer";
import { H3, H4 } from "../styled/Headers";
import { Img } from "../styled/Img";

function MarsPerseveranceDisplay({ cam_name, link }) {
    return (
        <>
            <H4>{cam_name}</H4>
            <FlexContainer>
                <Img src={link}></Img>
            </FlexContainer>
        </>
    );
}

export default MarsPerseveranceDisplay;
