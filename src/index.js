import wwebjs from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

import handleNekoCommand from "./handlers/nekoHandler.js";
import handleMenuCommand from "./handlers/menuHandler.js";
import handlePingCommand from "./handlers/pingHandler.js";
import handleKucinkCommand from "./handlers/kucinkHandler.js";
import config from "./config/config.js";

const { Client, LocalAuth } = wwebjs;
const { generate } = qrcode;

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: config.whatsapp.auth.sessionPath,
  }),
  deviceName: config.whatsapp.deviceName,
  puppeteer: config.whatsapp.puppeteer,
});

client.once("ready", () => {
  console.log(`✅ ${config.app.name} is ready!`);
});

client.on("qr", (qr) => {
  generate(qr, { small: true });
  console.log("🔐 QR code received, scan once!");
});

client.on("message_create", async (message) => {
  const msg = message.body.trim().toLowerCase();

  if (msg === "!testprivate") return handlePingCommand(client, message);
  if (msg === "!kucink") return handleKucinkCommand(client, message);
  if (msg === "!neko") return await handleNekoCommand(client, message);
  if (msg === "!menu") return handleMenuCommand(client, message);
});

client.initialize();
