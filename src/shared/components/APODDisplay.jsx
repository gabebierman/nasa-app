import React from "react";
import { Img } from "../styled/Img";

function APODDisplay({ explanation, url, title }) {
    return (
        <div>
            APODDisplay
            <p>{title}</p>
            <Img src={url} />
            <p>{explanation}</p>
        </div>
    );
}

export default APODDisplay;
