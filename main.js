const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const handleNekoCommand = require("./handlers/nekoHandler");

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

  if (msg === "!testprivate") {
    client.sendMessage(message.from, "pong");
  } else if (msg === "!kucink") {
    client.sendMessage(message.from, "Bakekok cukurukuk onde mande abcd");
  } else if (msg === "!neko") {
    await handleNekoCommand(client, message);
  }
});

client.initialize();
