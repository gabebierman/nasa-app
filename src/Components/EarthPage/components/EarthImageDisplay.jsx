import React from "react";
import { FlexContainer } from "../../../shared/styled/FlexContainer";
import { H3 } from "../../../shared/styled/Headers";
import { Img } from "../../../shared/styled/Img";

function EPICDisplay({ img_url, date, isFavorite, removeFavorite, addFavorite, id }) {
    return (
        <div key={id}>
            <H3>Earth on {date}</H3>
            <FlexContainer>
                <Img src={img_url}></Img>
                {isFavorite && (
                    <button onClick={(id) => removeFavorite(id)}>Remove from favorites</button>
                )}
                {!isFavorite && (
                    <button
                        onClick={() => {
                            addFavorite({ id, date, img_url });
                            console.log(id);
                            console.log(date);
                        }}
                    >
                        Add Favorite
                    </button>
                )}
            </FlexContainer>
        </div>
    );
}

export default EPICDisplay;
