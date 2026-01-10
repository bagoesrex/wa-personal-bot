import { createAxiosClient } from "./axios.client.js";
import config from "../config/config.js";

export const nekosClient = createAxiosClient({
  baseURL: config.nekos.baseUrl,
});
