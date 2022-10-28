import { configureStore } from "@reduxjs/toolkit";
import { earthEventReducer } from "./slices/earthEventSearchSlice";

export default configureStore({
    reducer: {
        earthEvent: earthEventReducer,
    },
});
