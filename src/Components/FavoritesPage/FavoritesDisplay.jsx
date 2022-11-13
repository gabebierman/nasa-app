import React from "react";
import { favoritesReducer } from "../../shared/redux/slices/favoritesSlice";

function FavoritesDisplay({ hold, isFavorite, removeFavorite }) {
    return (
        <>
            <div key={hold}>
                <h3>{hold}</h3>
                <img src={hold} alt={hold}></img>
                {isFavorite && (
                    <button onClick={(hold) => removeFavorite(hold)}>Remove Favorite</button>
                )}
            </div>
        </>
    );
}

export default FavoritesDisplay;
