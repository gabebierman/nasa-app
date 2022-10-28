import { createSlice } from "@reduxjs/toolkit";

export const earthEventSearchSlice = createSlice({
    name: "earthEvent",
    initialState: [],
    reducers: {
        setEarthEvent: (state, action) => action.payload,
        clearEarthEvent: () => [],
    },
});

export const { setEarthEvent, clearEarthEvent } = earthEventSearchSlice.actions;
export const earthEventReducer = earthEventSearchSlice.reducer;
