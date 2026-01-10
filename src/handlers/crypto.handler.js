import { COMMANDS } from "../constants/commands.js";
import { USAGE_MESSAGES } from "../constants/usage.js";
import { getLatestCryptoQuoteBySymbol } from "../services/coinmarketcap.service.js";

export async function cryptoHandler(message, client) {
  try {
    const symbolMessage = message.body.slice(COMMANDS.PRICE.length).trim().toUpperCase();

    if (!symbolMessage) {
      return client.sendMessage(message.from, USAGE_MESSAGES.PRICE);
    }

    const price = await getLatestCryptoQuoteBySymbol(symbolMessage);
    await client.sendMessage(message.from, price.priceIDR.toString());
  } catch (error) {
    await client.sendMessage(message.from, `${error.message ?? "Maaf, Coinmarketcap sedang tidak tersedia 😔"}`);
  }
}
