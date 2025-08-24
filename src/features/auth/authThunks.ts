import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../api/authApi";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: { email: string; password: string }) => {
    const response = await authApi.login(data);
    return response.data; // {user, token}
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (data: { email: string; password: string }) => {
    const response = await authApi.signup(data);
    return response.data;
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (data: { email: string; otp: string }) => {
    const response = await authApi.verifyOtp(data);
    return response.data;
  }
);
