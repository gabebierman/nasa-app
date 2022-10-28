import React from "react";

const EONETDisplay = ({ event_id, event_title, event_type, event_link }) => {
    return (
        <>
            EONET Display
            <div>
                <p>Event id: {event_id}</p>
                <p>Event title: {event_title}</p>
                <p>Event Type: {event_type}</p>
                <a href={event_link}>Learn More</a>
            </div>
        </>
    );
};

export default EONETDisplay;
