import React from "react";

function APODDisplay({ explanation, url, title }) {
    return (
        <div>
            APODDisplay
            <p>{title}</p>
            <img src={url} />
            <p>{explanation}</p>
        </div>
    );
}

export default APODDisplay;
