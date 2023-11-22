import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { appActions } from 'store/redux/app';
import { TPhoto } from 'types/app';
import {
  TPostAddNewComment,
  TResDeleteComment,
  TResAddNewComment,
  TResAuth,
  TResRegistration,
  TGetRegistration,
  TPostLogin,
  TResLogin,
} from './types';

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
  tagTypes: ['Photos', 'Comments', 'Comment'],
  endpoints: (builder) => ({
    // auth
    login: builder.mutation<TResLogin, TPostLogin>({
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
          dispatch(appActions.setUser(user));
          dispatch(appActions.setAuth(true));

          localStorage.setItem('token', token);
        } catch (err) {
          console.error('Error fetching post!');
        }
      },
    }),
    registration: builder.mutation<TResRegistration, TGetRegistration>({
      query: ({ username, password }) => ({
        url: '/api/registration',
        method: 'POST',
        body: { username, password },
      }),
    }),
    auth: builder.query<TResAuth, void>({
      query: () => ({
        url: '/api/auth',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { user, token },
          } = await queryFulfilled;

          dispatch(appActions.setUser(user));
          dispatch(appActions.setAuth(true));

          localStorage.setItem('token', token);
        } catch (err) {
          console.error('Error during authentication request!');
          localStorage.removeItem('token');
        }
      },
    }),
    // photos
    getPhotos: builder.query<TPhoto[], void>({
      query: () => `/api/photos`,
      providesTags: ['Photos'],
    }),
    addNewComment: builder.mutation<TResAddNewComment, TPostAddNewComment>({
      query: ({ user, photoId, commentText }) => ({
        url: '/api/comments',
        method: 'POST',
        body: { user, photoId, commentText },
      }),
      invalidatesTags: ['Photos'],
    }),
    deleteComment: builder.mutation<TResDeleteComment, string>({
      query: (id) => ({
        url: `/api/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Photos'],
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
