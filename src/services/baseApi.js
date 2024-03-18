import axios from "axios";

const baseURL = "https://test-server-1-95v1.onrender.com/api";

export const baseAPI = axios.create({
  baseURL,
});
