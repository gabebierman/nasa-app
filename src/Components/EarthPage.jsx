import React from "react";
import { connect } from "react-redux";
import EONETDisplay from "../shared/components/EarthEventDisplay";
import { useGetEarthEventDataQuery } from "../shared/redux/RTKquery/eonetApiSlice";
import {
    nasaApiSlice,
    useGetEarthImageDataQuery,
    useGetEarthImageQuery,
} from "../shared/redux/RTKquery/nasaApiSlice";
import EPICDisplay from "../shared/components/EarthImageDisplay";
// import getEarthImage from "../shared/functions/getEarthImage";
// import { setEarthPicture } from "../shared/redux/store";
import { setEarthImage } from "../shared/redux/slices/earthPictureSlice";

function EarthPage({ setEarthPicture, searchResults }) {
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

    // const { error } = useQuery(["getEarthImage", url], () => getEarthImage(), {
    //     onSuccess: (data) => setEarthPicture(data),
    //     enabled: !!url,
    // });

    const yyyy = "2022";
    const mm = "02";
    const dd = "22";

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
            {imageDataSuccess && (
                <EPICDisplay
                    image_file={imageData[0].file_name}
                    image_link={`https://api.nasa.gov/EPIC/archive/natural/${yyyy}/${mm}/${dd}/png/${imageData[0].file_name}.png?api_key=${process.env.REACT_APP_NASA_API_KEY}`}
                />
            )}
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setSearchResults: (results) => dispatch(setEarthImage(results)),
});

const mapStateToProps = (state) => ({
    searchResults: state.earthPicture,
});

export default connect(mapStateToProps, mapDispatchToProps)(EarthPage);
