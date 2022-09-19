import axios from "axios";

const api = axios.create({
  baseURL: "https://amongapi.shop",
});

export default api;
