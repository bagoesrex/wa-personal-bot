import { hasMedia, isImageMessage } from "../utils/message.js";

export async function stickerHandler(message, client) {
  try {
    if (!hasMedia(message)) {
      await client.sendMessage(message.from, "Kirim gambar dulu untuk dijadikan sticker 😾");
      return;
    }

    if (!isImageMessage(message)) {
      await client.sendMessage(message.from, "Format tidak valid 😾");
      return;
    }

    const media = await message.downloadMedia();

    await client.sendMessage(message.from, media, {
      sendMediaAsSticker: true,
      stickerName: "Kucink JMK",
      stickerAuthor: "Sikucink",
    });
  } catch (error) {
    await client.sendMessage(message.from, "Maaf, Sticker sedang tidak tersedia 😿");
  }
}
