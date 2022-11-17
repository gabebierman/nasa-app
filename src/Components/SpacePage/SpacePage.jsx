import React from "react";
import APODDisplay from "./components/APODDisplay";
import { useGetAPODQuery } from "../../shared/redux/RTKquery/nasaApiSlice";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { removeFavorite, addFavorite } from "../../shared/redux/slices/favoritesSlice";
import moment from "moment";
import { H2 } from "../../shared/styled/Headers";

function SpacePage({ removeFavorite, addFavorite, favorites }) {
    const date = useSelector((state) => state.date);
    const {
        data: APODdata,
        error: APODerror,
        isSuccess: APODsuccess,
        isLoading: APODloading,
    } = useGetAPODQuery(`${date}`);
    const APODarray = [APODdata];
    return (
        <>
            {APODloading && <H2>Getting latest information..</H2>}
            {APODdata &&
                !APODloading &&
                APODarray.map((e) => (
                    <APODDisplay
                        key={e.title}
                        id={e.title}
                        date={moment(date).format("MM-DD-YYYY")}
                        explanation={e.explanation}
                        title={e.title}
                        link={e.url}
                        isFavorite={favorites.some((fave) => fave.title === e.title)}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                    />
                ))}
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeFavorite: (title) => dispatch(removeFavorite(title)),
    addFavorite: (title) => dispatch(addFavorite(title)),
});

const mapStateToProps = (state) => ({
    date: state.date,
    favorites: state.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(SpacePage);
