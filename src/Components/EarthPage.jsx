import React from "react";
import { connect } from "react-redux";
import EONETDisplay from "../shared/components/EarthEventDisplay";
import { setEarthEvent, clearEarthEvent } from "../shared/redux/index";
import { useGetEarthEventDataQuery } from "../shared/redux/RTKquery/eonetApiSlice";
import { useGetEarthImageDataQuery } from "../shared/redux/RTKquery/nasaApiSlice";
import EPICDisplay from "../shared/components/EarthImageDisplay";

function EarthPage() {
    const {
        data: eventData,
        error: eventError,
        isSuccess: eventSuccess,
    } = useGetEarthEventDataQuery("2022-02-22");
    const {
        data: imageData,
        error: imageDataError,
        isSuccess: imageDataSuccess,
    } = useGetEarthImageDataQuery("2022-02-22");
    console.log(imageData);

    return (
        <>
            {eventError && <h2>Something went wrong.</h2>}
            {eventSuccess &&
                eventData.map((val) => (
                    <EONETDisplay
                        key={val.event_id}
                        event_id={val.event_id}
                        event_link={val.event_link}
                        event_title={val.event_title}
                        event_type={val.event_type}
                    />
                ))}
            {imageDataError && <h2>Something went wrong.</h2>}
            {imageDataSuccess && <EPICDisplay image_file={imageData[0].file_name} />}
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

//{
//    !error && (
//        <EONETDisplay
//            event_id={event_id}
//            event_link={event_link}
//            event_title={event_title}
//            event_type={event_type}
//        />
//    );
//}
