import React from "react";
import FavoritesDisplay from "./FavoritesDisplay";
import { FlexContainer } from "../../shared/styled/FlexContainer";
import { auth } from "../../firebase.config";
import { connect } from "react-redux";
import { removeFavorite } from "../../shared/redux/slices/favoritesSlice";

function FavoritesPage({
    cam_name,
    link,
    id,
    favorites,
    removeFavorite,
    date,
    title,
    img_url,
}) {
    return (
        <FlexContainer>
            {favorites.length < 1 && (
                <div>No favorites to show for {auth.currentUser?.displayName}</div>
            )}
            {favorites.length !== 0 &&
                favorites.map((e) => (
                    <FavoritesDisplay
                        title={e.title}
                        explanation={e.explanation}
                        key={e.id}
                        id={e.id}
                        img_url={e.img_url}
                        isFavorite={true}
                        removeFavorite={removeFavorite}
                        link={e.link}
                        date={e.date}
                        cam_name={e.cam_name}
                    />
                ))}
        </FlexContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeFavorite: (id) => dispatch(removeFavorite(id)),
});

const mapStateToProps = (state) => ({
    favorites: state.favorites,
    user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
