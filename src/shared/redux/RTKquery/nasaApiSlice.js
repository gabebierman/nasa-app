import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const nasaApiSlice = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: "https://api.nasa.gov/" }),

})

export const { useGetPostsQuery } = nasaApiSlice