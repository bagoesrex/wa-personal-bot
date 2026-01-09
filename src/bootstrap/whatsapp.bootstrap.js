import qrcodePkg from "qrcode-terminal";
import { createWhatsappClient } from "../clients/whatsapp.client.js";
import { WHATSAPP_EVENTS } from "../constants/events.js";

export function initWhatsapp(whatsappConfig) {
  const client = createWhatsappClient(whatsappConfig);

  client.on(WHATSAPP_EVENTS.QR, (qr) => {
    console.log("📱 Scan QR Code:");
    qrcodePkg.generate(qr, { small: true });
  });

  client.once(WHATSAPP_EVENTS.AUTH_FAILURE, (message) => {
    console.error("❌ Auth failure:", message);
    console.error("Please re-scan QR code");
  });

  client.once(WHATSAPP_EVENTS.READY, () => {
    console.log("✅ client is ready");
  });

  client.on(WHATSAPP_EVENTS.DISCONNECTED, () => {
    console.warn("⚠️ Client is disconnected");
  });

  client.on(WHATSAPP_EVENTS.MESSAGE, async (message) => {
    console.log(message.body);
  });

  return client.initialize();
}
