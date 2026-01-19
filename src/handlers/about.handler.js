import config from "../config/config.js";
import { COMMANDS } from "../constants/commands.js";
import { capitalizeWords } from "../utils/string.js";

export async function aboutHandler(message, client) {
  const messageText = `
🤖 *${capitalizeWords(config.app.name)}*

Halo! Aku bot pribadi yang siap bantu aktivitas harianmu.

Ketik *${COMMANDS.MENU}* untuk mulai
`;

  await client.sendMessage(message.from, messageText.trim());
}
