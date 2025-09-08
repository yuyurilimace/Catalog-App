import axios from "axios";

export const baseURL = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
