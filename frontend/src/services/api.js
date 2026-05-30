import axios from "axios";

const API = axios.create({
  baseURL: "http://13.54.164.141:5001/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;