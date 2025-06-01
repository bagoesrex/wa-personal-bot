const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

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

client.initialize();
