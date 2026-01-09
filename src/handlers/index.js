import { COMMANDS } from "../constants/commands.js";
import { pingHandler } from "./ping.handler.js";

export async function handleCommand(message, client) {
  const command = message.body.split(" ")[0];

  switch (command) {
    case COMMANDS.PING:
      return pingHandler(message, client);

    default:
      return client.sendMessage(message.from, "Unknown Command");
  }
}
