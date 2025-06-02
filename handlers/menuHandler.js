function handleMenuCommand(client, message) {
  const menuText = `
📜 *DAFTAR PERINTAH BOT* 📜

!testprivate - Tes koneksi bot
!kucink      - Kirim pesan kocak
!neko        - Kirim gambar neko lucu
!menu        - Tampilkan daftar perintah ini
`;

  client.sendMessage(message.from, menuText);
}

module.exports = handleMenuCommand;
