import React from "react";
import { Button } from "../../shared/styled/button";
import { FlexContainerCol } from "../../shared/styled/FlexContainerCol";
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
            <FlexContainerCol>
                {link && !img_url && <Img src={link}></Img>}
                {!link && img_url && <Img src={img_url}></Img>}
                {!cam_name && title && <p style={{ fontSize: "14px" }}>{explanation}</p>}
                {isFavorite && (
                    <Button
                        onClick={() => {
                            removeFavorite(id);
                        }}
                    >
                        Remove from favorites
                    </Button>
                )}
            </FlexContainerCol>
        </div>
    );
}

export default FavoritesDisplay;
