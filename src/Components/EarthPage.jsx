import React from "react";
import { connect } from "react-redux";
import EONETDisplay from "../shared/components/EarthEventDisplay";
import { useGetEarthEventDataQuery } from "../shared/redux/RTKquery/eonetApiSlice";
import {
    useGetEarthImageDataQuery,
    useGetNearEarthObjectQuery,
} from "../shared/redux/RTKquery/nasaApiSlice";
import EPICDisplay from "../shared/components/EarthImageDisplay";
import { setEarthImage } from "../shared/redux/slices/earthPictureSlice";
import NeoWsDisplay from "../shared/components/NearEarthObjectDisplay";
import { useSelector } from "react-redux";
import { FlexContainer } from "../shared/styled/FlexContainer";
import { H3 } from "../shared/styled/Headers";

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

    const yyyy = date.toString().slice(0, 4);
    const mm = date.toString().slice(5, 7);
    const dd = date.toString().slice(8, 10);

    return (
        <FlexContainer>
            <FlexContainer>
                {imageDataError && <h2>EPIC error</h2>}
                {imageData && (
                    <EPICDisplay
                        date={`${date}`}
                        image_file={imageData[0].file_name}
                        image_link={`https://api.nasa.gov/EPIC/archive/natural/${yyyy}/${mm}/${dd}/png/${imageData[0].file_name}.png?api_key=${process.env.REACT_APP_NASA_API_KEY}`}
                    />
                )}
            </FlexContainer>
            {eventSuccess && (
                <H3>Some major weather and geological events that happened on {date}</H3>
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
        </FlexContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setSearchResults: (results) => dispatch(setEarthImage(results)),
});

const mapStateToProps = (state) => ({
    searchResults: state.earthPicture,
    date: state.date,
    dateDay: state.dateDay,
    dateMonth: state.dateMonth,
    dateYear: state.dateYear,
});

export default connect(mapStateToProps, mapDispatchToProps)(EarthPage);
