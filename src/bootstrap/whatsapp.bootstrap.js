import qrcodePkg from "qrcode-terminal";
import { createWhatsappClient } from "../clients/whatsapp.client.js";

export function initWhatsapp(whatsappConfig) {
  const client = createWhatsappClient(whatsappConfig);

  client.on("qr", (qr) => {
    console.log("📱 Scan QR Code:");
    qrcodePkg.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("✅ client is ready");
  });

  client.on("message", async (message) => {
    console.log(message.body);
  });

  return client.initialize();
}
