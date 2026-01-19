import { COMMANDS } from "../constants/commands.js";
import { aboutHandler } from "./about.handler.js";
import { cryptoHandler } from "./crypto.handler.js";
import { geminiHandler } from "./gemini.handler.js";
import { kucinkHandler } from "./kucink.handler.js";
import { menuHandler } from "./menu.handler.js";
import { nekoHandler } from "./neko.handler.js";
import { pingHandler } from "./ping.handler.js";
import { stickerHandler } from "./sticker.handler.js";
import { waifuHandler } from "./waifu.handler.js";

export async function handleCommand(message, client) {
  const command = message.body.split(" ")[0];

  switch (command) {
    case COMMANDS.PING:
      return pingHandler(message, client);
    case COMMANDS.NEKO:
      return nekoHandler(message, client);
    case COMMANDS.MENU:
      return menuHandler(message, client);
    case COMMANDS.KUCINK:
      return kucinkHandler(message, client);
    case COMMANDS.AI:
      return geminiHandler(message, client);
    case COMMANDS.PRICE:
      return cryptoHandler(message, client);
    case COMMANDS.MYMINE:
      return waifuHandler(message, client);
    case COMMANDS.STICKER:
      return stickerHandler(message, client);
    case COMMANDS.ABOUT:
      return aboutHandler(message, client);

    default:
      return client.sendMessage(message.from, "Unknown Command");
  }
}
