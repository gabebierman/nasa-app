//"Earth" page
//EPIC

import React from "react";
import { Img } from "../styled/Img";

function EPICDisplay({ image_file, image_link }) {
    return (
        <div>
            <p>File name of image - {image_file}</p>
            <p>img directly below here</p>
            <Img src={image_link}></Img>
        </div>
    );
}

export default EPICDisplay;
