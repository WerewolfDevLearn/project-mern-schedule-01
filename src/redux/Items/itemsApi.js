import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    }
  }),
  tagTypes: ['ITEMS'],
  endpoints: (builder) => ({
    getContats: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'GET'
      }),
      providesTags: ['Contacts']
    }),
    createContact: builder.mutation({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact
      }),
      invalidatesTags: ['Contacts']
    }),
    deleteContact: builder.mutation({
      query: (contactID) => ({
        url: `/contacts/${contactID}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Contacts']
    }),
    updateContacts: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { ...rest }
      }),
      invalidatesTags: ['Contacts']
    })
  })
});

export const {
  useGetContatsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactsMutation
} = itemApi;
