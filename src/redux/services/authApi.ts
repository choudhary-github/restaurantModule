import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    signup: builder.mutation<{ message: string }, { email: string; password: string }>({
      query: data => ({
        url: '/auth/signup',
        method: 'POST',
        data,
      }),
    }),

    requestOtp: builder.mutation<{ message: string }, { email: string }>({
      query: data => ({
        url: '/auth/request-otp',
        method: 'POST',
        data,
      }),
    }),

    verifyOtp: builder.mutation<{ token: string }, { email: string; otp: string }>({
      query: data => ({
        url: '/auth/verify-otp',
        method: 'POST',
        data,
      }),
    }),

    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: data => ({
        url: '/auth/login',
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { useSignupMutation, useRequestOtpMutation, useVerifyOtpMutation, useLoginMutation } = authApi;
