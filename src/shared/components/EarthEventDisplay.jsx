import React from "react";

const EONETDisplay = ({ event_id, event_title, event_type, event_link }) => {
    return (
        <>
            EONET Display
            <div>
                Event Title: {event_title}
                <p>Event ID: {event_id}</p>
                <p>Event Type: {event_type}</p>
                <a href={event_link}>Learn More</a>
            </div>
            <br></br>
        </>
    );
};

export default EONETDisplay;
