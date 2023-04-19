import axios from "axios";
import querystring from "query-string";
const baseURL = process.env.BASE_URL || "http://localhost:5000/api/v1";

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => querystring.stringify(params),
  },
});

publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;

    return response;
  },
  (err) => {
    console.log(err);
    throw err.response.data;
  }
);

export default publicClient;
