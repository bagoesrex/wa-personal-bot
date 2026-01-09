export async function menuHandler(message, client) {
  const messageText = `
╭─── 📜 *MENU BOT* 📜 ───╮

• *!ping*  
  └ Tes koneksi bot
• *!kucink*  
  └ Kirim pesan kocak  
• *!neko*  
  └ Kirim gambar neko lucu
• *!menu*  
  └ Tampilkan daftar perintah

╰──────────────────────╯
`;

  await client.sendMessage(message.from, messageText.trim());
}
