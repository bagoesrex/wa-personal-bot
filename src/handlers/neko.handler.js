import axios from "axios";
import wwebjs from "whatsapp-web.js";

const { MessageMedia } = wwebjs;

export async function nekoHandler(message, client) {
  try {
    const response = await axios.get("https://nekos.life/api/v2/img/neko");
    const imageUrl = response.data.url;

    const media = await MessageMedia.fromUrl(imageUrl);
    await client.sendMessage(message.from, media, { caption: "Keonk~ 😸", isViewOnce: true });
  } catch (error) {
    console.error("❌ Error saat ambil gambar neko:", error.message);
    await client.sendMessage(message.from, "Gagal ambil gambar neko. Coba lagi nanti!");
  }
}
