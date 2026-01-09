import wwebjs from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

import handleNekoCommand from "./handlers/nekoHandler.js";
import handleMenuCommand from "./handlers/menuHandler.js";
import handlePingCommand from "./handlers/pingHandler.js";
import handleKucinkCommand from "./handlers/kucinkHandler.js";

const { Client, LocalAuth } = wwebjs;
const { generate } = qrcode;

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: "./session",
  }),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.once("ready", () => {
  console.log("✅ Client is ready!");
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
