import axios from "./api";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);

export default fetcher;
