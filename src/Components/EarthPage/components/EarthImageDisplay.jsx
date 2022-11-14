import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H3 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function EPICDisplay({ img_url, date, isFavorite, removeFavorite, addFavorite }) {
    return (
        <>
            <H3>Earth on {date}</H3>
            <FlexContainer>
                <Img src={img_url}></Img>
                {isFavorite && (
                    <button onClick={(img_url) => removeFavorite(img_url)}>
                        Remove image from favorites
                    </button>
                )}
                {!isFavorite && (
                    <button
                        onClick={() => {
                            addFavorite({ img_url, date });
                            console.log(img_url);
                            console.log(date);
                        }}
                    >
                        Add Favorite
                    </button>
                )}
            </FlexContainer>
        </>
    );
}

export default EPICDisplay;
