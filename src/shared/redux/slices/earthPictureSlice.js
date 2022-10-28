import { createSlice } from "@reduxjs/toolkit";

export const earthPictureSlice = createSlice({
    name: "earthPicture",
    initialState: null,
    reducers: {
        setEarthImage: (state, action) => action.payload,
        clearEarthImage: () => null,
    },
});

export const { clearEarthImage, setEarthImage } = earthPictureSlice.actions;
export const earthPictureReducer = earthPictureSlice.reducer;
