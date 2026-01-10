import { getRandomNekoImage } from "../services/nekos.service.js";
import { createImageMediaFromUrl } from "../utils/messageMedia.js";

export async function nekoHandler(message, client) {
  try {
    const imageUrl = await getRandomNekoImage();
    const media = await createImageMediaFromUrl(imageUrl);
    await client.sendMessage(message.from, media, { caption: "Keonk~ 😸", isViewOnce: true });
  } catch (error) {
    await client.sendMessage(message.from, "Maaf, Neko sedang tidak tersedia 😿");
  }
}
