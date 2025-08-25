import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError } from 'axios';
import axiosClient from './axiosClient';

type AxiosArgs = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
  params?: any;
};

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosArgs, unknown, unknown> =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosClient({
        url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
