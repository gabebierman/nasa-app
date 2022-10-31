import React from "react";
import { FlexContainer } from "../styled/FlexContainer";

const EONETDisplay = ({ event_id, event_title, event_type, event_link }) => {
    return (
        <div>
            <p>Event Title: {event_title}</p>
            <p>Event ID: {event_id}</p>
            <p>Event Type: {event_type}</p>
            <a target="_blank" href={event_link}>
                Learn More
            </a>
            <br></br>
        </div>
    );
};

export default EONETDisplay;
