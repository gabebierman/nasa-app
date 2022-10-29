//"Mars" Page
//Mars Rover Images

import React from "react";

function MarsCuriosityDisplay({ cam_name, link }) {
    return (
        <div>
            <p>{cam_name}</p>
            <p>{link}</p>
        </div>
    );
}

export default MarsCuriosityDisplay;
