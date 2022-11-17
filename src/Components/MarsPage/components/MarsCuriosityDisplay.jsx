import React from "react";
import { Button } from "../../../shared/styled/button";
import { FlexContainerCol } from "../../../shared/styled/FlexContainerCol";
import { H4 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function MarsCuriosityDisplay({
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
            <FlexContainerCol>
                <Img src={link}></Img>
                {isFavorite && (
                    <Button
                        onClick={() => {
                            removeFavorite(id);
                        }}
                    >
                        Remove from favorites
                    </Button>
                )}
                {!isFavorite && (
                    <Button
                        onClick={() => {
                            addFavorite({ cam_name, link, date, id });
                        }}
                    >
                        Add to favorites
                    </Button>
                )}
            </FlexContainerCol>
        </div>
    );
}

export default MarsCuriosityDisplay;
