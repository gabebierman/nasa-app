import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
    name: "date",
    initialState: new Date().toJSON().slice(0, 10),
    reducers: {
        setDate: (state, action) => action.payload,
        setDateDay: (state, action) => action.payload,
        setDateMonth: (state, action) => action.payload,
        setDateYear: (state, action) => action.payload,
        clearDate: () => new Date().toJSON().slice(0, 10),
    },
});

export const { setDate, clearDate, setDateDay, setDateMonth, setDateYear } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
