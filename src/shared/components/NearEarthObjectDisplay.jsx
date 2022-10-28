//Bonus to tack onto "Earth" something like "Did an asteroid come in potentialy dangerous to earth range? No" then if "yes" include link to page about asterid
//NeoWs

import React from "react";

function NeoWsDisplay({ dangerous, id }) {
    return (
        <>
            <div>NeoWsDisplay</div>
            <div>
                {id}
                <p>{dangerous}</p>
            </div>
        </>
    );
}

export default NeoWsDisplay;
