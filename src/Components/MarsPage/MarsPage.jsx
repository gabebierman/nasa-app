import React from "react";
import MarsCuriosityDisplay from "./components/MarsCuriosityDisplay";
import MarsPerseveranceDisplay from "./components/MarsPerseveranceDisplay";
import {
    useGetMarsImageCuriosityQuery,
    useGetMarsImagePerseveranceQuery,
} from "../../shared/redux/RTKquery/nasaApiSlice";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { H1, H3 } from "../../shared/styled/Headers";
import moment from "moment";
import parseCurData from "./functions/parseCurData";
import parsePerData from "./functions/parsePerData";
import { removeFavorite, addFavorite } from "../../shared/redux/slices/favoritesSlice";

function MarsPage({ removeFavorite, addFavorite, favorites }) {
    const date = useSelector((state) => state.date);
    let curPic;
    const {
        data: curData,
        error: curError,
        isSuccess: curSuccess,
    } = useGetMarsImageCuriosityQuery(`${date}`);
    if (curSuccess && curData.length > 0) {
        curPic = parseCurData(curData);
    }

    let perPic;
    const {
        data: perData,
        error: perError,
        isSuccess: perSuccess,
    } = useGetMarsImagePerseveranceQuery(`${date}`);
    if (perSuccess && perData.length > 0) {
        perPic = parsePerData(perData);
    }
    return (
        <>
            <div>
                <H3>Pictures from Curiostiy on {moment(date).format("MM-DD-YYYY")}</H3>
                {curSuccess &&
                    curData.length > 0 &&
                    curPic.map((val) => (
                        <MarsCuriosityDisplay
                            key={val.id}
                            id={val.id}
                            cam_name={val.cam}
                            link={val.img}
                            date={moment(date).format("MM-DD-YYYY")}
                            isFavorite={favorites.some((fave) => fave.id === val.id)}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                            favorites={favorites}
                        />
                    ))}
                {curSuccess && curData.length === 0 && <p>no pictures today</p>}
                <H3>Pictures from Perserverance on {moment(date).format("MM-DD-YYYY")}</H3>
                {perSuccess &&
                    perData.length > 0 &&
                    perPic.map((val) => (
                        <MarsPerseveranceDisplay
                            key={val.id}
                            id={val.id}
                            cam_name={val.cam}
                            link={val.img}
                            date={moment(date).format("MM-DD-YYYY")}
                            isFavorite={favorites.some((fave) => fave.id === val.id)}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                            favorites={favorites}
                        />
                    ))}
                {curSuccess && curData.length === 0 && <p>no pictures today</p>}
            </div>
        </>
    );
}
const mapDispatchToProps = (dispatch) => ({
    removeFavorite: (id) => dispatch(removeFavorite(id)),
    addFavorite: (id) => dispatch(addFavorite(id)),
});

const mapStateToProps = (state) => ({
    date: state.date,
    favorites: state.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(MarsPage);
