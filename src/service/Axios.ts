import axios from "axios";

export const axiosInstance_Unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const axiosInstance_Server = axios.create({
  baseURL: "http://15.165.229.191:8080",
});
