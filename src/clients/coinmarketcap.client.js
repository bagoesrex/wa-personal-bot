import { createAxiosClient } from "./axios.client.js";
import config from "../config/config.js";

export const coinmarketcapClient = createAxiosClient({
  baseURL: config.coinmarketcap.baseUrl,
  headers: {
    "X-CMC_PRO_API_KEY": `${config.coinmarketcap.apiKey}`,
    "Content-Type": "application/json",
  },
});
