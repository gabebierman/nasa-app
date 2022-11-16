import React from "react";
import { Button } from "../../../shared/styled/button";
import { FlexContainerCol } from "../../../shared/styled/FlexContainerCol";
import { H3 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function EPICDisplay({ img_url, date, isFavorite, removeFavorite, addFavorite, id }) {
    return (
        <div key={id}>
            <H3>Earth on {date}</H3>
            <FlexContainerCol>
                <Img src={img_url}></Img>
                {isFavorite && (
                    <Button onClick={(id) => removeFavorite(id)}>Remove from favorites</Button>
                )}
                {!isFavorite && (
                    <Button
                        onClick={() => {
                            addFavorite({ id, date, img_url });
                            console.log(id);
                            console.log(date);
                        }}
                    >
                        Add Favorite
                    </Button>
                )}
            </FlexContainerCol>
        </div>
    );
}

export default EPICDisplay;
