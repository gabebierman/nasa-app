import React from "react";
import { Button } from "../../../shared/styled/button";
import { FlexContainerCol } from "../../../shared/styled/FlexContainerCol";
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
    id,
}) {
    return (
        <div key={id}>
            <H1>Astronomy Picture of the Day</H1>
            <H3>{title}</H3>
            <FlexContainerCol>
                <Img src={link} />
                <p>{explanation}</p>
                {isFavorite && (
                    <Button onClick={() => removeFavorite(title)}>
                        Remove from favorites
                    </Button>
                )}
                {!isFavorite && (
                    <Button
                        onClick={() => addFavorite({ explanation, title, link, date, id })}
                    >
                        Add to favorites
                    </Button>
                )}
            </FlexContainerCol>
        </div>
    );
}

export default APODDisplay;
