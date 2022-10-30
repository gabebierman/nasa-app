import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { eonetApiSlice } from "./RTKquery/eonetApiSlice";
import { nasaApiSlice } from "./RTKquery/nasaApiSlice";
import { earthPictureReducer } from "./slices/earthPictureSlice";
import { solarFlareApiSlice } from "./RTKquery/solarFlareApiSlice";
import { exoplanetApiSlice } from "./RTKquery/exoplanetApiSlice";

export default configureStore({
    reducer: {
        earthPicture: earthPictureReducer,
        [eonetApiSlice.reducerPath]: eonetApiSlice.reducer,
        [nasaApiSlice.reducerPath]: nasaApiSlice.reducer,
        [solarFlareApiSlice.reducerPath]: solarFlareApiSlice.reducer,
        [exoplanetApiSlice.reducerPath]: exoplanetApiSlice.reducer,
    },
    middleware: (getdefaultMiddleware) =>
        getdefaultMiddleware().concat([
            eonetApiSlice.middleware,
            exoplanetApiSlice.middleware,
            nasaApiSlice.middleware,
        ]),
});
