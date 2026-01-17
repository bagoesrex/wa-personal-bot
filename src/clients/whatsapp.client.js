import wwebjsPkg from "whatsapp-web.js";

const { Client, LocalAuth } = wwebjsPkg;

export function createWhatsappClient(whatsappConfig) {
  return new Client({
    authStrategy: new LocalAuth({
      dataPath: whatsappConfig.auth.sessionPath,
    }),
    deviceName: whatsappConfig.deviceName,
    puppeteer: whatsappConfig.puppeteer,
    // temp
    webVersionCache: {
      type: "remote",
      remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/refs/heads/main/html/2.3000.1031490220-alpha.html`,
    },
  });
}
