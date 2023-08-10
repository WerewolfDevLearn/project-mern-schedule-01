import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-mern-schedule-03.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    }
  }),
  tagTypes: ['reviews'],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: '/reviews',
        method: 'GET'
      }),
      providesTags: ['reviews']
    }),
    createReviews: builder.mutation({
      query: (review) => ({
        url: '/reviews',
        method: 'POST',
        body: review
      }),
      invalidatesTags: ['reviews']
    }),
    deleteReviews: builder.mutation({
      query: (reviewID) => ({
        url: `/reviews/${reviewID}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['reviews']
    }),
    updateReviews: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/reviews/${id}`,
        method: 'PATCH',
        body: { ...rest }
      }),
      invalidatesTags: ['reviews']
    })
  })
});

export const {
  useGetReviewsQuery,
  useCreateReviewsMutation,
  useDeleteReviewsMutation,
  useUpdateReviewssMutation
} = reviewsApi;
