import { createAxiosClient } from "./axios.client.js";
import config from "../config/config.js";

export const geminiClient = createAxiosClient({
  baseURL: config.gemini.baseUrl,
  headers: {
    "x-goog-api-key": `${config.gemini.apiKey}`,
    "Content-Type": "application/json",
  },
});
