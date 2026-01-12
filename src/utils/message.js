import wwebjsPkg from "whatsapp-web.js";

const { MessageMedia } = wwebjsPkg;

export async function createImageMediaFromUrl(url) {
  return MessageMedia.fromUrl(url);
}

export function hasMedia(message) {
  return message.hasMedia === true;
}

export function isImageMessage(message) {
  return message.hasMedia && message.type === "image";
}
