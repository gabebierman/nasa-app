import React from "react";
import { FlexContainer } from "../../shared/styled/FlexContainer";
import { H3, H4, H5, H6 } from "../../shared/styled/Headers";
import { Img } from "../../shared/styled/Img";

function FavoritesDisplay({
    cam_name,
    link,
    isFavorite,
    removeFavorite,
    date,
    addFavorite,
    id,
    favorites,
    title,
    explanation,
}) {
    return (
        <div key={id || title}>
            {cam_name && !title && (
                <>
                    <H4>{cam_name}</H4>
                    <H5>{date}</H5>
                </>
            )}
            {!cam_name && title && (
                <>
                    <H4>{title}</H4>
                    <H5>{date}</H5>
                </>
            )}
            <FlexContainer>
                <Img src={link}></Img>
                {!cam_name && title && <p style={{ fontSize: "14px" }}>{explanation}</p>}
                {isFavorite && (
                    <button
                        onClick={() => {
                            removeFavorite(id || title);
                            console.log(id || title);
                        }}
                    >
                        Remove from favorites
                    </button>
                )}
            </FlexContainer>
        </div>
    );
}

export default FavoritesDisplay;
