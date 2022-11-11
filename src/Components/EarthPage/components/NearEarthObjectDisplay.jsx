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
