//"Earth" page
//EPIC

import React from "react";
import { Img } from "../styled/Img";

function EPICDisplay({ image_link, date }) {
    return (
        <div>
            <p>Earth on {date}</p>
            <Img src={image_link}></Img>
        </div>
    );
}

export default EPICDisplay;
