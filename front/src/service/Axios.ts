import axios from "axios";

export const axiosInstance_Unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
});
