import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H3 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function EPICDisplay({ image_link, date, isFavorite, removeFavorite, addFavorite }) {
    return (
        <>
            <H3>Earth on {date}</H3>
            <FlexContainer>
                <Img src={image_link}></Img>
                {isFavorite && (
                    <button onClick={(hold) => removeFavorite(hold)}>
                        Add image to favorites
                    </button>
                )}
                {!isFavorite && (
                    <button onClick={() => addFavorite({ image_link, date })}>
                        Add Favorite
                    </button>
                )}
            </FlexContainer>
        </>
    );
}

export default EPICDisplay;
