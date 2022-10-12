import axios from "axios";

const BASE_API = "https://spotify23.p.rapidapi.com";

const publicAxios = axios.create({
  baseURL: BASE_API,
});

publicAxios.interceptors.request.use(
  (config) => {
    config.headers = {
      "X-RapidAPI-Key": "8bb3505e87msh2865017554b1f2bp11c8dajsn4e4b9542582a",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

// Handles error
publicAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const code = error && error.response ? error.response.status : 0;
    if (code === 401 || code === 403 || code === 410 || code === 404) {
      // console.error("I don't care about what happens.");
    }
    return Promise.reject(error);
  }
);

export default publicAxios;
