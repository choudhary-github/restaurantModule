import axiosClient from './axiosClient';

export const authApi = {
  login: (data: { email: string; password: string }) => axiosClient.post('/auth/login', data),

  signup: (data: { email: string; password: string }) => axiosClient.post('/auth/signup', data),

  verifyOtp: (data: { email: string; otp: string }) => axiosClient.post('/auth/verify-otp', data),
};
