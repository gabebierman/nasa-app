//"Mars" Page
//Mars Rover Images

import React from "react";
import { Img } from "../styled/Img";

function MarsCuriosityDisplay({ cam_name, link }) {
    return (
        <div>
            <p>{cam_name}</p>
            <Img src={link}></Img>
        </div>
    );
}

export default MarsCuriosityDisplay;
