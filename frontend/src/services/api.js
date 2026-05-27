import axios from "axios";

const API = axios.create({
  baseURL: "http://32.236.115.247:5001/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;