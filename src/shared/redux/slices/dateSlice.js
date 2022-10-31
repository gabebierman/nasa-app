import { createSlice } from "@reduxjs/toolkit";

function yesterday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return yesterday;
}

export const dateSlice = createSlice({
    name: "date",
    initialState: null,
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
