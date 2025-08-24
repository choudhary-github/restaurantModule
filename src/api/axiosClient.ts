import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8085",
  timeout: 10000,
});

axiosClient.interceptors.request.use(async (config) => {
  // Add auth token if exists
  const token = ""; // fetch from Redux or AsyncStorage
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
