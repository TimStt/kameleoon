import axios from "axios";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache",
  },
});
