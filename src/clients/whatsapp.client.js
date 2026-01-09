import wwebjsPkg from "whatsapp-web.js";

const { Client, LocalAuth } = wwebjsPkg;

export function createWhatsappClient(whatsappConfig) {
  return new Client({
    authStrategy: new LocalAuth({
      dataPath: whatsappConfig.auth.sessionPath,
    }),
    deviceName: whatsappConfig.deviceName,
    puppeteer: whatsappConfig.puppeteer,
  });
}
