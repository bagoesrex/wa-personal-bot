import wwebjs from "whatsapp-web.js";
import { getRandomNekoImage } from "../gemini/nekos.service.js";

const { MessageMedia } = wwebjs;

export async function nekoHandler(message, client) {
  try {
    const imageUrl = await getRandomNekoImage();
    const media = await MessageMedia.fromUrl(imageUrl);
    await client.sendMessage(message.from, media, { caption: "Keonk~ 😸", isViewOnce: true });
  } catch (error) {
    await client.sendMessage(message.from, "Maaf, Neko sedang tidak tersedia 😿");
  }
}
