import React from "react";
import { connect } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import EONETDisplay from "../shared/components/EarthEventDisplay";
import getEarthEvent from "../shared/functions/getEarthEventData";
import { setEarthEvent, clearEarthEvent } from "../shared/redux/index";

function EarthPage({ setSearchResults, searchResults }) {
    const date = "2022-02-22";
    const { error } = useQuery(["getEarthEvent", date], () => getEarthEvent(date), {
        onSuccess: (data) => setSearchResults(data),
        enabled: !!date,
    });
    return (
        <>
            {error && <h2>Something went wrong.</h2>}
            {!error &&
                searchResults.map((val) => (
                    <EONETDisplay
                        key={val.event_id}
                        {...val}
                        event_title={val.event_title}
                        event_type={val.event_type}
                        event_link={val.event_link}
                    />
                ))}
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setSearchResults: (results) => dispatch(setEarthEvent(results)),
});

const mapStateToProps = (state) => ({
    searchResults: state.earthEvent,
});

export default connect(mapStateToProps, mapDispatchToProps)(EarthPage);
