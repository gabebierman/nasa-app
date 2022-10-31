//"Earth" page
//EPIC

import React from "react";
import { FlexContainer } from "../styled/FlexContainer";
import { H3 } from "../styled/Headers";
import { Img } from "../styled/Img";

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
