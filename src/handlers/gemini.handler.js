import { COMMAND_USAGE, COMMANDS } from "../constants/commands.js";
import { askGemini } from "../services/gemini.service.js";

export async function geminiHandler(message, client) {
  try {
    const userPrompt = message.body.slice(COMMANDS.AI.length).trim().toUpperCase();

    if (!userPrompt) {
      return client.sendMessage(message.from, COMMAND_USAGE[COMMANDS.AI]);
    }

    const answer = await askGemini(userPrompt);
    const formattedAnswer = answer.replace(/\*\*(.*?)\*\*/g, "*$1*");
    await client.sendMessage(message.from, formattedAnswer);
  } catch (error) {
    await client.sendMessage(message.from, "Maaf, AI sedang tidak tersedia 😔");
  }
}
