import React from "react";

function FavoritesDisplay({ hold, isFavorite, removeFavorite }) {
    return (
        <>
            <div key={hold}>
                <h3>{hold}</h3>
                <img src={hold} alt={hold}></img>
                {isFavorite && (
                    <button onClick={(hold) => removeFavorite(hold)}>
                        Remove image from favorites
                    </button>
                )}
            </div>
        </>
    );
}

export default FavoritesDisplay;
