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
import { FlexContainerCol } from "../../shared/styled/FlexContainerCol";
import { FlexContainerRow } from "../../shared/styled/FlexContainerRow";
import { H2, H3 } from "../../shared/styled/Headers";
import moment from "moment";
import { removeFavorite, addFavorite } from "../../shared/redux/slices/favoritesSlice";

function EarthPage({ removeFavorite, addFavorite, favorites, id }) {
    const date = useSelector((state) => state.date);

    const {
        data: eventData,
        error: eventError,
        isSuccess: eventSuccess,
        isLoading: eventLoading,
    } = useGetEarthEventDataQuery(`${date}`);
    const {
        data: imageData,
        isSuccess: imageDataSuccess,
        isLoading: imageLoading,
    } = useGetEarthImageDataQuery(`${date}`);
    const {
        data: neoData,
        error: neoError,
        isSuccess: neoSuccess,
        isLoading: neoLoading,
    } = useGetNearEarthObjectQuery(`${date}`);

    return (
        <>
            {(neoLoading || imageLoading || eventLoading) && (
                <H2>Getting latest information..</H2>
            )}
            {!neoLoading && !imageLoading && !eventLoading && (
                <>
                    {" "}
                    <FlexContainerCol>
                        {imageDataSuccess && imageData.length === 0 && (
                            <p>no picture for today</p>
                        )}
                        {imageDataSuccess && imageData.length > 0 && (
                            <EPICDisplay
                                key={id}
                                date={moment(date).format("MM-DD-YYYY")}
                                image_file={imageData[0].file_name}
                                img_url={`https://api.nasa.gov/EPIC/archive/natural/${moment(
                                    date
                                ).format("YYYY")}/${moment(date).format("MM")}/${moment(
                                    date
                                ).format("DD")}/png/${imageData[0].file_name}.png?api_key=${
                                    process.env.REACT_APP_NASA_API_KEY
                                }`}
                                id={imageData[0].file_name}
                                isFavorite={favorites.some((e) => e.id === id)}
                                addFavorite={addFavorite}
                                removeFavorite={removeFavorite}
                            />
                        )}
                    </FlexContainerCol>
                    <FlexContainerRow>
                        {eventError && <h3>Error Loading Data</h3>}
                        {eventSuccess && (
                            <H3>
                                Some major weather and geological events that happened on{" "}
                                {moment(date).format("MM-DD-YYYY")}
                            </H3>
                        )}
                    </FlexContainerRow>
                    <FlexContainerRow>
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
                    </FlexContainerRow>
                    <FlexContainerCol>
                        {neoError && <h3>Error Loading Data</h3>}
                        {neoSuccess &&
                            neoData
                                .filter((e) => e.hazardous === true)
                                .map((val) => (
                                    <NeoWsDisplay
                                        key={val.neo_id}
                                        id={val.neo_id}
                                        hazardous={val.hazardous}
                                        name={val.name}
                                    />
                                ))}
                    </FlexContainerCol>
                </>
            )}
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setSearchResults: (results) => dispatch(setEarthImage(results)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
    addFavorite: (id) => dispatch(addFavorite(id)),
});

const mapStateToProps = (state) => ({
    searchResults: state.earthPicture,
    date: state.date,
    favorites: state.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(EarthPage);
