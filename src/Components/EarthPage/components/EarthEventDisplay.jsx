import React from "react";
import { EONETFlex } from "../../../shared/styled/EONETFlexContainer";
import { H4 } from "../../../shared/styled/Headers";
import { Link } from "../../../shared/styled/Link";
const EONETDisplay = ({ event_id, event_title, event_type, event_link }) => {
    return (
        <EONETFlex>
            <H4>{event_title}</H4>
            <p>ID: {event_id}</p>
            <p>Type: {event_type}</p>
            <Link target="_blank" href={event_link}>
                Learn More
            </Link>
            <br></br>
        </EONETFlex>
    );
};

export default EONETDisplay;
