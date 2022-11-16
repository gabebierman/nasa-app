import React from "react";
import { EONETFlex } from "../../../shared/styled/EONETFlexContainer";
import { Link } from "../../../shared/styled/Link";

function NeoWsDisplay({ hazardous, id }) {
    return (
        <EONETFlex>
            {hazardous && (
                <div>
                    <p>
                        Bonus! A Near Earth Object passed within hazardous distance of Earth on
                        this day.
                    </p>
                    <Link
                        target="_blank"
                        href={`https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${id}`}
                    >
                        Learn More Here
                    </Link>
                </div>
            )}
        </EONETFlex>
    );
}

export default NeoWsDisplay;
