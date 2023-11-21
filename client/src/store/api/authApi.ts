import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authActions } from 'store/redux/auth';

const backendURL = 'http://localhost:5000/';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: backendURL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: '/api/login',
        method: 'POST',
        body: { username, password },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { user, token },
          } = await queryFulfilled;

          dispatch(authActions.setUser(user));
          dispatch(authActions.setAuth(true));

          localStorage.setItem('token', token);
        } catch (err) {
          console.error('Error fetching post!');
        }
      },
    }),
    registration: builder.mutation({
      query: ({ username, password }) => ({
        url: '/api/registration',
        method: 'POST',
        body: { username, password },
      }),
    }),
    auth: builder.query<any, void>({
      query: () => ({
        url: '/api/auth',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { user, token },
          } = await queryFulfilled;

          dispatch(authActions.setUser(user));
          dispatch(authActions.setAuth(true));

          localStorage.setItem('token', token);
        } catch (err) {
          console.error('Error during authentication request!');
          localStorage.removeItem('token');
        }
      },
    }),
    getPhotos: builder.query<any, void>({
      query: () => `/api/photos`,
    }),
    getComments: builder.query({
      query: () => '/posts',
      providesTags: ['Comment'],
    }),
    addNewComment: builder.mutation({
      query: ({ user, photoId, commentText }) => ({
        url: '/api/comments',
        method: 'POST',
        body: { user, photoId, commentText },
      }),
      invalidatesTags: ['Comment'],
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/api/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useAuthQuery,
  useGetPhotosQuery,
  useAddNewCommentMutation,
  useDeleteCommentMutation,
} = appApi;
