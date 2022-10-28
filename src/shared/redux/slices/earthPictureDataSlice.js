import { createSlice } from "@reduxjs/toolkit";

export const earthPictureDataSlice = createSlice({
    name: "earthEvent",
    initialState: [],
    reducers: {
        setEarthPictureData: (state, action) => action.payload,
        clearEarthPictureData: () => [],
    },
});

export const { setEarthPictureData, clearEarthPictureData } = earthPictureDataSlice.actions;
export const earthPictureDataReducer = earthPictureDataSlice.reducer;
