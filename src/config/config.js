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
};

export default config;
