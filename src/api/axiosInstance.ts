import axios from "axios";

/** 코딩 테스트라서 따로 env 파일에 분리하지 않았습니다. */
const CLIENT_ID = "d5h4JLpH3bqzZT_1aFFU";
const CLIENT_SECRET = "uPZ2dSp9c1";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["X-Naver-Client-Id"] = CLIENT_ID;
    config.headers["X-Naver-Client-Secret"] = CLIENT_SECRET;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
