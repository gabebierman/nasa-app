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
    id,
    favorites,
}) {
    return (
        <div key={id}>
            <H4>{cam_name}</H4>
            <FlexContainer>
                <Img src={link}></Img>
                {isFavorite && (
                    <button onClick={() => removeFavorite(id)}>Remove from favorites</button>
                )}
                {!isFavorite && (
                    <button
                        onClick={() => {
                            addFavorite({ cam_name, link, date, id });
                            console.log(cam_name, date, link, id);
                        }}
                    >
                        Add to favorites
                    </button>
                )}
            </FlexContainer>
        </div>
    );
}

export default MarsPerseveranceDisplay;
