import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H1, H3, H6 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function APODDisplay({
    explanation,
    url,
    title,
    isFavorite,
    removeFavorite,
    date,
    addFavorite,
}) {
    return (
        <>
            <H1>Astronomy Picture of the Day</H1>
            <H3>{title}</H3>
            <FlexContainer>
                <Img src={url} />
                <p>{explanation}</p>
                {isFavorite && (
                    <button onClick={(hold) => removeFavorite(hold)}>
                        Add image to favorites
                    </button>
                )}
                {!isFavorite && (
                    <button onClick={() => addFavorite({ explanation, title, url, date })}>
                        Add Favorite
                    </button>
                )}
            </FlexContainer>
        </>
    );
}

export default APODDisplay;
