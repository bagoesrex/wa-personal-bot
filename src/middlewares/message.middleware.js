const BOT_STARTED_AT = Date.now();

export function isNewMessage(message) {
  return message.timestamp * 1000 >= BOT_STARTED_AT;
}
