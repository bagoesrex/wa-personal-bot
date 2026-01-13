import { COMMAND_USAGE, COMMANDS } from "../constants/commands.js";
import { getLatestCryptoQuoteBySymbol } from "../services/coinmarketcap.service.js";
import { getTrendEmoji } from "../utils/crypto.js";

export async function cryptoHandler(message, client) {
  try {
    const symbolMessage = message.body.slice(COMMANDS.PRICE.length).trim().toUpperCase();

    if (!symbolMessage) {
      return client.sendMessage(message.from, COMMAND_USAGE[COMMANDS.PRICE]);
    }

    const quote = await getLatestCryptoQuoteBySymbol(symbolMessage);

    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(quote.priceIDR);

    const trendEmoji = getTrendEmoji(quote.percentChange24h);
    const chartText = `${trendEmoji} ${quote.percentChange24h.toFixed(2)}% (24h)`;
    const messageText = `💰 *${quote.name} (${quote.symbol})*\n\n 🇮🇩 ${formattedPrice}\n ${chartText}`;

    await client.sendMessage(message.from, messageText);
  } catch (error) {
    await client.sendMessage(message.from, `${error.message ?? "Maaf, Coinmarketcap sedang tidak tersedia 😔"}`);
  }
}
