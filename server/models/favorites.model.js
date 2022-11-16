// import query from "../config/database.config";

//TODO - can i create three functions to determine which middleware to use or do I just need to shoot and pray?
export async function addFavorite() {
    try {
        //         const [firstGif] = await query(
        //             "SELECT * FROM favorite WHERE favorite.user_id = ? AND favorite.gif_id = ?",
        //             [gif.user_id, gif.gif_id]
        //         );
        //         if (firstGif) return { error: "Already in favorites", success: false };
        //         const { insertId } = await query("INSERT INTO favorite SET ? ", gif);
        //         return { data: { ...gif, insertId }, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

//TODO  - this one might work
export async function removeFavorite(id, user_id) {
    try {
        await query("DELETE FROM favorite WHERE user_id = ? AND id = ?", [user_id, id]);
        return { data: id, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

//TODO - This one will probably work as is but I need to only fire it if we find the userID
export async function getByUser(userID) {
    try {
        //         const faves = await query(
        //             "SELECT gif_id, title, url FROM favorite WHERE favorite.user_id = ?",
        //             [user_id]
        //         );
        //         return { data: faves, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}
