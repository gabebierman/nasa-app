import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H3, H4 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

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
