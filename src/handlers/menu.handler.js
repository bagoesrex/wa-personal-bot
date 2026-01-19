import { COMMANDS } from "../constants/commands.js";

export async function menuHandler(message, client) {
  const messageText = `
📜 *MENU BOT*

━━━━━━━━━━━━━━
🔧 *UTILITY*
${COMMANDS.PING} — Tes koneksi bot
${COMMANDS.ABOUT} — Tampilkan informasi bot 
${COMMANDS.MENU} — Tampilkan menu ini

━━━━━━━━━━━━━━
😹 *KEONK*
${COMMANDS.MYMINE} — Gambar mymine gwej
${COMMANDS.NEKO} — Gambar neko lucu
${COMMANDS.KUCINK} — Pesan kecoags

━━━━━━━━━━━━━━
🤖 *AI & KRIPTO*
${COMMANDS.AI} <teks> — Tanya AI
${COMMANDS.PRICE} <symbol> — Cek harga crypto

━━━━━━━━━━━━━━
🖼️ *STICKER*
${COMMANDS.STICKER} — Ubah gambar → sticker
`;

  await client.sendMessage(message.from, messageText.trim());
}
