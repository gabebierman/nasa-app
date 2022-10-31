//Bonus to tack onto "Earth" something like "Did an asteroid come in potentialy dangerous to earth range? No" then if "yes" include link to page about asterid
//NeoWs

import React from "react";

function NeoWsDisplay({ hazardous, id }) {
    return (
        <>
            {hazardous && (
                <div>
                    <p>
                        Bonus! A Near Earth Object passed within hazardous distance of Earth on
                        this day.
                    </p>
                    <a
                        target="_blank"
                        href={`https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${id}`}
                    >
                        Learn More Here
                    </a>
                </div>
            )}
        </>
    );
}

export default NeoWsDisplay;
