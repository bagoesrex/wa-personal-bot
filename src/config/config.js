import { env } from "./env.js";

const config = {
  app: {
    name: env.APP_NAME,
  },
  whatsapp: {
    deviceName: env.WA_DEVICE_NAME,
    auth: {
      sessionPath: env.WA_SESSION_PATH,
    },
    puppeteer: {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  },
  gemini: {
    apiKey: env.GEMINI_API_KEY,
    model: env.GEMINI_MODEL,
    baseUrl: "https://generativelanguage.googleapis.com/v1beta",
  },
  nekos: {
    baseUrl: "https://nekos.life/api/v2/img/neko",
  },
};

export default config;
