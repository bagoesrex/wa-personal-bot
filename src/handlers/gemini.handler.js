import { COMMANDS } from "../constants/commands.js";
import { askGemini } from "../gemini/gemini.service.js";

export async function geminiHandler(message, client) {
  try {
    const userPrompt = message.body.replace(`/^${COMMANDS.AI}\s*/i, ""`);
    const answer = await askGemini(userPrompt);
    await client.sendMessage(message.from, answer);
  } catch (error) {
    await client.sendMessage(message.from, "Maaf, AI sedang tidak tersedia 😔");
  }
}
