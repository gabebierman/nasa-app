import React from "react";
import { connect } from "react-redux";
import EONETDisplay from "./components/EarthEventDisplay";
import EPICDisplay from "./components/EarthImageDisplay";
import NeoWsDisplay from "./components/NearEarthObjectDisplay";
import { useGetEarthEventDataQuery } from "../../shared/redux/RTKquery/eonetApiSlice";
import {
    useGetEarthImageDataQuery,
    useGetNearEarthObjectQuery,
} from "../../shared/redux/RTKquery/nasaApiSlice";
import { setEarthImage } from "../../shared/redux/slices/earthPictureSlice";
import { useSelector } from "react-redux";
import { FlexContainer } from "../../shared/styled/FlexContainer";
import { H3 } from "../../shared/styled/Headers";
import moment from "moment";

function EarthPage() {
    const date = useSelector((state) => state.date);

    const {
        data: eventData,
        error: eventError,
        isSuccess: eventSuccess,
    } = useGetEarthEventDataQuery(`${date}`);
    const {
        data: imageData,
        error: imageDataError,
        isSuccess: imageDataSuccess,
    } = useGetEarthImageDataQuery(`${date}`);

    const {
        data: neoData,
        error: neoError,
        isSuccess: neoSuccess,
        isLoading: neoLoading,
    } = useGetNearEarthObjectQuery(`${date}`);

    return (
        <>
            <FlexContainer>
                {imageDataError && <h2>EPIC error</h2>}
                {imageData && (
                    <EPICDisplay
                        date={moment(date).format("MM-DD-YYYY")}
                        image_file={imageData[0].file_name}
                        image_link={`https://api.nasa.gov/EPIC/archive/natural/${moment(
                            date
                        ).format("YYYY")}/${moment(date).format("MM")}/${moment(date).format(
                            "DD"
                        )}/png/${imageData[0].file_name}.png?api_key=${
                            process.env.REACT_APP_NASA_API_KEY
                        }`}
                    />
                )}
            </FlexContainer>
            {eventSuccess && (
                <H3>
                    Some major weather and geological events that happened on{" "}
                    {moment(date).format("MM-DD-YYYY")}
                </H3>
            )}
            <FlexContainer>
                {eventError && <h2>EONET error</h2>}
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
            </FlexContainer>
            <FlexContainer>
                {neoError && <h3>NEO error</h3>}
                {neoLoading && <h3>Loading NEO data...</h3>}
                {neoSuccess &&
                    neoData.map((val) => (
                        <NeoWsDisplay
                            key={val.neo_id}
                            id={val.neo_id}
                            hazardous={val.hazardous}
                        />
                    ))}
            </FlexContainer>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setSearchResults: (results) => dispatch(setEarthImage(results)),
});

const mapStateToProps = (state) => ({
    searchResults: state.earthPicture,
    date: state.date,
});

export default connect(mapStateToProps, mapDispatchToProps)(EarthPage);
