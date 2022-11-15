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
    img_url,
}) {
    return (
        <div key={id}>
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
            {!cam_name && !title && (
                <>
                    <H5>{date}</H5>
                </>
            )}
            <FlexContainer>
                {link && !img_url && <Img src={link}></Img>}
                {!link && img_url && <Img src={img_url}></Img>}
                {!cam_name && title && <p style={{ fontSize: "14px" }}>{explanation}</p>}
                {isFavorite && (
                    <button
                        onClick={() => {
                            removeFavorite(id);
                            console.log(id || title || img_url);
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
