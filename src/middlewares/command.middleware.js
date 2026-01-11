import { PREFIX } from "../constants/commands.js";

export function isCommand(message) {
  return message.body.startsWith(PREFIX);
}
