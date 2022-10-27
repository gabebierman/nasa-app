import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nasaApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.nasa.gov/" }),
    endpoints: (builder) => ({
        getEarthImageData: builder.query({
            query: (date) =>
                `EPIC/api/?natural/date/${date}&enhanced/date/${date}?api_key=${process.env.REACT_APP_NASA_API_KEY}`,
        }),
        getMarsImageCuriosity: builder.query({
            query: (date) =>
                `mars-photos/api/v1/rovers/curiosity/photos/?api_key=${process.env.REACT_APP_NASA_API_KEY}&earth_date=${date}`,
        }),
        getMarsImagePerseverance: builder.query({
            query: (date) =>
                `mars-photos/api/v1/rovers/Perseverance/photos/?api_key=${process.env.REACT_APP_NASA_API_KEY}&earth_date=${date}`,
        }),
        getNearEarthObject: builder.query({
            query: (date) =>
                `neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`,
        }),
        getSpaceWeather: builder.query({
            query: (date) =>
                `DONKI/notifications?startDate=${date}&endDate=${date}&type=all&api_key=${process.env.REACT_APP_NASA_API_KEY}`,
        }),
    }),
});

export const {
    useGetEarthImageDataQuery,
    useGetMarsImageCuriosityQuery,
    useGetMarsImagePerseveranceQuery,
    useGetNearEarthObjectQuery,
    useGetSpaceWeatherQuery,
} = nasaApiSlice;
