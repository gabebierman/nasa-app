import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exoplanetApiSlice = createApi({
    reducerPath: "exoplanetApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://exoplanetarchive.ipac.caltech.edu/TAP/",
    }),
    endpoints: (builder) => ({
        getExoPlanet: builder.query({
            query: (date) =>
                `sync?query=select+pl_name,pl_rade,pl_masse,pl_refname+from+ps+where+pl_rade+<+=+1.8+and+pl_masse+>+0+and+releasedate+=+'${date}'&format=json`,
        }),
    }),
});
export const { useGetExoPlanetQuery } = exoplanetApiSlice;
