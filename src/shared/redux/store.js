import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { eonetApiSlice } from "./RTKquery/eonetApiSlice";
import { nasaApiSlice } from "./RTKquery/nasaApiSlice";
import { earthPictureReducer } from "./slices/earthPictureSlice";
import { exoplanetApiSlice } from "./RTKquery/exoplanetApiSlice";
import { dateReducer } from "./slices/dateSlice";
import { userReducer } from "./slices/userSlice";
import { favoritesReducer } from "./slices/favoritesSlice";

export default configureStore({
    reducer: {
        earthPicture: earthPictureReducer,
        date: dateReducer,
        user: userReducer,
        favorites: favoritesReducer,
        [eonetApiSlice.reducerPath]: eonetApiSlice.reducer,
        [nasaApiSlice.reducerPath]: nasaApiSlice.reducer,
        [exoplanetApiSlice.reducerPath]: exoplanetApiSlice.reducer,
    },
    middleware: (getdefaultMiddleware) =>
        getdefaultMiddleware().concat([
            eonetApiSlice.middleware,
            exoplanetApiSlice.middleware,
            nasaApiSlice.middleware,
        ]),
});
