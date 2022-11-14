import React from "react";
import APODDisplay from "./components/APODDisplay";
import { useGetAPODQuery } from "../../shared/redux/RTKquery/nasaApiSlice";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { FlexContainer } from "../../shared/styled/FlexContainer";
import { removeFavorite, addFavorite } from "../../shared/redux/slices/favoritesSlice";
import moment from "moment";

function SpacePage({ removeFavorite, addFavorite, favorites }) {
    const date = useSelector((state) => state.date);
    const {
        data: APODdata,
        error: APODerror,
        isSuccess: APODsuccess,
    } = useGetAPODQuery(`${date}`);
    const APODarray = [APODdata];
    return (
        <>
            {APODdata &&
                APODarray.map((e) => (
                    <APODDisplay
                        key={e.title}
                        date={moment(date).format("MM-DD-YYYY")}
                        explanation={e.explanation}
                        title={e.title}
                        link={e.url}
                        isFavorite={favorites.some((fave) => fave.hold === e.hold)}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                    />
                ))}
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeFavorite: (hold) => dispatch(removeFavorite(hold)),
    addFavorite: (hold) => dispatch(addFavorite(hold)),
});

const mapStateToProps = (state) => ({
    date: state.date,
    favorites: state.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(SpacePage);
