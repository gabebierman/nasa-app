//"Earth" page
//EPIC

import React from "react";

function EPICDisplay({ image_file, image_link }) {
    return (
        <div>
            EPICDisplay
            <p>File name of image - {image_file}</p>
            <p>img directly below here</p>
            <img src={image_link}></img>
        </div>
    );
}

export default EPICDisplay;
