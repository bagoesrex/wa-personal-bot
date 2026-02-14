import qrcodePkg from "qrcode-terminal";
import { createWhatsappClient } from "../clients/whatsapp.client.js";
import { WHATSAPP_EVENTS } from "../constants/events.js";
import { validateMessage } from "../validators/message.schema.js";
import { handleCommand } from "../handlers/index.js";
import { isCommand } from "../middlewares/command.middleware.js";
import { isNewMessage } from "../middlewares/message.middleware.js";
import config from "../config/config.js";

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
    console.log(`🤖 Bot started with prefix: ${config.app.commandPrefix}`);
  });

  client.on(WHATSAPP_EVENTS.DISCONNECTED, () => {
    console.warn("⚠️ Client is disconnected");
  });

  client.on(WHATSAPP_EVENTS.MESSAGE, async (message) => {
    if (!isNewMessage(message)) return;
    if (!validateMessage(message)) return;
    if (!isCommand(message)) return;

    await handleCommand(message, client);
  });

  return client.initialize();
}
