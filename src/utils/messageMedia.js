import wwebjsPkg from "whatsapp-web.js";

const { MessageMedia } = wwebjsPkg;

export async function createImageMediaFromUrl(url) {
  return MessageMedia.fromUrl(url);
}
