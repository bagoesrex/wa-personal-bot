import { COMMAND_PREFIX } from "../constants/commands.js";

export function isCommand(message) {
  return message.body.startsWith(COMMAND_PREFIX);
}
