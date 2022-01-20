import axios, { AxiosInstance } from "axios";
import { config } from "./confing";

export const customAxios = axios.create({
  baseURL: `${config.wLocalUrl}`, // 기본 서버 주소 입력
  // headers: {
  //   access_token: cookies.get('access_token'),
  // },
});
