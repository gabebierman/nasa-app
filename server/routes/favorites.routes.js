import express from "express";
// import validateGifData from "../middleware/validateGifData";
// import auth from "../middleware/auth.middleware";
import { addFavorite, getByUser, removeFavorite } from "../models/favorites.model.js";
const router = express.Router();

router.put("/add", async (req, res) => {
    // const gif = { ...req.body, user_id: req.user.id };
    // const resObj = await addFavorite(gif);
    return res.send(resObj);
});

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const resObj = await removeFavorite(req.user.id, id);
    return res.send(resObj);
});

router.get("/", async (req, res) => {
    const resObj = await getByUser(req.user.id);
    return res.send(resObj);
});

export default router;
