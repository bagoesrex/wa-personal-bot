const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const handleNekoCommand = require("./handlers/nekoHandler");
const handleMenuCommand = require("./handlers/menuHandler");
const handlePingCommand = require("./handlers/pingHandler");
const handleKucinkCommand = require("./handlers/kucinkHandler");

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
  qrcode.generate(qr, { small: true });
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
