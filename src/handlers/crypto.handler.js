import { COMMAND_USAGE, COMMANDS } from "../constants/commands.js";
import { getLatestCryptoQuoteBySymbol } from "../services/coinmarketcap.service.js";

export async function cryptoHandler(message, client) {
  try {
    const symbolMessage = message.body.slice(COMMANDS.PRICE.length).trim().toUpperCase();

    if (!symbolMessage) {
      return client.sendMessage(message.from, COMMAND_USAGE[COMMANDS.PRICE]);
    }

    const price = await getLatestCryptoQuoteBySymbol(symbolMessage);

    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price.priceIDR);

    await client.sendMessage(message.from, `💰 *${price.name} (${price.symbol})*\n` + `Harga saat ini:\n🇮🇩 ${formattedPrice}`);
  } catch (error) {
    await client.sendMessage(message.from, `${error.message ?? "Maaf, Coinmarketcap sedang tidak tersedia 😔"}`);
  }
}
