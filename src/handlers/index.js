import { COMMANDS } from "../constants/commands.js";
import { kucinkHandler } from "./kucink.handler.js";
import { menuHandler } from "./menu.handler.js";
import { nekoHandler } from "./neko.handler.js";
import { pingHandler } from "./ping.handler.js";

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

    default:
      return client.sendMessage(message.from, "Unknown Command");
  }
}
