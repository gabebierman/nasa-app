import { configureStore } from "@reduxjs/toolkit";
import { eonetApiSlice } from "./RTKquery/eonetApiSlice";
import { nasaApiSlice } from "./RTKquery/nasaApiSlice";
import { earthPictureReducer } from "./slices/earthPictureSlice";
import { solarFlareApiSlice } from "./RTKquery/solarFlareApiSlice";

export default configureStore({
    reducer: {
        earthPicture: earthPictureReducer,
        [eonetApiSlice.reducerPath]: eonetApiSlice.reducer,
        [nasaApiSlice.reducerPath]: nasaApiSlice.reducer,
        [solarFlareApiSlice.reducerPath]: solarFlareApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(eonetApiSlice.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nasaApiSlice.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(solarFlareApiSlice.middleware),
});
