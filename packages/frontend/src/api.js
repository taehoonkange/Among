import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3065",
});

export default api;
