import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H3, H4 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function MarsPerseveranceDisplay({
    cam_name,
    link,
    isFavorite,
    removeFavorite,
    date,
    addFavorite,
}) {
    return (
        <>
            <H4>{cam_name}</H4>
            <FlexContainer>
                <Img src={link}></Img>
                {isFavorite && (
                    <button onClick={(hold) => removeFavorite(hold)}>
                        Add image to favorites
                    </button>
                )}
                {!isFavorite && (
                    <button onClick={() => addFavorite({ cam_name, link, date })}>
                        Add Favorite
                    </button>
                )}
            </FlexContainer>
        </>
    );
}

export default MarsPerseveranceDisplay;
