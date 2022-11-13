import React from "react";
import MarsCuriosityDisplay from "./components/MarsCuriosityDisplay";
import MarsPerseveranceDisplay from "./components/MarsPerseveranceDisplay";
import {
    useGetMarsImageCuriosityQuery,
    useGetMarsImagePerseveranceQuery,
} from "../../shared/redux/RTKquery/nasaApiSlice";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { FlexContainer } from "../../shared/styled/FlexContainer";
import { H1, H3 } from "../../shared/styled/Headers";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import parseCurData from "./functions/parseCurData";
import parsePerData from "./functions/parsePerData";
import { removeFavorite, addFavorite } from "../../shared/redux/slices/favoritesSlice";

function MarsPage({ removeFavorite, addFavorite, favorites }) {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/landing";
        navigate(path);
    };
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
                            cam_name={val.cam}
                            link={val.img}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                            isFavorite={favorites.some((fave) => fave.hold === val.hold)}
                        />
                    ))}
                {curSuccess && curData.length === 0 && <p>no pictures today</p>}
                <H3>Pictures from Perserverance on {moment(date).format("MM-DD-YYYY")}</H3>
                {perSuccess &&
                    perData.length > 0 &&
                    perPic.map((val) => (
                        <MarsPerseveranceDisplay
                            key={val.id}
                            cam_name={val.cam}
                            link={val.img}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                            isFavorite={favorites.some((fave) => fave.gif_id === val.gif_id)}
                        />
                    ))}
                {curSuccess && curData.length === 0 && <p>no pictures today</p>}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MarsPage);
