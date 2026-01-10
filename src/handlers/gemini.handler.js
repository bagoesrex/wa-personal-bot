import { COMMANDS } from "../constants/commands.js";
import { USAGE_MESSAGES } from "../constants/usage.js";
import { askGemini } from "../services/gemini.service.js";

export async function geminiHandler(message, client) {
  try {
    const userPrompt = message.body.slice(COMMANDS.AI.length).trim().toUpperCase();

    if (!userPrompt) {
      return client.sendMessage(message.from, USAGE_MESSAGES.AI);
    }

    const answer = await askGemini(userPrompt);
    await client.sendMessage(message.from, answer);
  } catch (error) {
    await client.sendMessage(message.from, "Maaf, AI sedang tidak tersedia 😔");
  }
}
