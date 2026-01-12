import { getMeguminImage } from "../services/waifu.service.js";
import { createImageMediaFromUrl } from "../utils/message.js";

export async function waifuHandler(message, client) {
  try {
    const imageUrl = await getMeguminImage();
    const media = await createImageMediaFromUrl(imageUrl);
    await client.sendMessage(message.from, media, { caption: "Miaws~ 😸", isViewOnce: true });
  } catch (error) {
    await client.sendMessage(message.from, "Maaf, Megumine sedang tidak tersedia 😿");
  }
}
