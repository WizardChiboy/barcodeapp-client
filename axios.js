import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.40.137:9900/api/v1",
  withCredentials: true,
});

export default instance;
