import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nasaApiSlice = createApi({
    reducerPath: "nasaApiSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.nasa.gov/" }),
    endpoints: (builder) => ({
        getEarthImageData: builder.query({
            query: (date) =>
                `EPIC/api/natural/date/${date}?api_key=${process.env.REACT_APP_NASA_API_KEY}`,
            transformResponse: (response) => {
                return response.map((response) => ({
                    file_name: response.image,
                }));
            },
        }),
        getEarthImage: builder.query({
            query: ({ yyyy, mm, dd, fileName }) =>
                `https://api.nasa.gov/EPIC/archive/natural/${yyyy}/${mm}/${dd}/png/${fileName}.png?api_key=${process.env.REACT_APP_NASA_API_KEY}`,
        }),
        getNearEarthObject: builder.query({
            query: (date) =>
                `neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`,
            transformResponse: (response, meta, arg) => {
                return response.near_earth_objects[arg].map((response) => ({
                    neo_id: response.neo_reference_id,
                    hazardous: response.is_potentially_hazardous_asteroid,
                }));
            },
        }),
        getMarsImageCuriosity: builder.query({
            query: (date) =>
                `mars-photos/api/v1/rovers/curiosity/photos/?api_key=${process.env.REACT_APP_NASA_API_KEY}&earth_date=${date}`,
            transformResponse: (response) => {
                return response.photos.map((response) => ({
                    id: response.id,
                    img: response.img_src,
                    cam: response.camera.full_name,
                }));
            },
        }),
        getMarsImagePerseverance: builder.query({
            query: (date) =>
                `mars-photos/api/v1/rovers/Perseverance/photos/?api_key=${process.env.REACT_APP_NASA_API_KEY}&earth_date=${date}`,
            transformResponse: (response) => {
                return response.photos.map((response) => ({
                    id: response.id,
                    img: response.img_src,
                    cam: response.camera.full_name,
                }));
            },
        }),
        getAPOD: builder.query({
            query: (date) =>
                `planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`,
        }),
    }),
});

export const {
    useGetEarthImageDataQuery,
    useGetEarthImageQuery,
    useGetMarsImageCuriosityQuery,
    useGetMarsImagePerseveranceQuery,
    useGetNearEarthObjectQuery,
    useGetAPODQuery,
} = nasaApiSlice;
