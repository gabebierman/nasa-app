import React from "react";
import FavoritesDisplay from "./FavoritesDisplay";
import { FlexContainer } from "../../shared/styled/FlexContainer";
import { auth } from "../../firebase.config";
import { connect } from "react-redux";
import { favoritesReducer, removeFavorite } from "../../shared/redux/slices/favoritesSlice";

function FavoritesPage({ hold, favorites, removeFavorite }) {
    return (
        <FlexContainer>
            {favorites.length < 1 && (
                <div>No favorites to show for {auth.currentUser?.displayName}</div>
            )}
            {favorites.length !== 0 &&
                favorites.map((e) => (
                    <FavoritesDisplay
                        key={hold}
                        isFavorite={true}
                        removeFavorite={removeFavorite}
                    />
                ))}
        </FlexContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeFavorite: (hold) => dispatch(removeFavorite(hold)),
});

const mapStateToProps = (state) => ({
    favorites: state.favorites,
    user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
