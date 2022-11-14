import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H1, H3, H6 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function APODDisplay({
    explanation,
    link,
    title,
    isFavorite,
    removeFavorite,
    date,
    addFavorite,
}) {
    return (
        <div key={title}>
            <H1>Astronomy Picture of the Day</H1>
            <H3>{title}</H3>
            <FlexContainer>
                <Img src={link} />
                <p>{explanation}</p>
                {isFavorite && (
                    <button onClick={(hold) => removeFavorite(hold)}>
                        Remove from favorites
                    </button>
                )}
                {!isFavorite && (
                    <button onClick={() => addFavorite({ explanation, title, link, date })}>
                        Add to favorites
                    </button>
                )}
            </FlexContainer>
        </div>
    );
}

export default APODDisplay;
