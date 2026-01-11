import config from "../config/config.js";
import { createAxiosClient } from "./axios.client.js";

export const waifuClient = createAxiosClient({
  baseURL: config.waifu.baseUrl,
});
