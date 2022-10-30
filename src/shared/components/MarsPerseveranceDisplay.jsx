import React from "react";
import { Img } from "../styled/Img";

function MarsPerseveranceDisplay({ cam_name, link }) {
    return (
        <div>
            <p>{cam_name}</p>
            <Img src={link}></Img>
        </div>
    );
}

export default MarsPerseveranceDisplay;
